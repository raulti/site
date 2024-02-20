import { format, parseISO } from 'date-fns';// eslint-disable-line
import { ptBR  } from 'date-fns/locale';// eslint-disable-line

import React, { useMemo } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { ICardEvent } from '@/interfaces/components/CardEvent';

import ShareButton from '../ShareButton';
import { Container } from './styles';

const CardEvent: React.FC<ICardEvent> = ({ data, ...rest }) => {
  const linkShare = `https://easyingressos.com/evento/`;

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
      "EEEE dd 'de' MMMM 'de' yyyy - HH:mm",
      {
        locale: ptBR,
      },
    );

    return `${startDate[0].toUpperCase() + startDate.substring(1)} até ${
      endDate[0].toUpperCase() + endDate.substring(1)
    }`;
  }, [data.alternative_date_end, data.alternative_date_start, data.due_date]);
  // data?.due_date &&
  // format(parseISO(data.due_date), "EEEE dd 'de' MMMM - HH:mm", {
  //   locale: ptBR,
  // });

  // const formattedDate =
  //   dateFormat && dateFormat[0].toUpperCase() + dateFormat.substring(1);

  const formattedCityUF = `${data?.address?.city || ''} - ${
    data?.address?.uf || ''
  }`;

  return (
    //
    <Container className="card-event" {...rest}>
      <Link href={`/evento/${data.slug}`}>
        <div className="div-img-card-event">
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
            width={360}
            height={211}
          />
        </div>
      </Link>

      <div className="div-share-button">
        <ShareButton typeButton="primary" link={`${linkShare}${data.slug}`} />
      </div>
      <Link href={`/evento/${data.slug}`}>
        <div className="content-card-event">
          <span className="date">{formattedDate}</span>

          <h4>{data.name}</h4>

          {formattedCityUF !== ' - ' && (
            <p>
              {data?.address?.name && (
                <>
                  {data?.address?.name} <br />
                </>
              )}
              {formattedCityUF}
            </p>
          )}
        </div>
      </Link>
    </Container>
  );
};

export default CardEvent;
