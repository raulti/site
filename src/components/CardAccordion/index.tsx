import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

import { ICardAccordion } from '@/interfaces/components/CardAccordion';

import { Container, Doubts, DataDoubts } from './styles';

const CardAccordion: React.FC<ICardAccordion> = ({ title, children }) => {
  const [visible, setVisible] = useState(false);
  return (
    <Container>
      <Doubts visible={visible} onClick={() => setVisible(!visible)}>
        <span>{title}</span>

        <div>
          <FiChevronDown size={25} />
        </div>
      </Doubts>

      <DataDoubts visible={visible}>{children}</DataDoubts>
    </Container>
  );
};

export default CardAccordion;
