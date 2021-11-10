import React, { Component } from "react";

import { Skeleton, Input } from "antd";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

// Next
import Head from "next/head";
import Link from "next/link";
//config
import { baseUrlAPI } from "../../../../config/constants";

import HeaderBack from "../../../../components/headerback";

import { replaceLineBreak } from "../../../../lib/helper";

import { Wrapper } from "../../../../styles/pages/doa/style";

class detaiDoa extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadingPrayerItem: false,
            dataPrayerItem: false,
            backSlug: false,
        };
    }

    componentDidMount = () => {
        this._handleCheckFromServer();
    };

    _handleCheckFromServer = () => {
        const { prayerItem } = this.props;
        if (prayerItem) {
            this.setState({
                loadingPrayerItem: true,
                dataPrayerItem: prayerItem,
                backSlug: prayerItem.prayer_category.slug,
            });
        }
    };

    _handleSearchCategoryPray = (q) => {
        const { slugID } = this.props;
        axios
            .get(`${baseUrlAPI}/prayers/subcategories/${slugID}?_q=${q}&_limit=5`)
            .then((response) =>
                this.setState({
                    dataPrayerItem: response.data,
                    loadingPrayerItem: true,
                })
            );
    };

    _handleGetNextCategoryPray = () => {
        const { dataPrayerItem } = this.state;
        axios
            .get(
                `${baseUrlAPI}/prayers/subcategories/${slugID}?_start=${feed.length}&_limit=5`
            )
            .then((response) =>
                this.setState({ dataPrayerItem: [...dataPrayerItem, ...response.data] })
            );
    };
    render() {
        const { dataPrayerItem, backSlug, loadingPrayerItem } = this.state;
        return (
            <>
                <Head>
                    <title>Muslim Life Indonesia - {dataPrayerItem.name}</title>
                    <meta
                        name="title"
                        content={`Muslim Life Indonesia - ${dataPrayerItem.name}`}
                    />
                    <meta
                        name="description"
                        content={`Muslim Life Indonesia - ${dataPrayerItem.name}`}
                    />

                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://muslimlifeindonesia.com/" />
                    <meta
                        property="og:title"
                        content={`Muslim Life Indonesia - ${dataPrayerItem.name}`}
                    />
                    <meta
                        property="og:description"
                        content={`Muslim Life Indonesia - ${dataPrayerItem.name}`}
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
                        content={`Muslim Life Indonesia - ${dataPrayerItem.name}`}
                    />
                    <meta
                        property="twitter:image"
                        content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
                    />
                </Head>
                <Wrapper>
                    <div className="body">
                        <HeaderBack
                            actionBackLink={`/doa/${backSlug}`}
                            titlePage={dataPrayerItem.name}
                            isArabic={false}
                        />
                        <div className="pt-20 pl-4 pr-4 mb-4">
                            {loadingPrayerItem ? (
                                <>
                                    {dataPrayerItem && (
                                        <InfiniteScroll
                                            dataLength={dataPrayerItem.prayer_verses.length} //This is important field to render the next data
                                            next={this._getMoreItemFeed}
                                            hasMore={true}
                                        >
                                            {dataPrayerItem.prayer_verses.map((item) => {
                                                return (
                                                    <div
                                                        className={`w-full item_doa bg-white block h-full shadow text-lg p-3 flex mt-4 content-custom`}
                                                    >
                                                        <div className="flex flex-col item_doa__content">
                                                            <div className="item_doa__content-head pb-4 w-full">
                                                                <span className="block text-sm font-semibold">
                                                                    {item.title}
                                                                </span>
                                                            </div>
                                                            <div className="item_doa__content-body">
                                                                <span
                                                                    className="procedure_title"
                                                                    dangerouslySetInnerHTML={{
                                                                        __html: replaceLineBreak(
                                                                            item.procedure ? item.procedure : ""
                                                                        ),
                                                                    }}
                                                                />
                                                                {item.arabic_title && (
                                                                    <span className="arabic_title">
                                                                        {item.arabic_title}
                                                                    </span>
                                                                )}
                                                                {
                                                                    item.meaning&&
                                                                    <span className="meaning_title">
                                                                        {item.meaning}
                                                                    </span>
                                                                }

                                                                <p>
                                                                    <div
                                                                        dangerouslySetInnerHTML={{
                                                                            __html: replaceLineBreak(
                                                                                item.description ? item.description : ""
                                                                            ),
                                                                        }}
                                                                    />
                                                                </p>
                                                            </div>
                                                            <div className="item_doa__content-footer"></div>
                                                        </div>
                                                    </div>
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

export async function getServerSideProps(context) {
    const res = await fetch(
        `${baseUrlAPI}/prayers/subcategories/${context.query.slug_detail}?&_limit=5`
    );
    const prayerItem = await res.json();
    const slugID = context.query.slug;
    return {
        props: {
            prayerItem,
            slugID,
        },
    };
}

export default detaiDoa;
