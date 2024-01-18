import React from 'react';
import {
  FaArrowLeft,
  FaCalendar,
  FaCheckCircle,
  FaClock,
  FaCreditCard,
  FaInfoCircle,
  FaMapMarkedAlt,
  FaShoppingBasket,
} from 'react-icons/fa';

import Image from 'next/image';

import { IData } from '@/interfaces/pages/FinalizingOrders';

import Festivals from '@/assets/icons/festivals.svg';
import Gastronomy from '@/assets/icons/gastronomy.svg';
import Parties from '@/assets/icons/parties.svg';
import Shows from '@/assets/icons/shows.svg';
import StandUp from '@/assets/icons/stand-up.svg';
import Theater from '@/assets/icons/theater.svg';

import { Container } from './styles';

interface ICardEventCheckout {
  data: IData;
}

const CardEventCheckout: React.FC<ICardEventCheckout> = ({ data }) => {
  const categories = [
    {
      id: 1,
      title: 'Stand Up',
      icon: <StandUp />,
    },
    {
      id: 2,
      title: 'Festivais',
      icon: <Festivals />,
    },
    {
      id: 3,
      title: 'Festas',
      icon: <Parties />,
    },
    {
      id: 4,
      title: 'Gastronomia',
      icon: <Gastronomy />,
    },
    {
      id: 5,
      title: 'Teatro',
      icon: <Theater />,
    },
    {
      id: 6,
      title: 'Shows',
      icon: <Shows />,
    },
  ];

  const filtredCategory =
    data?.event?.category &&
    categories.find(x => x.title === data.event.category);

  return (
    <Container className="card-event">
      <div className="img-event">
        {data?.event?.image && (
          <Image
            src={data?.event?.image}
            blurDataURL={data?.event?.image}
            placeholder="blur"
            width={588}
            height={332}
            objectFit="cover"
            layout="fill"
          />
        )}
      </div>

      <div className="text-card-event">
        <div className="title-card-event">
          <h1>{data?.event?.name}</h1>

          <div className="category">
            {filtredCategory && filtredCategory?.icon}
          </div>
        </div>

        {data?.event?.age_classification && (
          <small>
            CLASSIFICAÇÃO INDICATIVA: {data?.event?.age_classification} ANOS
          </small>
        )}

        <div className="data-event">
          <span>
            <FaCalendar />
            {data?.event?.formattedDate}
          </span>

          <span>
            <FaClock />
            {data?.event?.formattedHour}
          </span>
          <span>
            <FaMapMarkedAlt />
            {data?.event?.formattedCityUF}
          </span>
        </div>
      </div>
    </Container>
  );
};

export default CardEventCheckout;
