import React, { Component } from "react";
import { Skeleton, Input } from "antd";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

// Next
import Head from "next/head";
import Link from "next/link";
//config
import { baseUrlAPI } from "../../config/constants";

import HeaderBack from "../../components/headerback";

import { Wrapper } from "../../styles/pages/doa/style";

const { Search } = Input;

class doa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingCategoryDoa: false,
      dataCategory: false,
    };
  }

  componentDidMount = () => {
    this._handleGetCategoryPray();
  };

  _handleGetCategoryPray = () => {
    axios
      .get(`${baseUrlAPI}/prayers/categories?_limit=10`)
      .then((response) =>
        this.setState({ dataCategory: response.data, loadingCategoryDoa: true })
      );
  };

  _handleSearchCategoryPray = (q) => {
    axios
      .get(`${baseUrlAPI}/prayers/categories?_q=${q}&_limit=10`)
      .then((response) =>
        this.setState({ dataCategory: response.data, loadingCategoryDoa: true })
      );
  };

  _handleGetNextCategoryPray = () => {
    const { dataCategory } = this.state;
    axios
      .get(`${baseUrlAPI}/prayers/categories?_start=${feed.length}&_limit=10`)
      .then((response) =>
        this.setState({ dataCategory: [...dataCategory, ...response.data] })
      );
  };

  render() {
    const { loadingCategoryDoa, dataCategory } = this.state;
    return (
      <>
        <Head>
          <title>Muslim Life Indonesia - Quran</title>
          <meta name="title" content="Muslim Life" />
          <meta name="description" content="Muslim Life" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://muslimlifeindonesia.com/" />
          <meta property="og:title" content="Muslim Life Indonesia - Quran " />
          <meta
            property="og:description"
            content="Muslim Life Indonesia - Quran"
          />
          <meta
            property="og:image"
            content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
          />
          <link rel="canonical" href="https://muslimlifeindonesia.com/" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://muslimlifeindonesia.com/"
          />
          <meta
            property="twitter:title"
            content="Muslim Life Indonesia - Quran "
          />
          <meta
            property="twitter:description"
            content="Muslim Life Indonesia - Quran"
          />
          <meta
            property="twitter:image"
            content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
          />
        </Head>
        <Wrapper>
          <div className="body">
            <HeaderBack
              actionBackLink="/"
              titlePage="Kumpulan Doa Sahih"
              isArabic={false}
            />
            <div className="pt-20 pl-4 pr-4 mb-4">
              <div className="w-full list_item_doa block h-full shadow text-lg flex mt-2 search-custom">
                <Search
                  placeholder="Search"
                  onSearch={(val) => this._handleSearchCategoryPray(val)}
                  allowClear
                  enterButton
                />
              </div>
              {loadingCategoryDoa ? (
                <>
                  {dataCategory && (
                    <InfiniteScroll
                      dataLength={dataCategory.length} //This is important field to render the next data
                      next={this._getMoreItemFeed}
                      hasMore={true}
                    >
                      {dataCategory.map((item) => {
                        return (
                          <Link href={item.slug}>
                            <a
                              className={`w-full list_item_doa bg-white block h-full shadow text-lg p-3 flex mt-4 content-custom`}
                            >
                              <div className="flex">
                                <div className="bg-green-500 number-custom mr-6">
                                  <span className="block text-sm font-medium">
                                    {item.id}
                                  </span>
                                </div>
                                <span className="block text-sm font-medium">
                                  {item.name}
                                </span>
                              </div>
                            </a>
                          </Link>
                        );
                      })}
                    </InfiniteScroll>
                  )}
                </>
              ) : (
                <>
                  <div className="w-full list_item_doa bg-white block h-full shadow text-lg p-3 flex mt-4 loading-custom">
                    <Skeleton active paragraph={{ rows: 1 }} />
                  </div>
                  <div className="w-full list_item_doa bg-white block h-full shadow text-lg p-3 flex mt-4 loading-custom">
                    <Skeleton active paragraph={{ rows: 1 }} />
                  </div>
                  <div className="w-full list_item_doa bg-white block h-full shadow text-lg p-3 flex mt-4 loading-custom">
                    <Skeleton active paragraph={{ rows: 1 }} />
                  </div>
                </>
              )}
            </div>
          </div>
        </Wrapper>
      </>
    );
  }
}

export default doa;
