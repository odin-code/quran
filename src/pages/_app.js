import React from "react";
import App from "next/app";
import StyleReset from "../styles/reset";
import { GlobalStyle } from "../styles/global";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'tailwindcss/tailwind.css';
import '../styles/css/globals.css';

class MuslimLife extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <StyleReset />
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    );
    
  }
}

export default MuslimLife;
