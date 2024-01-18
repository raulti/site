import React, { useCallback, useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import Image from 'next/image';

import IEvent from '@/interfaces/Event';

import ItemBanner from './Item';
import { Container, Content } from './styles';

interface IBanner {
  data: IEvent[];
}

const Banner: React.FC<IBanner> = ({ data }) => {
  const [page, setPage] = useState(1);

  const handlePage = useCallback(type => {
    if (type === 'next') {
      setPage(state => state + 1);
    }
    if (type === 'back') {
      setPage(state => state - 1);
    }
  }, []);

  const widthPage = typeof window !== 'undefined' && window.screen.width;

  const mudarValor = useCallback(() => {
    setPage(state => {
      if (data.length === state) {
        return 1;
      }
      return state + 1;
    });
  }, [data.length]);

  useEffect(() => {
    const interval = setInterval(mudarValor, 6000);

    return () => {
      clearInterval(interval);
    };
  }, [mudarValor]);

  return (
    <Container>
      <Image
        src="/assets/home/bg-banner.webp"
        blurDataURL="/assets/home/bg-banner.webp"
        placeholder="blur"
        alt="bg-banner"
        layout="fill"
        objectFit="cover"
      />
      <div className="content-banner">
        <button
          type="button"
          className="button-left"
          onClick={() => handlePage('back')}
          disabled={page === 1}
        >
          <FaChevronLeft />
        </button>

        <section className="itens">
          <Content numItens={data.length} page={page} widthPage={widthPage}>
            {data.map(item => (
              <ItemBanner key={item.slug} data={item} />
            ))}
          </Content>
        </section>

        <button
          type="button"
          className="button-right"
          onClick={() => handlePage('next')}
          disabled={data.length === page}
        >
          <FaChevronRight />
        </button>
      </div>

      <div className="dots">
        {data.map((x, index) => (
          <button
            key={x.id}
            type="button"
            onClick={() => setPage(index + 1)}
            disabled={page === index + 1}
          >
            <div
              className="dot"
              style={{
                background:
                  page === index + 1
                    ? 'rgba(255, 255, 255, 0.8)'
                    : 'rgba(250, 250, 250, 0.3)',
              }}
            />
          </button>
        ))}
      </div>
    </Container>
  );
};

export default Banner;
