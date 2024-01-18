import React from 'react';

import Head from 'next/head';

import IMetadataProps from '@/interfaces/components/Metadata';

const Metadata: React.FC<IMetadataProps> = ({ data }) => {
  const title = 'EASY Ingressos';
  const description = '';
  const url = '';
  const keywords = '';

  return (
    <Head>
      <title>{data?.title ? `EASY Ingressos | ${data?.title}` : title}</title>
      <meta name="author" content="RiseStudio" />
      <meta name="description" content={data?.description || description} />

      <link rel="canonical" href={data?.canonical_url || url} />

      <meta name="keywords" content={data?.keywords || keywords} />

      {/* facebook */}
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content={data?.title ? `EASY Ingressos | ${data?.title}` : title}
      />
      <meta
        property="og:description"
        content={data?.description || description}
      />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:url" content={data?.seo_url || url} />
      <meta property="og:site_name" content={title} />
      <meta property="og:image" content={data?.image || '/assets/logo.png'} />
      <meta
        property="og:image:secure_url"
        content={data?.image || '/assets/logo.png'}
      />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="fb:app_id" content="" />

      <meta
        property="article:publisher"
        content="https://www.facebook.com/profile.php?id=100045575567144"
      />
      <meta property="article:modified_time" content={data?.updated_at} />

      {/* twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content={data?.seo_url || url} />
      <meta
        name="twitter:title"
        content={data?.title ? `EASY Ingressos | ${data?.title}` : title}
      />
      <meta
        name="twitter:description"
        content={data?.description || description}
      />

      <meta
        name="robots"
        content={`${data?.index ? 'index' : 'noindex'}, follow`}
      />
      <meta
        name="googlebot"
        content={`${
          data?.index ? 'index' : 'noindex'
        }, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1`}
      />
      <meta
        name="bingbot"
        content={`${
          data?.index ? 'index' : 'noindex'
        }, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1`}
      />
    </Head>
  );
};

export default Metadata;
