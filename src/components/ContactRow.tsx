import { flexRender, Row } from '@tanstack/react-table';
import styled from 'styled-components';
import { IContact } from '../types/contact';

interface IContactRowProps {
  data: Row<IContact>;
}

export default function ContactRow({ data }: IContactRowProps) {
  return (
    <Root key={data.id}>
      {data.getVisibleCells().map((cell) => (
        <div key={cell.id}>
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </div>
      ))}
    </Root>
  );
}

const Root = styled.li`
  display: grid;
  grid-template-columns: 52px 180px 158px 320px 245px 35px;
  column-gap: 16px;
  align-items: center;

  padding: 8px 12px;
  background-color: #ffffff;
`;
