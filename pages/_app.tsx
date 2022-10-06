import type { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import Modal from "../components/Modal";

import GlobalStyle from "../styles/GlobalStyle";
import lightTheme from "../styles/theme/lightTheme";

function _app({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>DataBoard</title>
      </Head>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <RecoilRoot>
          <Modal />
          <Component {...pageProps} />
        </RecoilRoot>
      </ThemeProvider>
    </>
  );
}

export default _app;
