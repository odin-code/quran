// Vendors
import React from "react";

// Next
import Head from "next/head";
import Link from "next/link";
;

//style

export default function Home({ appName }) {
  return (
    <>
      <Head>
        <title>Home {appName}</title>
      </Head>
    </>
  );
}
