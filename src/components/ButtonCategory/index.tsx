import React from 'react';

import { TButtonCategory } from '@/interfaces/components/ButtonCategory';

import { Container } from './styles';

const ButtonCategory: React.FC<TButtonCategory> = ({
  icon,
  title,
  active,
  ...rest
}) => {
  return (
    <Container
      className="button-category"
      active={active}
      disabled={active}
      type="button"
      {...rest}
    >
      <div className="card-category">{icon}</div>

      <span className="category-title">{title}</span>
    </Container>
  );
};

export default ButtonCategory;
