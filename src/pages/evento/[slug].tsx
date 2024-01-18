import GoogleMapReact from 'google-map-react';
import { parseCookies } from 'nookies';
import React, {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  FaCalendar,
  FaClock,
  FaMapMarkedAlt,
  FaShoppingBasket,
  FaTicketAlt,
} from 'react-icons/fa';
import { format, isBefore, parseISO } from 'date-fns';// eslint-disable-line
import { ptBR  } from 'date-fns/locale';// eslint-disable-line

import { setCookie } from 'cookies-next';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import api from '@/services/api';

import IEvent from '@/interfaces/Event';
import { ITicket, ITicketParam } from '@/interfaces/pages/EventOpen';
import IEventOpen from '@/interfaces/pages/Events';
import IPageProps from '@/interfaces/pages/PageInProps';

import CardEventOrganizers from '@/components/CardEventOrganizers';
import CardTicket from '@/components/CardTicket';
import CarouselEvents from '@/components/CarouselEvents';
import Footer from '@/components/Footer';
import Button from '@/components/Form/Button';
import GalleryEventOpen from '@/components/GalleryEventOpen';
import Header from '@/components/Header';
import Metadata from '@/components/Metadata';

import { Container, Description, Tickets, Marker } from '@/styles/pages/Event';

const Event: React.FC<IPageProps<IEventOpen>> = ({ data }) => {
  const router = useRouter();

  const [isReadMore, setIsReadMore] = useState(false);

  const dateFormat = format(parseISO(data.due_date), "EEEE dd 'de' MMMM", {
    locale: ptBR,
  });

  const formattedDueDate =
    dateFormat[0].toUpperCase() + dateFormat.substring(1);

  const formattedDueHour = format(parseISO(data.due_date), 'HH:mm', {
    locale: ptBR,
  });

  const formattedCityUF = `${data.address.city || ''} - ${data.address.uf}`;

  const [events, setEvents] = useState<IEvent[]>([]);
  const [loading, setLoading] = useState(false);

  const salesEndDateFormat =
    data?.sales_end_date &&
    format(parseISO(data?.sales_end_date), 'dd/MM/yyyy', {
      locale: ptBR,
    });

  useEffect(() => {
    api
      .get('/events', {
        params: {
          limit: 4,
        },
      })
      .then(response => {
        setEvents(response.data.data);
      });
  }, []);

  const [purchaseList, setPurchaseList] = useState<ITicket[]>([]);

  const handlePurchase = useCallback(
    ({ id, qtd, text, value, ticket }: ITicketParam) => {
      if (qtd !== 0) {
        const totalValue = value * qtd;

        const formatedTotalValue = totalValue?.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL',
        });

        setPurchaseList(state => {
          return [
            ...state.filter(s => s.id !== id),
            {
              id,
              qtd,
              text,
              value,
              totalValue,
              formatedTotalValue,
              ticket,
            },
          ];
        });
      } else {
        setPurchaseList(state => {
          return [...state.filter(s => s.id !== id)];
        });
      }
    },
    [],
  );

  const valorTotal = purchaseList.reduce(
    (previousValue, currentValue) => previousValue + currentValue.totalValue,
    0,
  );

  const taxValue = (valorTotal * data?.tax_percent) / 100;

  const valorTotalEnd = valorTotal + taxValue;

  const formatedTotalValueEnd = valorTotalEnd?.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });

  const formatedTaxValue = taxValue?.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });

  const googleMapsLink =
    data?.address?.lat && data?.address?.lon
      ? `http://google.com/maps?q=${data?.address?.lat},${data?.address?.lon}`
      : undefined;

  const DateEvent = useMemo(() => {
    if (
      !data.alternative_date_start &&
      !data.alternative_date_end &&
      data.due_date
    ) {
      const date = format(
        parseISO(data.due_date),
        "EEEE dd 'de' MMMM 'de' yyyy",
        {
          locale: ptBR,
        },
      );

      const formattedHour = format(parseISO(data.due_date), 'HH:mm', {
        locale: ptBR,
      });

      const formattedDate = date[0].toUpperCase() + date.substring(1);

      // return date[0].toUpperCase() + date.substring(1);

      return (
        <>
          <div>
            <FaCalendar />
            <span>{formattedDate}</span>
          </div>
          <div>
            <FaClock />
            <span>{formattedHour} horas</span>
          </div>
        </>
      );
    }

    const startDate = format(
      parseISO(data.alternative_date_start),
      "EEEE dd 'de' MMMM 'de' yyyy",
      {
        locale: ptBR,
      },
    );

    const formattedStartDate =
      startDate[0].toUpperCase() + startDate.substring(1);

    const formattedStartHour = format(parseISO(data.due_date), 'HH:mm', {
      locale: ptBR,
    });

    const endDate = format(
      parseISO(data.alternative_date_start),
      "EEEE dd 'de' MMMM 'de' yyyy",
      {
        locale: ptBR,
      },
    );

    const formattedEndDate = endDate[0].toUpperCase() + endDate.substring(1);

    const formattedEndHour = format(parseISO(data.due_date), 'HH:mm', {
      locale: ptBR,
    });

    // return `${startDate[0].toUpperCase() + startDate.substring(1)} até ${
    //   endDate[0].toUpperCase() + endDate.substring(1)
    // }`;

    return (
      <>
        <div>
          <FaCalendar />
          <span>{formattedStartDate}</span>
        </div>
        <div>
          <FaClock />
          <span>{formattedStartHour} horas</span>
        </div>
        <div>
          <span className="ate">até</span>
        </div>
        <div>
          <FaCalendar />
          <span>{formattedEndDate}</span>
        </div>
        <div>
          <FaClock />
          <span>{formattedEndHour} horas</span>
        </div>
      </>
    );
  }, [data.alternative_date_end, data.alternative_date_start, data.due_date]);

  const finalizePurchase = useCallback(() => {
    setLoading(true);
    setCookie(
      'easy.purchase',
      {
        event: {
          id: data?.id,
          image: data?.image,
          name: data?.name,
          age_classification: data?.age_classification,
          formattedDate: formattedDueDate,
          formattedHour: formattedDueHour,
          formattedCityUF,
          linkGoogleMap: googleMapsLink,
          category: data?.category?.name,
        },
        purchaseList,

        formatedTotalValueEnd,
        valorTotalEnd,
        taxPercent: data?.tax_percent || 0,
        formatedTaxValue,
      },
      {
        maxAge: 60 * 60 * 1, // 1h
      },
    );

    const { 'easy.token': token } = parseCookies();

    if (!token) {
      router.push('/login?redirect=finalizar-pedido');
    } else {
      router.push('/finalizar-pedido');
    }
  }, [
    data?.id,
    data?.image,
    data?.name,
    data?.age_classification,
    data?.category?.name,
    data?.tax_percent,
    formattedDueDate,
    formattedDueHour,
    formattedCityUF,
    googleMapsLink,
    purchaseList,
    formatedTotalValueEnd,
    valorTotalEnd,
    formatedTaxValue,
    router,
  ]);

  const salesEnd =
    data?.sales_end_date &&
    isBefore(new Date(data?.sales_end_date), new Date());

  return (
    <>
      <Metadata
        data={{
          ...data.metadata,
          image: data?.image,
          index: true,
        }}
      />

      <Header />

      <Container>
        <div className="banner-event">
          <div className="banner-event-bg">
            {data?.image && (
              <Image
                src={data?.image}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            )}

            <div className="img-card-banner">
              {data?.image && (
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
                  width={954}
                  height={538}
                  objectFit="cover"
                  objectPosition="center"
                />
              )}

              {salesEnd && (
                <div className="container-sale-closed">
                  <div className="sale-closed">
                    <p>VENDAS ENCERRADAS</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <section className="content">
          <h1>{data.name}</h1>
          {data.age_classification && (
            <span>
              CLASSIFICAÇÃO INDICATIVA: {data.age_classification} ANOS
            </span>
          )}

          <div className="data-event">
            {DateEvent}
            {/* <div>
              <FaCalendar />
              <span>{formattedDate}</span>
            </div>
            <div>
              <FaClock />
              <span>{formattedHour} horas</span>
            </div>

            <div>
              <FaCalendar />
              <span>{formattedDate}</span>
            </div>
            <div>
              <FaClock />
              <span>{formattedHour} horas</span>
            </div> */}

            <div>
              <FaMapMarkedAlt />

              {data.address?.name && googleMapsLink && (
                <Link href={googleMapsLink}>
                  <a target="blank">{data.address.name}</a>
                </Link>
              )}
              <span>, {formattedCityUF}</span>
            </div>
          </div>

          {data.about && (
            <>
              <h5>Sobre o evento</h5>

              <Description active={isReadMore}>
                <p>{data.about}</p>

                {data?.about?.length > 250 && (
                  <button
                    type="button"
                    className="read-more"
                    onClick={() => setIsReadMore(state => !state)}
                  >
                    Ler mais
                  </button>
                )}
              </Description>
            </>
          )}

          {data?.event_site && (
            <Link href={data.event_site}>
              <a target="blank">{data.event_site}</a>
            </Link>
          )}
        </section>

        <Tickets>
          {!salesEnd && (
            <>
              <div className="tickets-available">
                <div className="title-ticket">
                  <FaTicketAlt size={18} />
                  <h4>Ingressos disponíveis</h4>
                </div>
                <span>
                  Os ingressos serão vendidos até dia {salesEndDateFormat}
                </span>
                {/* <div className="buttons">
              <Button type="button" typeButton="secondary">
                ENTRADA INTEIRA
              </Button>
              <Button type="button" typeButton="tertiary">
                MEIA ENTRADA
              </Button>
            </div> */}

                <div className="cards-tickets">
                  {data.ticket_classes.map(x => (
                    <Fragment key={x.id}>
                      {x.ticket_blocks.map(ticket => {
                        return (
                          <CardTicket
                            key={ticket.id}
                            data={{
                              name: x.name,
                              value: ticket.price,
                              type: x.type,
                              lote: ticket.name,
                              tickets_available: ticket.tickets_available,
                            }}
                            onHandleQtd={(qtd, text) =>
                              handlePurchase({
                                id: ticket.id,
                                qtd,
                                text,
                                value: ticket.price,
                                ticket: x,
                              })
                            }
                          />
                        );
                      })}
                    </Fragment>
                  ))}
                </div>
              </div>

              <hr className="line" />

              <div className="selected-tickets">
                <div className="title-ticket">
                  <FaShoppingBasket size={18} />
                  <h4>Ingressos selecionados</h4>
                </div>
                <div className="description-purchase">
                  <div className="row-title">
                    <p>Qtd.</p>
                    <p>Descrição</p>
                    <p>Subtotal</p>
                  </div>

                  {purchaseList.map(x => (
                    <div key={x.id} className="row">
                      <p>{x.qtd}</p>
                      <p>{x.text}</p>
                      <p>{x.formatedTotalValue}</p>
                    </div>
                  ))}
                </div>

                {data?.tax_percent !== 0 && data?.tax_percent !== null && (
                  <div className="taxa-purchase">
                    <>
                      <p>{`Taxa administrativa ${data.tax_percent}%:`}</p>
                      <div className="value">
                        <span>{formatedTaxValue}</span>
                      </div>
                    </>
                  </div>
                )}

                <div
                  className="total-purchase"
                  style={
                    data?.tax_percent === 0 || data?.tax_percent === null
                      ? { borderTopWidth: 2, borderTopRightRadius: 12 }
                      : {}
                  }
                >
                  <p>Total:</p>
                  <div className="value">
                    <span>{formatedTotalValueEnd}</span>
                    {/* {valorTotalEnd > 0 && (
                  <p>em até 10x {formatedTotalValueEndParcel}</p>
                )} */}
                  </div>
                </div>
                <Button
                  type="button"
                  onClick={finalizePurchase}
                  disabled={purchaseList.length <= 0}
                  loading={loading}
                >
                  Prosseguir para o checkout
                </Button>

                {/* <div className="div-info">
              <div className="info-tax">
                <FaInfoCircle />

                <p>Entenda nossas taxas administrativas.</p>
              </div>
            </div> */}
              </div>
            </>
          )}
        </Tickets>

        {data.images.length > 0 && (
          <>
            <section className="title-gallery">
              <div className="title">
                <h5>Galeria</h5>
                <hr />
              </div>
            </section>

            <GalleryEventOpen data={data.images || []} />
          </>
        )}

        <section className="infos-ticket">
          <div className="title">
            <h5>ingressos</h5>
            <hr />
          </div>

          <div className="info-ticket-content">
            {data.ticket_classes.map(x => (
              <div className="info" key={x.id}>
                <h5>{x.name}</h5>
                <p>{x.description}</p>
              </div>
            ))}

            <div className="info-img">
              <Image
                src="/assets/event/ticket.webp"
                placeholder="blur"
                blurDataURL="/assets/event/ticket.webp"
                width={245}
                height={215}
              />
            </div>
          </div>
        </section>

        <section className="event-map">
          <div className="title">
            <h5>Mapa do evento</h5>
            <hr />
          </div>

          <div className="event-map-content">
            <div className="row-map-and-info">
              {data?.map_image && (
                <div className="img-map">
                  <Image
                    src={data?.map_image}
                    placeholder="blur"
                    blurDataURL={data?.map_image}
                    width={480}
                    height={360}
                  />
                </div>
              )}

              {data.map_description && (
                <div className="info-map">
                  <h5>Informações</h5>
                  <p>{data.map_description}</p>
                </div>
              )}
            </div>
            {data?.address?.lat && data?.address?.lon && (
              <div className="map">
                <div className="link-map">
                  <Link href={googleMapsLink}>
                    <a target="blank">Abrir no Google Maps</a>
                  </Link>
                </div>
                <div className="google-map">
                  <GoogleMapReact
                    bootstrapURLKeys={{
                      key: 'AIzaSyAZBUAQwMuecpHiVSVlhWD4JTi1ZklN36s',
                    }}
                    defaultCenter={{
                      lat: Number(data?.address?.lat),
                      lng: Number(data?.address?.lon),
                    }}
                    defaultZoom={17}
                  >
                    <Marker
                      lat={Number(data?.address?.lat)}
                      lng={Number(data?.address?.lon)}
                    />
                  </GoogleMapReact>
                </div>
              </div>
            )}
          </div>
        </section>

        {data.info && (
          <section className="important-info">
            <div className="title">
              <h5>Informações importantes</h5>
              <hr />
            </div>

            <div className="important-info-content">
              <p>{data.info}</p>
            </div>

            <hr />
          </section>
        )}

        <div className="other-events">
          <div className="title">
            <h3>Outros eventos</h3>
            <Link href="/busca">Ver Todos</Link>
          </div>

          <CarouselEvents data={events} />
        </div>

        <CardEventOrganizers />
      </Container>
      <Footer />
    </>
  );
};

export default Event;

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: 'blocking',
});

export const getStaticProps: GetStaticProps = async context => {
  const { slug } = context.params;

  let response;

  try {
    response = await api.get(`/events/${slug}`);
  } catch (err) {
    if (err.response.status === 404 || err.response.status === 400) {
      return {
        notFound: true,
      };
    }
  }

  return {
    props: {
      data: response.data.data,
    },
    // revalidate: 14400, // 4h
    revalidate: 1,
  };
};
