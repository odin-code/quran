import React from "react";
import App from "next/app";
import Head from "next/head";

import { wrapper } from '../store/store';
import { useStore } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import StyleReset from "../styles/reset";
import { GlobalStyle } from "../styles/global";
import 'tailwindcss/tailwind.css';
import '../styles/css/globals.css';
import 'antd/dist/antd.css';


function MuslimLife({ Component, pageProps }) {
  const store = useStore((state) => state);
  return process.browser ? (
    <>
      <Head>
        <title>Muslim Life Indonesia</title>
      </Head>
      <StyleReset />
      <GlobalStyle />
      <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
      <Component {...pageProps} />
      </PersistGate>
    </>
  ) : (
    <>
      <Head>
        <title>Muslim Life Indonesia</title>
      </Head>
      <StyleReset />
      <GlobalStyle />
      <PersistGate persistor={store}>
        <Component {...pageProps} />
      </PersistGate>      
    </>
  );
}

export default wrapper.withRedux(MuslimLife);
