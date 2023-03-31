import styled from 'styled-components';
import { ReactComponent as PlusAccountIcon } from './../img/icon-plus-account.svg';
import { ReactComponent as DbOutIcon } from './../img/icon-db-out.svg';
import { ReactComponent as DbInIcon } from './../img/icon-db-in.svg';
import { ReactComponent as PencilIcon } from './../img/icon-pencil.svg';

export default function RadialMenu() {
  return (
    <>
      <Root>
        <TopItem>
          <Wrapper>
            <StyledPlusAccountIcon />
            <ItemText>Добавить пользователя</ItemText>
          </Wrapper>
        </TopItem>
        <RightItem>
          <Wrapper>
            <StyledDbOutIcon />
            <ItemText>Экспортировать контакты</ItemText>
          </Wrapper>
        </RightItem>
        <BottomItem>
          <Wrapper>
            <StyledPencilIcon />
            <ItemText>Редактировать список</ItemText>
          </Wrapper>
        </BottomItem>
        <LeftItem>
          <Wrapper>
            <StyledDbInIcon />
            <ItemText>Импортировать контакты</ItemText>
          </Wrapper>
        </LeftItem>
      </Root>
    </>
  );
}

const Root = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 10;

  display: flex;
  flex-wrap: wrap;
  height: 436px;
  width: 436px;

  transform: translate(-50%, -50%) rotate(45deg);
`;

const StyledPlusAccountIcon = styled(PlusAccountIcon)`
  width: 40px;
  height: 40px;

  fill: var(--color-accent);
`;

const StyledDbOutIcon = styled(DbOutIcon)`
  width: 40px;
  height: 36px;

  fill: var(--color-accent);
`;

const StyledDbInIcon = styled(DbInIcon)`
  width: 40px;
  height: 36px;

  fill: var(--color-accent);
`;

const StyledPencilIcon = styled(PencilIcon)`
  width: 30px;
  height: 30px;

  fill: var(--color-accent);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 8px;

  height: 218px;
  width: 218px;

  transform: rotate(-45deg);
`;

const ItemText = styled.span`
  width: 125px;

  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--color-accent);
  text-align: center;
`;

const TopItem = styled.div`
  height: 218px;
  width: 218px;
  border-radius: 100% 0 0% 0;
  background: radial-gradient(
    circle at 100% 100%,
    transparent 64px,
    #ffffff 65px
  );

  &:hover {
    background: radial-gradient(
      circle at 100% 100%,
      transparent 64px,
      var(--color-accent) 65px
    );
  }

  &:hover ${StyledPlusAccountIcon} {
    fill: #fefefe;
  }

  &:hover ${ItemText} {
    color: #fefefe;
  }
`;

const RightItem = styled.div`
  height: 218px;
  width: 218px;
  border-radius: 0 100% 0 0;
  background: radial-gradient(circle at 0 100%, transparent 64px, #ffffff 65px);

  &:hover {
    background: radial-gradient(
      circle at 0 100%,
      transparent 64px,
      var(--color-accent) 65px
    );
  }

  &:hover ${StyledDbOutIcon} {
    fill: #fefefe;
  }

  &:hover ${ItemText} {
    color: #fefefe;
  }
`;

const BottomItem = styled.div`
  height: 218px;
  width: 218px;
  border-radius: 0 0 0 100%;
  background: radial-gradient(circle at 100% 0, transparent 64px, #ffffff 65px);

  &:hover {
    background: radial-gradient(
      circle at 100% 0,
      transparent 64px,
      var(--color-accent) 65px
    );
  }

  &:hover ${StyledPencilIcon} {
    fill: #fefefe;
  }

  &:hover ${ItemText} {
    color: #fefefe;
  }
`;

const LeftItem = styled.div`
  height: 218px;
  width: 218px;
  border-radius: 0 0 100% 0;
  background: radial-gradient(circle at 0 0, transparent 64px, #ffffff 65px);

  &:hover {
    background: radial-gradient(
      circle at 0 0,
      transparent 64px,
      var(--color-accent) 65px
    );
  }

  &:hover ${StyledDbInIcon} {
    fill: #fefefe;
  }

  &:hover ${ItemText} {
    color: #fefefe;
  }
`;
