import { flexRender, Table } from '@tanstack/react-table';
import styled from 'styled-components';
import { IContact } from '../types/contact';
import Container from './Container';

interface IContactTableHeaderProps {
  data: Table<IContact>;
}

export default function ContactTableHeader({ data }: IContactTableHeaderProps) {
  return (
    <Root>
      <Container>
        {data.getHeaderGroups().map((headerGroup) => (
          <HeaderRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <div key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </div>
            ))}
          </HeaderRow>
        ))}
      </Container>
    </Root>
  );
}

const Root = styled.div`
  position: fixed;
  top: 64px;

  width: 100%;

  background-color: #ffffff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

const HeaderRow = styled.div`
  display: grid;
  grid-template-columns: 52px 180px 158px 320px 245px 35px;
  column-gap: 16px;
  align-items: center;

  padding: 6px 12px;
  padding-bottom: 6px;
`;
