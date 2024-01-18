import { ThemeProvider } from 'styled-components';

import { AppProps } from 'next/app';
import NextNprogress from 'nextjs-progressbar';

import AppProvider from '@/hooks';

import GlobalStyle from '@/styles/global';
import theme from '@/styles/theme';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <NextNprogress
        color={theme.colors.primary}
        startPosition={0.3}
        stopDelayMs={200}
        height={2}
      />

      <AppProvider>
        <GlobalStyle />

        <Component {...pageProps} />
      </AppProvider>
    </ThemeProvider>
  );
};

export default MyApp;

// MyApp.getInitialProps = async appContext => {
//   const appProps = await App.getInitialProps(appContext);

//   const user = getCookie('easy.user', appContext.ctx);
//   const token = getCookie('easy.token', appContext.ctx);

//   return {
//     ...appProps,
//     dataAuth: {
//       user,
//       token,
//     },
//   };
// };
