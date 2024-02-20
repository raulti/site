import React, { useMemo } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import IEvent from '@/interfaces/Event';

import Button from '@/components/Form/Button';
import ShareButton from '@/components/ShareButton';

import { Container } from './styles';

import { format, parseISO } from 'date-fns';// eslint-disable-line
import { ptBR  } from 'date-fns/locale';// eslint-disable-line

interface IProps {
  data: IEvent;
}

const ItemBanner: React.FC<IProps> = ({ data }) => {
  const linkShare = `https://easyingressos.com/evento/`;

  // const dateFormat =
  //   data?.due_date &&
  //   format(parseISO(data.due_date), "EEEE dd 'de' MMMM - HH:mm", {
  //     locale: ptBR,
  //   });

  // const formattedDate =
  //   dateFormat && dateFormat[0].toUpperCase() + dateFormat.substring(1);

  const formattedDate = useMemo(() => {
    if (
      !data.alternative_date_start &&
      !data.alternative_date_end &&
      data.due_date
    ) {
      const date = format(
        parseISO(data.due_date),
        "EEEE dd 'de' MMMM 'de' yyyy - HH:mm",
        {
          locale: ptBR,
        },
      );

      return date[0].toUpperCase() + date.substring(1);
    }

    const startDate = format(
      parseISO(data.alternative_date_start),
      "EEEE dd 'de' MMMM 'de' yyyy - HH:mm",
      {
        locale: ptBR,
      },
    );

    const endDate = format(
      parseISO(data.alternative_date_end),
      "EEEE dd 'de'  'de' yyyy - HH:mm",
      {
        locale: ptBR,
      },
    );

    return `${startDate[0].toUpperCase() + startDate.substring(1)} até ${
      endDate[0].toUpperCase() + endDate.substring(1)
    }`;
  }, [data.alternative_date_end, data.alternative_date_start, data.due_date]);

  const formattedCityUF = `${data?.address?.city || ''} - ${
    data?.address?.uf || ''
  }`;

  return (
    <Container>
      <div className="div-image">
        <Image
          src={
            data?.image ||
            'https://dummyimage.com/360x211/212d47/f58434.png&text=EASY+INGRESSOS'
          }
          blurDataURL={
            data?.image ||
            'https://dummyimage.com/360x211/212d47/f58434.png&text=EASY+INGRESSOS'
          }
          placeholder="blur"
          alt="img-banner"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="data-banner">
        <div className="title-banner">
          <span>{formattedDate}</span>

          <h2>{data.name}</h2>
        </div>

        {formattedCityUF !== ' - ' ? (
          <p>
            {data?.address?.name ? `${data?.address?.name}, ` : ''}
            {formattedCityUF}
          </p>
        ) : (
          <></>
        )}

        <div className="buttons">
          <Link href={`evento/${data.slug}`}>
            <Button typeButton="secondary">Mais detalhes</Button>
          </Link>

          <ShareButton link={`${linkShare}${data.slug}`} />
        </div>
      </div>
    </Container>
  );
};

export default ItemBanner;
