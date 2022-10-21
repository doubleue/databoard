import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";
import { CookiesProvider } from "react-cookie";
import { useMediaQuery } from "react-responsive";
import { RecoilRoot } from "recoil";
import { DefaultTheme, ThemeProvider } from "styled-components";
import Modal from "../components/Modal";

import GlobalStyle from "../styles/GlobalStyle";
import darkTheme from "../styles/theme/darkTheme";
import lightTheme from "../styles/theme/lightTheme";

function _app({ Component, pageProps }: AppProps) {
  const systemPrefers = useMediaQuery({
    query: "(prefers-color-scheme: dark)",
  });
  const [theme, setTheme] = useState<DefaultTheme>(lightTheme);
  useEffect(() => {
    setTheme(systemPrefers ? darkTheme : lightTheme);
  }, [systemPrefers]);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>DataBoard</title>
      </Head>
      <CookiesProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <RecoilRoot>
            <Modal />
            <Component {...pageProps} />
          </RecoilRoot>
        </ThemeProvider>
      </CookiesProvider>
    </>
  );
}

export default _app;
