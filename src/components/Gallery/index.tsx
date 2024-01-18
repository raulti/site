import { format, parseISO } from 'date-fns'; // eslint-disable-line
import { ptBR  } from 'date-fns/locale';// eslint-disable-line
import React, { useCallback, useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import Image from 'next/image';

import { IEventImages } from '@/interfaces/pages/Home';

import { Card, Container, Content } from './styles';

interface IGallery {
  data: IEventImages[];
}

const Gallery: React.FC<IGallery> = ({ data }) => {
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

  // const data = [
  //   {
  //     id: 1,
  //     title: 'NOME DA FESTA',
  //     local: 'Pouso Alegre - MG',
  //     date: '28/07/2022',
  //     imgUrl:
  //       'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGFydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  //   },
  //   {
  //     id: 2,
  //     title: 'Ano novo',
  //     local: 'Pouso Alegre - MG',
  //     date: '28/07/2022',
  //     imgUrl:
  //       'https://images.unsplash.com/photo-1536940385103-c729049165e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBhcnR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  //   },
  //   {
  //     id: 3,
  //     title: 'Color Party',
  //     local: 'Bragança - SP',
  //     date: '28/07/2022',
  //     imgUrl:
  //       'https://images.unsplash.com/photo-1496024840928-4c417adf211d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBhcnR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  //   },
  //   {
  //     id: 4,
  //     title: 'NOME DA FESTA 4',
  //     local: 'Pouso Alegre - MG',
  //     date: '28/07/2022',
  //     imgUrl:
  //       'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBhcnR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  //   },
  //   {
  //     id: 5,
  //     title: 'Show Pedro sampaio',
  //     local: 'Extrema - MG',
  //     date: '28/07/2022',
  //     imgUrl:
  //       'https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBhcnR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  //   },
  //   {
  //     id: 6,
  //     title: 'Aniversario da cidade',
  //     local: 'Cambuí - MG',
  //     date: '28/07/2022',
  //     imgUrl:
  //       'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGFydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  //   },

  //   {
  //     id: 7,
  //     title: 'Festa de Bom Jesus',
  //     local: 'Corrego do Bom Jesus - MG',
  //     date: '28/07/2022',
  //     imgUrl:
  //       'https://images.unsplash.com/photo-1527269534026-c86f4009eace?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNlbGVicmF0ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  //   },
  //   {
  //     id: 8,
  //     title: 'Festa do Peão',
  //     local: 'Bom Repouso - MG',
  //     date: '88/07/8088',
  //     imgUrl:
  //       'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  //   },
  //   {
  //     id: 9,
  //     title: 'Bloco do Urso',
  //     local: 'Santa Rita - MG',
  //     date: '28/07/2022',
  //     imgUrl:
  //       'https://images.unsplash.com/photo-1588172561695-a9eed1db3441?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FybmF2YWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  //   },
  //   {
  //     id: 10,
  //     title: 'Palestra',
  //     local: 'Pouso Alegre - MG',
  //     date: '28/07/2022',
  //     imgUrl:
  //       'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZXZlbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  //   },
  //   {
  //     id: 11,
  //     title: 'Stand up',
  //     local: 'Pouso Alegre - MG',
  //     date: '28/07/2022',
  //     imgUrl:
  //       'https://images.unsplash.com/photo-1526398977052-654221a252b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3RhbmQlMjB1cHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  //   },
  //   {
  //     id: 12,
  //     title: 'Jantar de Formatura',
  //     local: 'Pouso Alegre - MG',
  //     date: '28/07/2022',
  //     imgUrl:
  //       'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZXZlbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  //   },
  // ];

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
  const totalPage = Math.round(
    data.length / itemPerPage / (widthPage > 600 ? 2 : 1),
  );

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
            <Card key={item.id} index={index + 1}>
              <Image
                src={item.image}
                placeholder="blur"
                blurDataURL={item.image}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />

              <div className="content-text-gallery">
                <span>{item.event.name}</span>
                <div className="local-date-gallery">
                  <p>{`${item.event.city}-${item.event.uf}`}</p>
                  <p>
                    {item.event.due_date &&
                      format(parseISO(item.event.due_date), 'yyyy-MM-dd', {
                        locale: ptBR,
                      })}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Content>

      <button
        type="button"
        className="button-right"
        onClick={() => handlePage('next')}
        disabled={totalPage === page}
      >
        <FaChevronRight />
      </button>
    </Container>
  );
};

export default Gallery;
