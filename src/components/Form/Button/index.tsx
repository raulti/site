import React from 'react';

import { IButton } from '@/interfaces/components/form/Button';

import Loading from '@/components/Loading';

import theme from '@/styles/theme';

import { Container } from './styles';

const Button: React.FC<IButton> = ({
  loading,
  typeButton,
  children,
  ...rest
}) => {
  return (
    <Container typeButton={typeButton} disabled={loading} {...rest}>
      <>
        {loading && (
          <Loading
            color={
              typeButton === 'secondary'
                ? theme.colors.secondary
                : theme.colors.white
            }
            size={16}
          />
        )}

        {!loading && children}
      </>
    </Container>
  );
};

export default Button;
