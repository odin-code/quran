import React from "react";
import App from "next/app";
import StyleReset from "../styles/reset";
import { GlobalStyle } from "../styles/global";

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
