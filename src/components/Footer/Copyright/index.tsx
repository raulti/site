import React from 'react';

import Image from 'next/image';

import { Container } from './styles';

const Copyright: React.FC = () => {
  return (
    <Container>
      <section>
        <div className="risestudio">
          <a href="https://www.risestudio.com.br">
            <Image
              src="https://risestudio.com.br/public_imgs/rise-studio-favicon.png"
              alt="Rise Studio"
              width={38.4}
              height={31.2}
              className="imgRise"
            />
            <span>
              Desenvolvido por <br /> Rise Studio
            </span>
          </a>
        </div>
        <div>
          <p>Easy Ingressos © 2023 / Todos direitos reservados 2.0.1</p>
        </div>
        <div />
      </section>
    </Container>
  );
};

export default Copyright;
