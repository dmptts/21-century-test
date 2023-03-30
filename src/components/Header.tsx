import styled from 'styled-components';
import { setContactSearchQuery } from '../store/searchSlice';
import { selectContactSearchQuery } from '../store/selectors';
import AppSearch from './AppSearch';
import Container from './Container';

export default function Header() {
  return (
    <Root>
      <StyledContainer>
        <StyledSearch
          type="text"
          name="contact-search"
          id="contact-search-field"
          placeholder="Поиск"
          searchQuerySelector={selectContactSearchQuery}
          searchQuerySetter={setContactSearchQuery}
        />
      </StyledContainer>
    </Root>
  );
}

const Root = styled.header`
  background-color: var(--color-accent);
`;

const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;

  padding-top: 14px;
  padding-bottom: 14px;
`;

const StyledSearch = styled(AppSearch)`
  width: 452px;
`;
