import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import styled from 'styled-components';

export default function AppButton({
  children,
  ...rest
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) {
  return <Root {...rest}>{children}</Root>;
}

const Root = styled.button`
  padding: 10px;

  font-weight: 600;
  color: var(--color-accent);

  background-color: #ffffff;
  border: none;
  border-radius: 8px;

  &:hover {
    color: #ffffff;

    background-color: var(--color-accent);
  }
`;
