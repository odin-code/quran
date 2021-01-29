// Vendors
import React, { useState } from "react";
import { Tabs } from "antd";

// Next
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import { Wrapper } from "../../styles/pages/works/style";

//style

const { TabPane } = Tabs;

const Works = () => {
  return (
    <Layout>
      <Wrapper>
        <div className="section-1">
          <div className="container">
            <div className="section-1_content">
              <div className="row">
                <div className="col-md-6">
                  <div className="desc">
                    <h1>You can show our great work everyday</h1>
                    <p>
                      We provide one stop IT Solution services from concepting
                      until production for Website & Mobile Development.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <img
                    src="/img/people.png"
                    className="img-fluid img-side"
                    alt="digital agency indonesia , software devlopment"
                    title="digital agency indonesia , software devlopment"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-2">
          <div className="container">
            <div className="section-2_content">
              <div className="tabs-works">
                <Tabs defaultActiveKey="1">
                  <TabPane tab="All" key="1">
                    <div className="tabs-item">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="side-left">
                            <div className="list-site">
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="list-site_item">
                                    <figure className="snip1300 mx-0">
                                      <img
                                        className="w-100 overblack"
                                        src="/img/client/thumb-turez.png"
                                        alt="Turez.id"
                                        title="Turez.id"
                                      />
                                      <div className="visit-icon">
                                        <img
                                          className="bright"
                                          src="https://www.vhiweb.com/themes/vhiweb/assets/images/icon/visit-icon.svg"
                                          alt="visit"
                                          title="visit"
                                        />
                                      </div>
                                      <div class="title-project">
                                        <p>TurEZ</p>
                                      </div>
                                      <a href="#"></a>
                                    </figure>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="list-site_item">
                                    <figure className="snip1300 mx-0">
                                      <img
                                        className="w-100 overblack"
                                        src="/img/client/thumb-stickearn.png"
                                        alt="stickearn"
                                        title="stickearn"
                                      />
                                      <div className="visit-icon">
                                        <img
                                          className="bright"
                                          src="https://www.vhiweb.com/themes/vhiweb/assets/images/icon/visit-icon.svg"
                                          alt="visit"
                                        />
                                      </div>
                                      <div class="title-project">
                                        <p>Stickearn</p>
                                      </div>
                                      <a href="https://stickearn.com/"></a>
                                    </figure>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="list-site_item">
                                    <figure className="snip1300 mx-0">
                                      <img
                                        className="w-100 overblack"
                                        src="/img/client/thumb-sariayu.png"
                                        alt="sariayu"
                                        title="sariayu"
                                      />
                                      <div className="visit-icon">
                                        <img
                                          className="bright"
                                          src="https://www.vhiweb.com/themes/vhiweb/assets/images/icon/visit-icon.svg"
                                          alt="visit"
                                        />
                                      </div>
                                      <div class="title-project">
                                        <p>Sariayu</p>
                                      </div>
                                      <a href="#"></a>
                                    </figure>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="side-right">
                            <div className="list-site">
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="list-site_item">
                                    <figure className="snip1300 mx-0">
                                      <img
                                        className="w-100 overblack"
                                        src="/img/client/thumb-bpk.png"
                                        alt="Bpk"
                                        title="Bpk"
                                      />
                                      <div className="visit-icon">
                                        <img
                                          className="bright"
                                          src="https://www.vhiweb.com/themes/vhiweb/assets/images/icon/visit-icon.svg"
                                          alt="visit"
                                        />
                                      </div>
                                      <div class="title-project">
                                        <p>Bpk</p>
                                      </div>
                                      <a href="#"></a>
                                    </figure>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="list-site_item">
                                    <figure className="snip1300 mx-0">
                                      <img
                                        className="w-100 overblack"
                                        src="/img/client/thumb-kotex.jpg"
                                        alt="kotex"
                                        title="kotex"
                                      />
                                      <div className="visit-icon">
                                        <img
                                          className="bright"
                                          src="https://www.vhiweb.com/themes/vhiweb/assets/images/icon/visit-icon.svg"
                                          alt="visit"
                                        />
                                      </div>
                                      <div class="title-project">
                                        <p>Kotex</p>
                                      </div>
                                      <a href="#"></a>
                                    </figure>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPane>
                  <TabPane tab="Company Profile" key="2">
                    <div className="tabs-item">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="side-left">
                            <div className="list-site">
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="list-site_item">
                                    <figure className="snip1300 mx-0">
                                      <img
                                        className="w-100 overblack"
                                        src="/img/client/thumb-stickearn.png"
                                        alt="stickearn"
                                        title="stickearn"
                                      />
                                      <div className="visit-icon">
                                        <img
                                          className="bright"
                                          src="https://www.vhiweb.com/themes/vhiweb/assets/images/icon/visit-icon.svg"
                                          alt="visit"
                                        />
                                      </div>
                                      <div class="title-project">
                                        <p>Stickearn</p>
                                      </div>
                                      <a href="https://stickearn.com/"></a>
                                    </figure>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="side-right">
                            <div className="list-site">
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="list-site_item">
                                    <figure className="snip1300 mx-0">
                                      <img
                                        className="w-100 overblack"
                                        src="/img/client/thumb-sariayu.png"
                                        alt="sariayu"
                                        title="sariayu"
                                      />
                                      <div className="visit-icon">
                                        <img
                                          className="bright"
                                          src="https://www.vhiweb.com/themes/vhiweb/assets/images/icon/visit-icon.svg"
                                          alt="visit"
                                        />
                                      </div>
                                      <div class="title-project">
                                        <p>Sariayu</p>
                                      </div>
                                      <a href="#"></a>
                                    </figure>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPane>
                  <TabPane tab="E-commerce" key="3">
                    <div className="tabs-item">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="side-left">
                            <div className="list-site">
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="list-site_item">
                                    <figure className="snip1300 mx-0">
                                      <img
                                        className="w-100 overblack"
                                        src="/img/client/thumb-turez.png"
                                        alt="Turez.id"
                                        title="Turez.id"
                                      />
                                      <div className="visit-icon">
                                        <img
                                          className="bright"
                                          src="https://www.vhiweb.com/themes/vhiweb/assets/images/icon/visit-icon.svg"
                                          alt="visit"
                                          title="visit"
                                        />
                                      </div>
                                      <div class="title-project">
                                        <p>TurEZ</p>
                                      </div>
                                      <a href="#"></a>
                                    </figure>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="list-site_item">
                                    <figure className="snip1300 mx-0">
                                      <img
                                        className="w-100 overblack"
                                        src="/img/client/thumb-sariayu.png"
                                        alt="sariayu"
                                        title="sariayu"
                                      />
                                      <div className="visit-icon">
                                        <img
                                          className="bright"
                                          src="https://www.vhiweb.com/themes/vhiweb/assets/images/icon/visit-icon.svg"
                                          alt="visit"
                                        />
                                      </div>
                                      <div class="title-project">
                                        <p>Sariayu</p>
                                      </div>
                                      <a href="#"></a>
                                    </figure>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="side-right">
                            <div className="list-site">
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="list-site_item">
                                    <figure className="snip1300 mx-0">
                                      <img
                                        className="w-100 overblack"
                                        src="/img/client/thumb-bpk.png"
                                        alt="Bpk"
                                        title="Bpk"
                                      />
                                      <div className="visit-icon">
                                        <img
                                          className="bright"
                                          src="https://www.vhiweb.com/themes/vhiweb/assets/images/icon/visit-icon.svg"
                                          alt="visit"
                                        />
                                      </div>
                                      <div class="title-project">
                                        <p>Bpk</p>
                                      </div>
                                      <a href="#"></a>
                                    </figure>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="list-site_item">
                                    <figure className="snip1300 mx-0">
                                      <img
                                        className="w-100 overblack"
                                        src="/img/client/thumb-kotex.jpg"
                                        alt="kotex"
                                        title="kotex"
                                      />
                                      <div className="visit-icon">
                                        <img
                                          className="bright"
                                          src="https://www.vhiweb.com/themes/vhiweb/assets/images/icon/visit-icon.svg"
                                          alt="visit"
                                        />
                                      </div>
                                      <div class="title-project">
                                        <p>Kotex</p>
                                      </div>
                                      <a href="#"></a>
                                    </figure>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPane>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </Layout>
  );
};

export default Works;
