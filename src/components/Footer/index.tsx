import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

import Image from 'next/image';
import Link from 'next/link';

import Dropdown from '../Dropdown';
import Copyright from './Copyright';
import { Container } from './styles';

const CustomComponent = React.forwardRef((props, ref: any) => (
  <a ref={ref} {...props}>
    <Image
      src="/assets/footer/logo.png"
      blurDataURL="/assets/footer/logo.png"
      placeholder="blur"
      alt="EASY Ingressos"
      // width={155}
      // height={114}
      width={217}
      height={60}
    />
  </a>
));

const Footer: React.FC = () => {
  const organizerDropdownItens = [
    {
      id: 1,
      element: (
        <Link href="/">
          <a target="blank">
            <button type="button">Acessar painel</button>
          </a>
        </Link>
      ),
    },
    {
      id: 2,
      element: (
        <Link href="/">
          <button type="button">Renovar plano</button>
        </Link>
      ),
    },
  ];

  const helpDropdownItens = [
    {
      id: 1,
      element: (
        <Link href="/files/Termos-e-Politicas-Easy.pdf">
          <button type="button">Termos e políticas</button>
        </Link>
      ),
    },
    {
      id: 2,
      element: (
        <Link href="/faq">
          <button type="button">Perguntas frequêntes</button>
        </Link>
      ),
    },
  ];

  return (
    <Container>
      <hr />

      <section>
        <div className="col-1">
          <div className="logo">
            <Link href="/" passHref>
              <CustomComponent />
            </Link>
          </div>
          <p>
            CNPJ 28.318.270/0001-64
            <br />
            Rua Professor Olimpio Gonzaga, 240, <br /> Centro, Unaí-MG
          </p>

          <div className="social-networks">
            <Link href="https://www.facebook.com/profile.php?id=100045575567144">
              <a target="blank">
                <FaFacebook size={24} />
              </a>
            </Link>

            <Link href="https://www.instagram.com/easyingressos/">
              <a target="blank">
                <FaInstagram size={24} />
              </a>
            </Link>
          </div>
        </div>

        <div className="col-2">
          <Link href="/busca">
            <a className="title-link">
              <h5>ENCONTRE EVENTOS </h5>
            </a>
          </Link>

          <Link href="/area-do-organizador">
            <a className="title-link">
              <h5>Área do Organizador</h5>
            </a>
          </Link>

          <Dropdown items={helpDropdownItens} menuName="AJUDA" />
        </div>

        <div className="col-3">
          <h5>MAPA DO SITE</h5>
          <div>
            <Link href="/">Home</Link>
          </div>
          <div>
            <Link href="/sobre">Quem somos</Link>
          </div>

          <div>
            <Link href="/login">Minha conta</Link>
          </div>
        </div>

        <div className="col-4">
          <div className="card-app">
            <Image
              src="/assets/footer/bg-card-app.webp"
              blurDataURL="/assets/footer/bg-card-app.webp"
              placeholder="blur"
              alt="EASY Ingressos"
              layout="fill"
            />
            <div className="burn-bg" />
            <div className="content-card-app">
              <span>Rápido e prático!</span>
              <p>
                Faça o download de nosso app, compre pelo celular e entre nos
                eventos com facilidade.
              </p>

              <div className="buttons">
                <div className="button-link-app">
                  <Image
                    src="/assets/footer/bg-button-app.webp"
                    blurDataURL="/assets/footer/bg-button-app.webp"
                    placeholder="blur"
                    alt="GooglePlay"
                    layout="fill"
                  />
                </div>

                <div className="button-link-app">
                  <Image
                    src="/assets/footer/appstore-button-app.png"
                    blurDataURL="/assets/footer/appstore-button-app.png"
                    placeholder="blur"
                    alt="APPStore"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Copyright />
    </Container>
  );
};

export default Footer;
