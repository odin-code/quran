// Vendors
import React, { useState } from "react";
import { Button } from "antd";
// Next
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import { Wrapper } from "./style";

//style

export default function Home({ appName }) {
  const [whatsap, setwhatsap] = useState("https://api.whatsapp.com/send?phone=81932622629&text=Assalamu'alaikum%20,%20Saya%20mendapatkan%20info%20dari%20website%20claudmedia");

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
                <div className="btn-content">
                  <Link href={whatsap}>
                    <a target="_blank">Let's Talk</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="section-2">
            <div className="container">
              <div className="section-2_content">
                <div className="row">
                  <div className="col-md-6">
                    <div className="content-1">
                      <h4>Our Service</h4>
                      <h3>Create your awesome digital product with us.</h3>
                      <p>
                        Si sine causa, mox videro; interea hoc epicurus in bonis
                        sit numeranda nec me tamen laudandis maioribus meis
                        corrupisti nec me ab illo inventore veritatis et
                        voluptatem accusantium doloremque laudantium.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="content-2">
                      <div className="content-2_list">
                        <div className="content-2_list-item">
                          <img src="/img/web-dev.png" />
                          <div className="desc">
                            <h5>Web Development</h5>
                            <span>lorem lorem ipusma</span>
                          </div>
                        </div>
                        <div className="content-2_list-item">
                          <img src="/img/mobile-dev.png" />
                          <div className="desc">
                            <h5>Mobile Development</h5>
                            <span>lorem lorem ipusma</span>
                          </div>
                        </div>
                        <div className="content-2_list-item">
                          <img src="/img/brand-dev.png" />
                          <div className="desc">
                            <h5>Branding Identity</h5>
                            <span>lorem lorem ipusma</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-3">
            <div className="container">
              <div className="section-3_content">
                <h3>Transform your business with us right now</h3>
                <p>
                  Si sine causa, mox videro; interea hoc epicurus in bonis sit
                  numeranda nec me tamen laudandis maioribus meis corrupisti nec
                  me ab illo inventore veritatis et voluptatem accusantium
                  doloremque laudantium.
                </p>
                <div className="btn-content">
                  <Link href={whatsap}>
                    <a target="_blank" >Let's Talk</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="section-4">
            <div className="container">
              <div className="section-4_content">
                <div className="row">
                  <div className="col-md-6">
                    <div className="desc">
                      <h4>Top four the reason why you should choosing us.</h4>
                      <span>
                        In quo quaerimus, non numquam eius modi tempora
                        incidunt,
                      </span>
                      <div className="desc-list">
                        <div className="desc-list_item">
                          <img src="/img/experience.png" />
                          <div className="content">
                            <h5>Experience</h5>
                            <p>
                              Probabo, inquit, modo ista sis aequitate, quam
                              interrogare aut in voluptate ponit.
                            </p>
                          </div>
                        </div>
                        <div className="desc-list_item">
                          <img src="/img/comfortable.png" />
                          <div className="content">
                            <h5>Comfortable</h5>
                            <p>
                              Probabo, inquit, modo ista sis aequitate, quam
                              interrogare aut in voluptate ponit.
                            </p>
                          </div>
                        </div>
                        <div className="desc-list_item">
                          <img src="/img/easy.png" />
                          <div className="content">
                            <h5>Easy Communication</h5>
                            <p>
                              Probabo, inquit, modo ista sis aequitate, quam
                              interrogare aut in voluptate ponit.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <img
                      src="/img/bitmap.png"
                      className="img-fluid img-sction-4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-5">
            <div className="container">
              <div className="section-5_content">
                <div className="desc">
                  <h4>Some of our clients who have collaborated with us</h4>
                  <p>
                    In oculis quidem exercitus quid ex ea voluptate et impetus
                    quo pertineant non numquam
                  </p>
                </div>
                <div className="slider-5">
                  <div className="slide-list">
                    <div className="slide-list_item">
                      <img src="/img/client/sariayu-logo.png" />
                    </div>
                    <div className="slide-list_item">
                      <img src="/img/client/stickearn.png" />
                    </div>
                  </div>
                </div>
                <div className="drop-email">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="decs">
                        <span>Are you interested for using our services?</span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-email">
                        <div className="select-input">
                          <input placeholder="Drop your email here..." /> 
                          <Button type="primary">
                            <img src="/img/ic-send.png"/>
                            Send</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </Layout>
    </>
  );
}
