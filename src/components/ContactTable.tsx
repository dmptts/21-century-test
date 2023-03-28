import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useGetContactListQuery } from '../store/contactApi';

export default function ContactTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isFetching } = useGetContactListQuery(currentPage);

  const handleScroll = useCallback(() => {
    const scrolledToBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight;

    if (scrolledToBottom && !isFetching) {
      setCurrentPage(currentPage + 1);
    }
  }, [currentPage, isFetching]);

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);

    return () => document.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <ul>
      {data?.map((_, i) => (
        <Contact key={i}>{i}</Contact>
      ))}
    </ul>
  );
}

const Contact = styled.li`
  min-height: 100px;
`;
