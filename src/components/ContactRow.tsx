import { flexRender, Row } from '@tanstack/react-table';
import styled from 'styled-components';
import { useModal } from '../hooks/useModal';
import { IContact } from '../types/contact';
import AppButton from './AppButton';

interface IContactRowProps {
  data: Row<IContact>;
}

export default function ContactRow({ data }: IContactRowProps) {
  const { openModal } = useModal();

  const handleRowClick = () => {
    openModal('contact');
  };

  return (
    <Root key={data.id} onClick={handleRowClick}>
      {data.getVisibleCells().map((cell) => (
        <div key={cell.id}>
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </div>
      ))}
      <div>
        <StyledButton>Редактировать</StyledButton>
      </div>
    </Root>
  );
}

const StyledButton = styled(AppButton)`
  display: none;
`;

const Root = styled.li`
  display: grid;
  grid-template-columns: 52px 180px 158px 320px 245px 35px;
  column-gap: 16px;
  align-items: center;

  padding: 8px 12px;
  background-color: #ffffff;
  cursor: pointer;

  &:hover {
    background-color: #e5eaf4;
  }

  &:hover ${StyledButton} {
    display: block;
  }
`;
