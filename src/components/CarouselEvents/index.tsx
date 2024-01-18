import React, { useCallback, useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import { ICarouselEvents } from '@/interfaces/components/CarouselEvents';

import CardEvent from '../CardEvent';
import { Container, Content } from './styles';

const CarouselEvents: React.FC<ICarouselEvents> = ({ data }) => {
  const [page, setPage] = useState(1);
  const [widthPage, setWidthPage] = useState(1);

  const handlePage = useCallback((type: 'back' | 'next') => {
    if (type === 'next') {
      setPage(state => state + 1);
    }
    if (type === 'back') {
      setPage(state => state - 1);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWidthPage(window.innerWidth);

      window.addEventListener('resize', () => {
        setWidthPage(window.innerWidth);
      });
    }
  }, []);

  const widthLeftForUse = widthPage - 180;
  const itemPerPage = Math.trunc(widthLeftForUse / 418);
  const totalPage = Math.round(data.length / itemPerPage);

  return (
    <Container>
      <div className="content-banner">
        <button
          type="button"
          className="button-left"
          onClick={() => handlePage('back')}
          disabled={page === 1}
        >
          <FaChevronLeft />
        </button>

        <Content numItens={data.length} page={page} itemPerPage={itemPerPage}>
          <div className="contaniner-cards">
            {data.map(event => (
              <CardEvent key={event.slug} data={event} />
            ))}
          </div>
        </Content>

        <button
          type="button"
          className="button-right"
          onClick={() => handlePage('next')}
          disabled={totalPage === page || totalPage === 0}
        >
          <FaChevronRight />
        </button>
      </div>
    </Container>
  );
};

export default CarouselEvents;
