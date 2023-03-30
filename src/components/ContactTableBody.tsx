import { Table } from '@tanstack/react-table';
import styled from 'styled-components';
import { IContact } from '../types/contact';
import ContactRow from './ContactRow';
import Container from './Container';

interface IContactTableBodyProps {
  data: Table<IContact>;
}

export default function ContactTableBody({ data }: IContactTableBodyProps) {
  return (
    <TableBody>
      <TableBodyContainer>
        {data.getRowModel().rows.map((row) => (
          <ContactRow data={row} />
        ))}
      </TableBodyContainer>
    </TableBody>
  );
}

const TableBody = styled.div`
  min-height: 100vh;
  padding-top: 112px;

  background-color: #eef0f4;
`;

const TableBodyContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  row-gap: 1px;
`;
