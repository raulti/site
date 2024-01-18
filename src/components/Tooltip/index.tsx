import React from 'react';

import { ITooltip } from '@/interfaces/components/Tooltip';

import { Container } from './styles';

const Tooltip: React.FC<ITooltip> = ({ title, children, ...rest }) => (
  <Container {...rest}>
    {children}

    <span>{title}</span>
  </Container>
);

export default Tooltip;
