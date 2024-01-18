import React, { useCallback, useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import Image from 'next/image';

import { Card, Container, Content } from './styles';

interface IGalleryEventOpen {
  data: string[];
}

const GalleryEventOpen: React.FC<IGalleryEventOpen> = ({ data }) => {
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
          {data.map((item, index) => (
            <Card key={item} index={index + 1}>
              <Image
                src={
                  item ||
                  'https://dummyimage.com/360x270/212d47/f58434.png&text=EASY+INGRESSOS'
                }
                placeholder="blur"
                blurDataURL={
                  item ||
                  'https://dummyimage.com/360x270/212d47/f58434.png&text=EASY+INGRESSOS'
                }
                width={360}
                height={270}
                objectFit="cover"
                objectPosition="center"
              />
            </Card>
          ))}
        </div>
      </Content>

      <button
        type="button"
        className="button-right"
        onClick={() => handlePage('next')}
        disabled={totalPage <= page}
      >
        <FaChevronRight />
      </button>
    </Container>
  );
};

export default GalleryEventOpen;
