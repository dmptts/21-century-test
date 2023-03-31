import styled from 'styled-components';

interface IAppOverlayProps {
  handleClick: () => void;
}

export default function AppOverlay({ handleClick }: IAppOverlayProps) {
  return <Overlay onClick={handleClick} />;
}

const Overlay = styled.div`
  position: fixed;
  z-index: 5;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: rgba(5, 5, 16, 0.5);
`;
