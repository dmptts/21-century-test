import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { useDebounce } from '../hooks/useDebounce';
import { setSearchQuery } from '../store/searchSlice';
import { selectSearchQuery } from '../store/selectors';
import Container from './Container';

export default function Header() {
  const dispatch = useAppDispatch();
  const searchQueue = useAppSelector(selectSearchQuery);
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQueue);
  const debouncedSearch = useDebounce(localSearchQuery);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalSearchQuery(e.target.value);
  };

  useEffect(() => {
    dispatch(setSearchQuery(debouncedSearch));
  }, [debouncedSearch, dispatch]);

  return (
    <Root>
      <Container>
        <input
          type="text"
          name="contact-search"
          id="contact-search-field"
          placeholder="Поиск"
          value={localSearchQuery}
          onChange={handleSearchChange}
        />
      </Container>
    </Root>
  );
}

const Root = styled.header`
  min-height: 64px;
  background-color: var(--color-accent);
`;
