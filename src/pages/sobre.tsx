import React from 'react';
import {
  FaCreditCard,
  FaLaptop,
  FaMobile,
  FaMousePointer,
  FaShieldAlt,
} from 'react-icons/fa';

import { GetStaticProps } from 'next';
import Image from 'next/image';

import api from '@/services/api';

import IPageProps from '@/interfaces/pages/PageProps';

import BannerPages from '@/components/BannerPages';
import CardEventOrganizers from '@/components/CardEventOrganizers';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Metadata from '@/components/Metadata';

import { Container } from '@/styles/pages/About';

const About: React.FC<IPageProps<null>> = ({ data }) => {
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
            img: '/assets/about/about.webp',
            title: 'Sobre nós',
            description:
              'A Easy Ingressos está no mercado de trabalho com sistema de vendas e controle de acesso desde 2011.',
          }}
        />

        <section className="icons-info-about">
          <div className="col">
            <FaShieldAlt size={64} />
            <p>TERMINAL POS</p>
          </div>
          <div className="col">
            <FaMobile size={64} />
            <p>APLICATIVO</p>
          </div>
          <div className="col">
            <FaLaptop size={64} />
            <p>SITE</p>
          </div>
        </section>

        <section className="infos-about">
          <div className="info">
            <div className="img-info">
              <Image
                src="/assets/about/img-3.webp"
                width={480}
                height={360}
                placeholder="blur"
                blurDataURL="/assets/about/img-3.webp"
              />
            </div>
            <div className="info-text">
              <h3>TERMINAL POS:</h3>
              <p>
                As vendas antecipadas são feitas através de terminais POS
                colocados em locais determinados por VOCÊ ORGANIZADOR DE FESTAS
                E EVENTOS; <br />
                Os Terminais POS vão conectar no Painel online a disponibilidade
                do ingresso, lote e a cada impressão é gerado um código de
                barras e um q-code com uma sequência lógica gerada
                aleatoriamente e exclusiva.
                <br />A impressão é feita em papel térmico e personalizado com
                itens de segurança, garantido assim a veracidade e
                IMPOSSIBILITANDO FALSIFICAÇÕES.
              </p>
            </div>
          </div>

          <div className="info">
            <div className="img-info">
              <Image
                // src="/assets/about/about-2.webp"
                src="/assets/about/img-1.webp"
                placeholder="blur"
                // blurDataURL="/assets/about/about-2.webp"
                blurDataURL="/assets/about/img-1.webp"
                width={480}
                height={360}
              />
            </div>
            <div className="info-text">
              <h3>APLICATIVO</h3>
              <p>
                O aplicavito Easy Ingressos foi desenvolvido para ser rápido e
                prático para o cliente que quer comprar seu ingresso sem sair de
                casa e também ter o ingresso em seu celular, sendo apresentado
                na entrado o evento, feito a leitura do q-code e sendo liberado
                a entrada em segundos.
                <br />
                Para os organizadores de eventos ter total controle das venda de
                todos os seus eventos.
              </p>
            </div>
          </div>

          <div className="info">
            <div className="img-info">
              <Image
                // src="/assets/about/about-1.webp"
                src="/assets/about/img-2.webp"
                width={480}
                height={360}
                placeholder="blur"
                // blurDataURL="/assets/about/about-1.webp"
                blurDataURL="/assets/about/img-2.webp"
              />
            </div>
            <div className="info-text">
              <h3>SITE:</h3>
              <p>
                Site completo com informações de todos os eventos que tenha
                parceria com a Easy Ingressos, também tudo sobre nossa empresa e
                com todas as fontes de contatos para tirar duvidas.
                <br />
                Todos os clientes terão acesso a todos os ingressos que for
                compro de todos eventos, tendo acesso sempre.
                <br />
                Os organizadores de eventos poderá acompanhar em nosso site
                através de GRÁFICOS E RELATÓRIO toda a venda que é registrada em
                tempo real
              </p>
            </div>
          </div>
        </section>

        <CardEventOrganizers />
      </Container>
      <Footer />
    </>
  );
};

export default About;

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get('/pages/sobre');

  return {
    props: {
      data: response.data,
    },
    revalidate: 86400, // 24h
  };
};
