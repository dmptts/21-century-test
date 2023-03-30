import { useCallback, useEffect, useState } from 'react';
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import styled from 'styled-components';
import { useAppSelector } from '../hooks/useAppSelector';
import { useGetContactListQuery } from '../store/contactApi';
import { selectContactSearchQuery } from '../store/selectors';
import { IContact } from '../types/contact';
import ContactTableHeader from './ContactTableHeader';
import ContactTableBody from './ContactTableBody';
import { ReactComponent as Logo } from './../img/logo.svg';

export default function ContactTable() {
  const [pagination, setPagination] = useState({
    pageIndex: 1,
    pageSize: 10,
  });
  const searchQuery = useAppSelector(selectContactSearchQuery);

  useEffect(() => {
    setPagination((prevState) => ({
      ...prevState,
      pageIndex: 1,
    }));
  }, [searchQuery]);

  const { data, isFetching } = useGetContactListQuery({
    pageIndex: pagination.pageIndex,
    searchQuery: searchQuery,
  });

  const handleScroll = useCallback(() => {
    const scrolledToBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight;

    if (scrolledToBottom && !isFetching) {
      setPagination((prevState) => ({
        ...prevState,
        pageIndex: prevState.pageIndex + 1,
      }));
    }
  }, [isFetching]);

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);

    return () => document.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const defaultData: never[] = [];
  const columnHelper = createColumnHelper<IContact>();

  const columns = [
    columnHelper.accessor('id', {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('userpic', {
      header: () => <StyledLogo />,
      cell: (info) => (
        <Userpic
          src={info.getValue()}
          width="52"
          height="52"
          alt="Аватар пользователя"
        />
      ),
    }),
    columnHelper.accessor(
      (row) => `${row.first_name} ${row.last_name}`.trim(),
      {
        id: 'fullname',
        header: () => <span>Имя</span>,
        cell: (info) => info.getValue(),
      }
    ),
    columnHelper.accessor('phone', {
      header: () => <span>Телефон</span>,
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('address', {
      header: () => <span>Адрес</span>,
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('email', {
      header: () => <span>E-mail</span>,
      cell: (info) => info.getValue(),
    }),
  ];

  const table = useReactTable({
    data: data ?? defaultData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      pagination,
      columnVisibility: {
        id: false,
      },
    },
    onPaginationChange: setPagination,
    manualPagination: true,
  });

  return (
    <div>
      <ContactTableHeader data={table} />
      <ContactTableBody data={table} />
    </div>
  );
}

const StyledLogo = styled(Logo)`
  display: block;
  width: 36px;
  height: 36px;
  margin: 0 auto;
`;

const Userpic = styled.img`
  width: 52px;
  height: 52px;

  object-fit: cover;
  border-radius: 50%;
`;
