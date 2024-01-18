import React from 'react';

import { ILoading } from '@/interfaces/components/Loading';

import { Container } from './styles';

const Loading: React.FC<ILoading> = ({ ...rest }) => {
  return (
    <Container {...rest}>
      <div className="dot" />
      <div className="dot" />
      <div className="dot" />
      <div className="dot" />
      <div className="dot" />
    </Container>
  );
};

export default Loading;
