import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { useState, useEffect, InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { useDebounce } from '../hooks/useDebounce';
import { RootState } from '../store';

interface IAppSearchProps extends InputHTMLAttributes<HTMLInputElement> {
  searchQuerySelector: (state: RootState) => string;
  searchQuerySetter: ActionCreatorWithPayload<string>;
  className?: string;
}

export default function AppSearch({
  searchQuerySelector,
  searchQuerySetter,
  className,
  ...rest
}: IAppSearchProps) {
  const dispatch = useAppDispatch();
  const searchQuery = useAppSelector(searchQuerySelector);
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);
  const debouncedSearch = useDebounce(localSearchQuery);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalSearchQuery(e.target.value);
  };

  useEffect(() => {
    dispatch(searchQuerySetter(debouncedSearch));
  }, [debouncedSearch, dispatch, searchQuerySetter]);

  return (
    <Root
      value={localSearchQuery}
      onChange={handleSearchChange}
      className={className}
      {...rest}
    />
  );
}

const Root = styled.input`
  width: 100%;
  padding: 10px 30px;

  color: var(--color-text-secondary);

  background-color: rgba(196, 196, 196, 0.17);
  border: none;
  border-radius: 8px;
  outline: none;

  &::placeholder {
    color: var(--color-text-secondary);
  }
`;
