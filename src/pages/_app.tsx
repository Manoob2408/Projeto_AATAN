import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "../styles/global";
import theme from "../styles/theme";
import Header from "../components/Header";
import { PageContent } from "../components/PageContent/styles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>AATAN | Abrigo de Animais Necessitados</title>
      </Head>
      <Header />
      <PageContent>
        <Component {...pageProps} />
      </PageContent>
      <GlobalStyle />
    </ThemeProvider>
  );
}
export default MyApp;
