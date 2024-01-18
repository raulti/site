import React from 'react';
import { FaCreditCard, FaMobile, FaShieldAlt } from 'react-icons/fa';

import { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import api from '@/services/api';

import IPageProps from '@/interfaces/pages/PageProps';

import BannerPages from '@/components/BannerPages';
import Footer from '@/components/Footer';
import Button from '@/components/Form/Button';
import Header from '@/components/Header';
import Metadata from '@/components/Metadata';

import { Container } from '@/styles/pages/AreaOrganizer';

const AreaOrganizer: React.FC<IPageProps<null>> = ({ data }) => {
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
        <BannerPages
          data={{
            img: '/assets/organizer/area-organizer.webp',
            title: 'Área do Organizador',
            description:
              'Acesse com seu usuário e senha para acompanhar todos os eventos do seu cadastro, com um completo e detalhado relatório.',
          }}
        >
          <div className="link">
            <Link href="https://easy-risestudio.netlify.app/">
              <a target="blank">
                <Button>Acessar</Button>
              </a>
            </Link>
          </div>
        </BannerPages>

        {/* <section className="icons-info-about">
          <div className="col">
            <FaShieldAlt size={64} />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="col">
            <FaCreditCard size={64} />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="col">
            <FaMobile size={64} />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </section>

        <section className="infos">
          <div className="info">
            <div className="img-info">
              <Image
                src="/assets/organizer/img-1.webp"
                width={480}
                height={360}
                placeholder="blur"
                blurDataURL="/assets/area-organizer/img-1.webp"
              />
            </div>

            <div className="info-text">
              <h3>Informações</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                blandit volutpat justo, felis nulla ut sed mattis feugiat.
                Pulvinar vel vel nam id suspendisse mauris enim dictumst neque.
                Proin leo ultrices varius id. In senectus habitant tincidunt
                commodo eget malesuada leo integer. Sed suscipit aliquet nibh
                nam sit hendrerit. Metus enim mattis sagittis viverra laoreet
                odio. Id odio nec odio ipsum faucibus lacinia. Id egestas est
                tristique imperdiet est. Volutpat, nunc vulputate amet lacinia
                pharetra, ut viverra quam. Urna dictum ac viverra aenean.
              </p>
            </div>
          </div>

          <div className="info">
            <div className="img-info">
              <Image
                src="/assets/organizer/img-2.webp"
                placeholder="blur"
                blurDataURL="/assets/area-organizer/img-2.webp"
                width={480}
                height={360}
              />
            </div>

            <div className="info-text">
              <h3>Informações</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                blandit volutpat justo, felis nulla ut sed mattis feugiat.
                Pulvinar vel vel nam id suspendisse mauris enim dictumst neque.
                Proin leo ultrices varius id. In senectus habitant tincidunt
                commodo eget malesuada leo integer. Sed suscipit aliquet nibh
                nam sit hendrerit. Metus enim mattis sagittis viverra laoreet
                odio. Id odio nec odio ipsum faucibus lacinia. Id egestas est
                tristique imperdiet est. Volutpat, nunc vulputate amet lacinia
                pharetra, ut viverra quam. Urna dictum ac viverra aenean.
              </p>
            </div>
          </div>
        </section> */}

        {/* <CardEventOrganizers /> */}
      </Container>

      <Footer />
    </>
  );
};

export default AreaOrganizer;

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get('/pages/area-do-organizador');

  return {
    props: {
      data: response.data,
    },
    revalidate: 86400, // 24h
  };
};
