import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FaSearch, FaTimesCircle } from 'react-icons/fa';

import { Form } from '@unform/web';

import { NextPage } from 'next';
import { useRouter } from 'next/router';

import api from '@/services/api';

import IEvent from '@/interfaces/Event';
import IPagination from '@/interfaces/pagination';

import CardEvent from '@/components/CardEvent';
import CarouselEvents from '@/components/CarouselEvents';
import { IOption } from '@/components/CustomSelect';
import Footer from '@/components/Footer';
import Select from '@/components/Form/Select';
import Header from '@/components/Header';
import Metadata from '@/components/Metadata';
import PaginationComponent from '@/components/Pagination';

import { Container, EventsLastDaysSale } from '@/styles/pages/Search';

interface ICategory {
  id: number;
  title: string;
  slug: string;
}

const Search: NextPage = () => {
  const router = useRouter();

  const { category, keyword } = router.query;

  const categories = useMemo(
    () => [
      {
        id: 1,
        title: 'Stand Up',
        slug: 'stand-up',
      },
      {
        id: 2,
        title: 'Festivais',
        slug: 'festivais',
      },
      {
        id: 3,
        title: 'Festas',
        slug: 'festas',
      },
      {
        id: 4,
        title: 'Gastronomia',
        slug: 'gastronomia',
      },
      {
        id: 5,
        title: 'Teatro',
        slug: 'teatro',
      },
      {
        id: 6,
        title: 'Shows',
        slug: 'shows',
      },
    ],
    [],
  );

  // const categorySelected = categories.find(x => x.slug === category);

  const [categorySelected, setCategorySelected] = useState<
    ICategory | undefined
  >();
  const [pagination, setPagination] = useState<IPagination>({});
  const [currentPage, setCurrentPage] = useState(1);
  const [events, setEvents] = useState<IEvent[]>([]);

  const [eventsSalesEndDate, setEventsSalesEndDate] = useState([]);
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState('');
  const [order, setOrder] = useState('');

  useEffect(() => {
    if (category) {
      setCategorySelected(categories.find(x => x.slug === category));
    } else {
      setCategorySelected(undefined);
    }
  }, [categories, category]);

  useEffect(() => {
    api.get('/cities').then(res => {
      setCities(
        res.data.data.map((x: string, index: number) => ({
          id: index,
          value: x,
          label: x,
        })),
      );
    });

    api
      .get(`/events?sales_end_date=${new Date()}&order=due_date-desc`)
      .then(res => {
        setEventsSalesEndDate(res.data.data);
      });
  }, []);

  // Properties filters
  useEffect(() => {
    api
      .get('/events', {
        params: {
          // ...filters,]
          category_id: categorySelected?.id,
          city,
          page: currentPage,
          limit: 8,
          order,
          name: keyword,
        },
      })
      .then(response => {
        setEvents(state =>
          currentPage === 1
            ? response.data.data
            : [...state, ...response.data.data],
        );
        setPagination(response.data.pagination);
      });
  }, [currentPage, categorySelected, city, order, keyword]);

  const handlePage = useCallback(page => {
    setCurrentPage(page);
  }, []);

  return (
    <>
      <Metadata data={{ title: 'Busca', index: true }} />

      <Header />
      <Container>
        <section className="search-result">
          <div className="search-title">
            <FaSearch size={18} /> <h3>Resultado da busca para:</h3>
            {keyword && <span>{`[${keyword}]`}</span>}
          </div>

          <div className="filters-order">
            <Form
              onSubmit={() => {
                //
              }}
            >
              <div className="filters">
                <span>Filtros:</span>
                {categorySelected && (
                  <button
                    type="button"
                    className="tag"
                    onClick={() => router.replace('/busca')}
                  >
                    {categorySelected.title}
                    <FaTimesCircle />
                  </button>
                )}

                <Select
                  name="city"
                  // label="Cidade"
                  options={cities}
                  placeholder="Cidades"
                  onChange={(value: IOption) => setCity(value.value)}
                />
              </div>

              <div className="order">
                <span>Ordernar por:</span>

                <Select
                  name="Order"
                  placeholder=""
                  options={[
                    {
                      id: 1,
                      label: 'Mais Recentes',
                      value: 'due_date-asc',
                    },
                    {
                      id: 2,
                      label: 'Mais Antigos',
                      value: 'due_date-desc',
                    },
                  ]}
                  onChange={(value: IOption) => setOrder(value.value)}
                  // value={order}
                />
              </div>
            </Form>
          </div>
        </section>

        <section className="events">
          {events.map(event => (
            <CardEvent key={event.slug} data={event} />
          ))}
        </section>

        <PaginationComponent
          data={{
            total: pagination?.total,
            perPage: pagination?.perPage,
          }}
          currentPage={pagination?.page}
          changePage={page => handlePage(page)}
        />
      </Container>

      <EventsLastDaysSale>
        <div className="title">
          <h3>Últimos dias de venda</h3>
          {/* <Link href="/">Ver Todos</Link> */}
        </div>

        <CarouselEvents data={eventsSalesEndDate} />
      </EventsLastDaysSale>
      <Footer />
    </>
  );
};

export default Search;
