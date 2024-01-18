import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Button from '../Form/Button';
import { Container } from './styles';

const CardEventOrganizers: React.FC = () => {
  return (
    <Container className="event-organizers">
      <div className="event-organizers-card">
        <div className="img-event-organizers">
          <Image
            src="/assets/organizer/img-organizers.webp"
            blurDataURL="/assets/organizer/img-organizers.webp"
            placeholder="blur"
            alt="img-organizers"
            objectFit="cover"
            width={730}
            height={411}
          />
        </div>
        <div className="content-card-event-organizers">
          <span>Para organizadores de eventos</span>
          <h5>EASY INGRESSOS - Facilitando seu Evento!</h5>

          <p>
            Uma empresa criada para proporcionar aos organizadores de festas e
            Eventos a SEGURANÇA QUE SEMPRE BUSCARAM.
          </p>
          <div className="buttons">
            <Link href="https://wa.link/r62ouo">
              <a target="blank">
                <Button>Fale com um consultor</Button>
              </a>
            </Link>
            <Link href="/area-do-organizador">Saiba Mais</Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CardEventOrganizers;
