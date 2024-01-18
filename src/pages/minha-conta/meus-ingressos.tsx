import { format, parseISO } from 'date-fns';// eslint-disable-line
import { ptBR  } from 'date-fns/locale';// eslint-disable-line
import { parseCookies } from 'nookies';
import React, { useEffect, useState } from 'react';

import { GetServerSideProps } from 'next';

import { useAuth } from '@/hooks/auth';
import { useToast } from '@/hooks/toast';
import api from '@/services/api';

import { IResponseSales } from '@/interfaces/IResponseSales';
import { ISale } from '@/interfaces/ISale';

import CardAccordion from '@/components/CardAccordionTicket';
import CardMyTicket from '@/components/CardMyTicket';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Loading from '@/components/Loading';
import MenuLateral from '@/components/MenuLateral';
import Metadata from '@/components/Metadata';

import { Container } from '@/styles/pages/MyAccount/MyTickets';
import theme from '@/styles/theme';

const MyTickets: React.FC = () => {
  const { addToast } = useToast();
  const { user } = useAuth();

  const [data, setData] = useState<ISale[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      return;
    }

    api
      .get('/sales?order=id-desc')
      .then(res => {
        const resData: IResponseSales[] = res.data.data;

        setData(
          resData.map(x => {
            const formatedTotalValue = x.total?.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            });

            const formatedDate =
              x.created_at &&
              format(parseISO(x.created_at), 'dd/MM/yyyy', {
                locale: ptBR,
              });

            const event = x.items.length > 0 && x.items[0].ticket.event;

            const formatedDateEvent =
              event?.due_date &&
              format(parseISO(event?.due_date), "EEEE dd 'de' MMMM - HH:mm", {
                locale: ptBR,
              });

            const formattedDateEvent =
              formatedDateEvent &&
              formatedDateEvent[0].toUpperCase() +
                formatedDateEvent.substring(1);

            const formattedCityUFEvent =
              event && `${event?.city || ''} - ${event?.uf}`;

            return {
              id: x.id,
              formatedTotalValue,
              formatedDate,
              created_at: x.created_at,
              subtotal: x.subtotal,
              tax_value: x.tax_value,
              total: x.total,

              event: {
                image: event?.image,
                name: event?.name,
                formatedDate: formattedDateEvent,
                formatedAddress: formattedCityUFEvent,
              },

              tickets: x.items,

              ...x,
            };
          }),
        );
      })
      .catch(err => {
        addToast({
          title: 'Erro!',

          type: 'error',
          screen: 'Organizer',
          description:
            err.response?.errors?.length > 0
              ? err.response?.errors[0]?.message
              : err.response?.message,
        });
      })
      .finally(() => setLoading(false));
  }, [addToast, user]);

  return (
    <>
      <Metadata data={{ title: 'Meus Ingressos', index: false }} />

      <Header />

      <main>
        <Container>
          <section>
            <MenuLateral screen="meus-ingressos" />

            <div className="content">
              <div className="buttons-header" />
              <div className="content-cars">
                <h5>Meus ingressos</h5>

                {loading && <Loading size={30} color={theme.colors.primary} />}

                {data.map(item => (
                  <CardAccordion
                    title={`#${item.id}`}
                    subtitle={item.formatedTotalValue}
                    date={item.formatedDate}
                    // onClick={open => handleLoadOpen(open, item.id)}
                    key={item.id}
                    numberTicket={item.tickets.length}
                  >
                    <CardMyTicket data={item} />
                  </CardAccordion>
                ))}
              </div>
            </div>
          </section>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default MyTickets;

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { 'easy.token': token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
