import { ImgHTMLAttributes, SyntheticEvent } from 'react';
import styled from 'styled-components';
import userpicPlacholder from './../img/icon-usepic-placeholder.svg';

interface IUserpicProps extends ImgHTMLAttributes<HTMLImageElement> {
  url?: string;
}

export default function Userpic({ src, ...props }: IUserpicProps) {
  const handleImgError = (e: SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = userpicPlacholder;
  };

  return (
    <Root
      src={src ?? userpicPlacholder}
      alt="Аватар пользователя"
      {...props}
      onError={handleImgError}
    />
  );
}

const Root = styled.img`
  object-fit: cover;
  border-radius: 50%;
`;
