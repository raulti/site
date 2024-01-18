import React from 'react';

import Image from 'next/image';

import { IBannerPages } from '@/interfaces/components/BannerPages';

import { Container } from './styles';

const BannerPages: React.FC<IBannerPages> = ({ data, children }) => {
  return (
    <Container>
      <div className="banner-img">
        <Image
          src={data.img}
          width={730}
          height={411}
          placeholder="blur"
          blurDataURL={data.img}
          alt={`Imagem ${data.title}`}
          objectFit="cover"
        />
      </div>

      <div className="banner-text">
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        {children}
      </div>
    </Container>
  );
};

export default BannerPages;
