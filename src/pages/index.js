// Vendors
import React, {
   useState,
   useEffect
} from "react";
import {
   Button,
   notification
} from "antd";

// Next
import Head from "next/head";
import Layout from "../components/layout";
import {
   Wrapper
} from "../styles/pages/home/style";

//style
import "../styles/css/globals.css";

export default function Home({
   appName
}) {

   return (
      <>
         <Head>
            <title>
               Muslim Life Indonesia
            </title>
            <meta
               name="title"
               content="Muslim Life"
            />
            <meta
               name="description"
               content="Muslim Life"
            />

            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://muslimlifeindonesia.com/" />
            <meta
               property="og:title"
               content="muslimlifeindonesia — Creative & Digital Agency Based in Jakarta, Indonesia "
            />
            <meta
               property="og:description"
               content="muslimlifeindonesia Is a Digital  Agency Based In Jakarta, Indonesia. We Provide Website development ,  Website Design and Brand , Mobile development"
            />
            <meta
               property="og:image"
               content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
            />
            <link rel="canonical" href="https://muslimlifeindonesia.com/" />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://muslimlifeindonesia.com/" />
            <meta
               property="twitter:title"
               content="muslimlifeindonesia — Creative & Digital Agency Based in Jakarta, Indonesia "
            />
            <meta
               property="twitter:description"
               content="muslimlifeindonesia Is a Digital  Agency Based In Jakarta, Indonesia. We Provide Website development ,  Website Design and Brand , Mobile development"
            />
            <meta
               property="twitter:image"
               content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
            />
         </Head>
         {/* <Layout> */}
         <Wrapper>
            
         </Wrapper>
         {/* </Layout> */}
      </>
   );
}