import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { useModal } from '../hooks/useModal';

interface IAppModalProps {
  name: string;
}

export default function AppModal({
  name,
  children,
}: PropsWithChildren<IAppModalProps>) {
  const { activeModal, closeModal } = useModal();
  const isOpened = activeModal === name;

  return (
    <>
      <Modal isOpened={isOpened}>{children}</Modal>
      <Overlay isOpen={isOpened} onClick={closeModal} />
    </>
  );
}

const Modal = styled.div<{ isOpened: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 10;

  display: ${({ isOpened }) => (isOpened ? 'block' : 'none')};
  min-width: 436px;
  padding-top: 30px;
  padding-bottom: 20px;
  padding-left: 66px;
  padding-right: 66px;

  background-color: #ffffff;
  border-radius: 14px;

  transform: translate(-50%, -50%);
`;

const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  z-index: 5;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};

  background-color: rgba(5, 5, 16, 0.5);
`;
