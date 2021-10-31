import React, { useState } from "react";
import Head from "next/head";
import { BodyWrapper } from "./style";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        

        {/* Mobile Configurations */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0 user-scalable=no"
        />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="GOOGLEBOT" content="index follow" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="google-site-verification"
          content="jGgc8PucdJuqZ2rfOb35bKBqOjkhFIJTFDWSykydy_M"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>        
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <BodyWrapper>
        <Header />
          <main>
            {children}
          </main>
          <Footer />
      </BodyWrapper>
    </>
  );
};

export default Layout;
