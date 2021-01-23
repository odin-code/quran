// Vendors
import React from "react";

// Next
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import { Wrapper } from "./style";

//style

export default function Home({ appName }) {
  return (
    <>
      <Head>
        <title>Home {appName}</title>
      </Head>
      <Layout>
        <Wrapper>
          <div className="section-1">
            <div className="container">
              <div className="section-1_content">
                <h1>
                  Innovative and intelligent technology solutions and services
                </h1>
                <p>
                  We provide one stop IT Solution services from concepting until
                  production for Website & Mobile Development.
                </p>
              </div>
            </div>
          </div>
        </Wrapper>
      </Layout>
    </>
  );
}
