import styled from 'styled-components';
import Container from './Container';

export default function Header() {
  return (
    <Root>
      <Container></Container>
    </Root>
  );
}

const Root = styled.header`
  min-height: 64px;
  background-color: var(--color-accent);
`;
