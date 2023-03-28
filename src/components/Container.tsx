import { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface IContainerProps {
  className?: string;
}

export default function Container({
  children,
  className,
}: PropsWithChildren<IContainerProps>) {
  return <Root className={className}>{children}</Root>;
}

const Root = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding-left: 24px;
  padding-right: 24px;
`;
