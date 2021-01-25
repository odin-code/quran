import React from "react";
import App from "next/app";
import StyleReset from "../styles/reset";
import { GlobalStyle } from "../styles/global";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
class ClaudMedia extends App {
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

export default ClaudMedia;
