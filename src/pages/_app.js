import React from "react";
import App from "next/app";
import StyleReset from "../styles/reset";
import { GlobalStyle } from "../styles/global";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

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
