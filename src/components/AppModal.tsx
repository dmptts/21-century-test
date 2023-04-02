import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { useModal } from '../hooks/useModal';

interface IAppModalProps {
  name: string;
  children: ReactElement | ReactElement[];
  className?: string;
}

export default function AppModal({
  name,
  className,
  children,
}: IAppModalProps) {
  const { activeModal, closeModal } = useModal();
  const isOpened = activeModal.name === name;

  const childrenWithInjectedData = React.Children.map(children, (child) => {
    if (activeModal.data) {
      return React.cloneElement(child, {
        data: activeModal.data,
      });
    } else {
      return child;
    }
  });

  return (
    <>
      <Modal $isOpened={isOpened} className={className}>
        {childrenWithInjectedData}
      </Modal>
      <Overlay $isOpened={isOpened} onClick={closeModal} />
    </>
  );
}

const Modal = styled.div<{ $isOpened: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 10;

  display: ${({ $isOpened }) => ($isOpened ? 'block' : 'none')};

  transform: translate(-50%, -50%);
`;

const Overlay = styled.div<{ $isOpened: boolean }>`
  position: fixed;
  z-index: 5;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: ${({ $isOpened }) => ($isOpened ? 'block' : 'none')};

  background-color: rgba(5, 5, 16, 0.5);
`;
