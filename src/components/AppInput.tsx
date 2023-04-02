import { useField } from 'formik';
import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

interface IAppInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export default function AppInput({ name, ...rest }: IAppInputProps) {
  const [field, meta] = useField(name);
  const isError = Boolean(meta.error);

  return <Root $isError={isError} {...field} {...rest} />;
}

const Root = styled.input<{ $isError: boolean }>`
  width: 100%;
  padding: 4px 8px;

  text-align: center;

  background-color: rgba(196, 196, 196, 0.17);
  border: 1px solid
    ${({ $isError }) =>
      $isError ? 'var(--color-error)' : 'var(--color-accent)'};
  border-radius: 4px;

  &::placeholder {
    color: rgba(0, 0, 0, 0.47);
    text-align: center;
  }
`;
