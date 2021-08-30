import React from "react";
import App from "next/app";
import Head from "next/head";
import StyleReset from "../styles/reset";
import { GlobalStyle } from "../styles/global";

class MuslimLife extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Muslim Life Indonesia</title>
        </Head>
        <StyleReset />
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    );
    
  }
}

export default MuslimLife;
