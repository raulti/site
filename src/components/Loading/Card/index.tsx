import React from 'react';

import { ILoading } from '@/interfaces/components/Loading';

import { Container } from './styles';

const CardLoading: React.FC<ILoading> = ({ ...rest }) => {
  return (
    <Container {...rest}>
      <div className="title-card">
        <div className="title-card-loading" />
      </div>

      <div className="time-loading" />

      <div className="chevron" />
    </Container>
  );
};

export default CardLoading;
