import { PropsWithChildren, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import AppOverlay from './AppOverlay';

interface IAppModalProps {
  className?: string;
}

export default function AppModal({
  className,
  children,
}: PropsWithChildren<IAppModalProps>) {
  const navigate = useNavigate();

  const handleOverlayClick = () => {
    navigate(-1);
  };

  const handleEscPress = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        navigate(-1);
      }
    },
    [navigate]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleEscPress);

    return () => document.removeEventListener('keydown', handleEscPress);
  }, [handleEscPress]);

  return (
    <>
      <Modal isOpened={false} className={className}>
        {children}
      </Modal>
      <AppOverlay handleClick={handleOverlayClick} />
    </>
  );
}

const Modal = styled.div<{ isOpened: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 10;

  background-color: #ffffff;
  border-radius: 14px;

  transform: translate(-50%, -50%);
`;
