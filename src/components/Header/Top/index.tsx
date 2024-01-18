import React from 'react';
import { FaCaretDown } from 'react-icons/fa';

import Image from 'next/image';

import { Container } from './styles';

const Top: React.FC = () => {
  return (
    <Container>
      <section>
        {/* <div /> */}
        <div className="text">
          <p>EASY INGRESSOS Facilitando seu Evento!</p>
        </div>
        {/* <div className="options">
          <p>Selecione o idioma:</p>

          <div className="option">
            <Image
              src="/assets/header/PTBR.webp"
              alt="PTBR"
              width={26}
              height={18}
            />

            <p>PTBR</p>

            <FaCaretDown />
          </div>
        </div> */}
      </section>
    </Container>
  );
};

export default Top;
