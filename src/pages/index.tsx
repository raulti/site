import { format, parseISO } from 'date-fns'; // eslint-disable-line
import { ptBR } from 'date-fns/locale';// eslint-disable-line
import React, { useCallback, useEffect, useState } from 'react';

import { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import api from '@/services/api';

import IHome from '@/interfaces/pages/Home';
import IPageProps from '@/interfaces/pages/PageProps';

import Banner from '@/components/BannerHome';
import ButtonCategory from '@/components/ButtonCategory';
import CardEventOrganizers from '@/components/CardEventOrganizers';
import CarouselEvents from '@/components/CarouselEvents';
import CustomInputDate from '@/components/CustomInputDate';
import Footer from '@/components/Footer';
import Button from '@/components/Form/Button';
import Gallery from '@/components/Gallery';
import Header from '@/components/Header';
import Metadata from '@/components/Metadata';

import { ButtonSearch, Container } from '@/styles/pages/Home';

import Festivals from '@/assets/icons/festivals.svg';
import Gastronomy from '@/assets/icons/gastronomy.svg';
import Parties from '@/assets/icons/parties.svg';
import Shows from '@/assets/icons/shows.svg';
import StandUp from '@/assets/icons/stand-up.svg';
import Theater from '@/assets/icons/theater.svg';

const Home: NextPage<IPageProps<IHome>> = ({ data }) => {
  const router = useRouter();

  const categories = [
    {
      id: 1,
      title: 'Stand Up',
      icon: <StandUp />,
      link: '/busca?category=stand-up',
    },
    {
      id: 2,
      title: 'Festivais',
      icon: <Festivals />,
      link: '/busca?category=festivais',
    },
    {
      id: 3,
      title: 'Festas',
      icon: <Parties />,
      link: '/busca?category=festas',
    },
    {
      id: 4,
      title: 'Gastronomia',
      icon: <Gastronomy />,
      link: '/busca?category=gastronomia',
    },
    {
      id: 5,
      title: 'Teatro',
      icon: <Theater />,
      link: '/busca?category=teatro',
    },
    {
      id: 6,
      title: 'Shows',
      icon: <Shows />,
      link: '/busca?category=shows',
    },
  ];

  const [eventsBySchedule, setEventsBySchedule] = useState();
  const [date, setDate] = useState();
  const [categorySearch, setCategorySearch] = useState();
  const [eventsSalesEndDate, setEventsSalesEndDate] = useState([]);

  const handleOptions = useCallback(param => {
    // setSearchOptions(state => {
    //   return state.map(x =>
    //     x.title !== param
    //       ? {
    //           ...x,
    //         }
    //       : {
    //           title: x.title,
    //           active: !x.active,
    //         },
    //   );
    // });
    setCategorySearch(param);
  }, []);

  const handleChangeDate = useCallback(v => {
    setDate(v);

    const dateFormat =
      v &&
      format(v, 'yyyy-MM-dd', {
        locale: ptBR,
      });

    api.get(`/events?due_date=${dateFormat}`).then(res => {
      setEventsBySchedule(res.data.data);
    });
  }, []);

  const handleSearch = useCallback(() => {
    router.push(`/busca?category=${categorySearch}`);
  }, [router, categorySearch]);

  useEffect(() => {
    api
      .get(`/events?sales_end_date=${new Date()}&order=due_date-desc`)
      .then(res => {
        setEventsSalesEndDate(res.data.data);
      });
  }, []);

  return (
    <>
      <Metadata
        data={{
          ...data.data.metadata,
          image: data.data?.image,
          index: true,
        }}
      />

      <Header />

      <Container>
        {data.data.data.featured_events.length > 0 && (
          <Banner data={data.data.data.featured_events} />
        )}

        <section className="categories">
          <div className="title">
            <h3>O que você procura?</h3>
          </div>

          <div className="content-categories">
            {categories.map(category => (
              <ButtonCategory
                key={category.id}
                icon={category.icon}
                title={category.title}
                // active={categoryActive === category.id}
                onClick={() => router.push(`${category.link}`)}
              />
            ))}
          </div>
        </section>

        <div className="popular-events">
          <div className="title">
            <div className="title-and-date-scheduled">
              <h3>Mais Procurados</h3>
            </div>
            <Link href="/busca">Ver Todos</Link>
          </div>

          <CarouselEvents data={data.data.data.uf_events} />
        </div>

        <div className="scheduled-events">
          <div className="title">
            <div className="title-and-date-scheduled">
              <h3>Agenda</h3>
              <CustomInputDate
                name="date"
                value={date}
                handleChange={handleChangeDate}
              />
            </div>

            <Link href="/busca">Ver Todos</Link>
          </div>

          <CarouselEvents
            data={eventsBySchedule || data.data.data.last_events}
          />
        </div>

        <div className="container-search">
          <div className="card-search">
            <h4>Personalize sua busca!</h4>
            <p> Selecione a categoria mais interessante para você!</p>

            <div className="buttons-search">
              {data.data.data.categories.map(category => (
                <ButtonSearch
                  key={category.name}
                  type="button"
                  active={categorySearch === category.slug}
                  onClick={() => handleOptions(category.slug)}
                >
                  {category.name}
                </ButtonSearch>
              ))}
            </div>

            <Button onClick={() => handleSearch()}>Encontrar eventos</Button>
          </div>

          <Image
            src="/assets/home/bg-search.webp"
            blurDataURL="/assets/home/bg-search.webp"
            placeholder="blur"
            alt="bg-search"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="events-last-days-sale">
          <div className="title">
            <h3>Últimos dias de venda</h3>
            <Link href="/busca">Ver Todos</Link>
          </div>

          <CarouselEvents data={eventsSalesEndDate} />
        </div>

        {data.data.data.event_images.length > 0 && (
          <div className="photos-events-recent">
            <div className="title">
              <h3>Fotos dos últimos eventos</h3>
            </div>

            <Gallery data={data.data.data.event_images} />
          </div>
        )}

        <CardEventOrganizers />
      </Container>
      <Footer />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get('/pages/home');

  return {
    props: {
      data: response.data,
    },
    // revalidate: 3600, // 1h
    revalidate: 60, // 1h
  };
};
