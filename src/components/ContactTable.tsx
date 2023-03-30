import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../hooks/useAppSelector';
import { useGetContactListQuery } from '../store/contactApi';
import { selectSearchQuery } from '../store/selectors';
import { IContact } from '../types/contact';

export default function ContactTable() {
  const [pagination, setPagination] = useState({
    pageIndex: 1,
    pageSize: 10,
  });
  const searchQuery = useAppSelector(selectSearchQuery);

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
    <table>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const Contact = styled.li`
  min-height: 100px;
`;
