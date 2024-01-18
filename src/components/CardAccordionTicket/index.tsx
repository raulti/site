import React, { useCallback, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

import { ICardAccordionTicket } from '@/interfaces/components/CardAccordionTicket';

import { Container, Doubts, DataDoubts } from './styles';

const CardAccordion: React.FC<ICardAccordionTicket> = ({
  title,
  subtitle,
  date,
  numberTicket,
  children,
}) => {
  const [visible, setVisible] = useState(false);

  const handleClick = useCallback(() => {
    setVisible(state => {
      return !state;
    });
  }, []);

  return (
    <Container>
      <Doubts visible={visible} onClick={handleClick}>
        <div className="titles">
          <span>{title}</span>
          {subtitle && <span>{subtitle}</span>}
          {date && <span>{date}</span>}
        </div>

        <div className="chevron">
          <FiChevronDown size={25} />
        </div>
      </Doubts>

      <DataDoubts numberTicket={numberTicket} visible={visible}>
        {children}
      </DataDoubts>
    </Container>
  );
};

export default CardAccordion;
