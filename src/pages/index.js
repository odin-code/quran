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
import Link from 'next/link'

import {
   Wrapper
} from "../styles/pages/home/style.js";

//style

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
            <div className="container mx-auto bg-gray-50">
               <div className="w-full bg-green-500 h-40 relative block p-7 rounded-b-2xl">
                  <span className="text-white text-base font-semibold">Assalamu'alaikum Akhi / Ukhti</span>
                  <div className="shadow absolute bg-white rounded-lg block md:h-36 card-floating top-20 p-7">
                     <ul className="flex items-center justify-center">
                        <li className="mx-8">
                           <Link href="/quran">
                              <a>
                                 <img className='m-auto' src="img/quran.svg" height={32} width={32}/>
                                 <span className="text-center text-gray-600 text-sm md:text-base pt-2 block">Quran</span>
                              </a>
                           </Link>
                        </li>
                        <li className="mx-8 text-center">
                           <Link href="/">
                              <a>
                                 <img className='m-auto' src="img/praying-hand.svg" height={32} width={32}/>
                                 <span className="text-center text-gray-600 text-sm md:text-base pt-2 block">Doa</span>
                              </a>
                           </Link>
                        </li>
                     </ul>
                  </div>
               </div>

               <div className="w-full h-full relative block mt-10 md:mt-20 p-7">
                  <span className="block w-full md:text-xl font-semibold">Feed</span>
                  <div className="pt-4">
                     <div className="shadow w-full md:h-full bg-white rounded-lg p-5">
                        <img className="w-full rounded-lg" src="https://via.placeholder.com/335x155" />
                        <div className="pt-5">
                           <p className="md:text-base text-gray-500 font-normal">
                           *Free! 💵*⁣<br/>
                           *Terbuka untuk Siswa-Siswi SMP/SMA/Sederajat*⁣<br/>
                           <br/>⁣
                           Ayo tunggu apalagi bagi kamu yang berstatus pelajar ayo segera daftar disini👇👇<br/>
                           </p>
                        </div>
                     </div>
                     <div className="shadow w-full md:h-full bg-white rounded-lg p-5 mt-5">
                        <img className="w-full rounded-lg" src="https://via.placeholder.com/335x155" />
                        <div className="pt-5">
                           <p className="md:text-base text-gray-500 font-normal">
                              *Free! 💵*⁣<br/>
                              *Terbuka untuk Siswa-Siswi SMP/SMA/Sederajat*⁣<br/>
                              <br/>⁣
                              Ayo tunggu apalagi bagi kamu yang berstatus pelajar ayo segera daftar disini👇👇<br/>
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </Wrapper>
         {/* </Layout> */}
      </>
   );
}