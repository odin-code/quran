// Vendors
import React, { Component } from "react";
import { connect } from "react-redux";
import { Skeleton } from "antd";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
// Next
import Link from "next/link";
import Heads from "../components/head";
//config
import { baseUrlAPI } from "../config/constants";
//Reducer
import { FEED_PAYLOAD } from "../store/home/reducer";
//helper
import { replaceLineBreak, stringToHtml } from "../lib/helper";
//style
import { Wrapper } from "../styles/pages/home/style.js";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: false,
      loading: false,
      loadingMenu: false,
      menu: false,
      pageNum: 0,
    };
  }

  componentDidMount = () => {
    this._getFeedData();
    this._getMenu();
  };

  _getMenu = () => {
    axios
      .get(`${baseUrlAPI}/menus?_limit=10`)
      .then((response) =>
        this.setState({ menu: response.data, loadingMenu: true })
      );
  };

  _getMoreItemFeed = () => {
    const { feed } = this.state;
    axios
      .get(`${baseUrlAPI}/feeds?_start=${feed.length}&_limit=10`)
      .then((response) => this.setState({ feed: [...feed, ...response.data] }));
  };

  _getFeedData = () => {
    axios
      .get(`${baseUrlAPI}/feeds?_limit=5`)
      .then((response) =>
        this.setState({ feed: response.data, loading: true })
      );
  };

  render() {
    const { feed, loading, loadingMenu, menu } = this.state;
    return (
      <>
        <Heads />
        <Wrapper>
          <div className="mx-auto bg-gray-50 fit-screen">
            <div className="w-full bg-green-500 h-40 relative block p-4 rounded-b-2xl bg-custom">
              <div className="flex flex-col mb-6 relative">
                <span className="text-white text-sm font-normal sp-1">
                  Assalamu'alaikum
                </span>
                <span className="text-white text-base font-semibold sp-2">
                  Akhi / Ukhti
                </span>
                <Link href="#">
                  <a className="profile-icon">
                    <span>DI</span>
                  </a>
                </Link>
              </div>

              <div className="shadow absolute bg-white rounded-lg block md:h-36 card-floating top-24 p-4">
                <ul
                  className={`flex items-center justify-center ${
                    this.state.loadingMenu ? " " : " placeholder-menu"
                  }`}
                >
                  {loadingMenu ? (
                    <>
                      {menu &&
                        menu.map((item, index) => {
                          return (
                            <>
                              <li className="mx-8 text-center">
                                <Link href={item.path}>
                                  <a>
                                    <img
                                      className="m-auto"
                                      src={baseUrlAPI + item.icon.url}
                                      height={24}
                                      width={24}
                                    />
                                    <span className="text-center text-gray-600 text-xs md:text-sm pt-2 block">
                                      {item.name}
                                    </span>
                                  </a>
                                </Link>
                              </li>
                            </>
                          );
                        })}
                    </>
                  ) : (
                    <>
                      <li>
                        <Skeleton
                          loading={true}
                          avatar
                          paragraph={{ rows: 0 }}
                          active
                        />
                      </li>
                      <li>
                        <Skeleton
                          loading={true}
                          avatar
                          paragraph={{ rows: 0 }}
                          active
                        />
                      </li>
                      <li>
                        <Skeleton
                          loading={true}
                          avatar
                          paragraph={{ rows: 0 }}
                          active
                        />
                      </li>
                      <li>
                        <Skeleton
                          loading={true}
                          avatar
                          paragraph={{ rows: 0 }}
                          active
                        />
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>

            <div className="w-full h-full relative block mt-10 md:mt-20 p-4">
              <span className="block w-full md:text-xl font-semibold">
                Feed
              </span>
              {loading ? (
                <>
                  {feed && (
                    <InfiniteScroll
                      dataLength={feed.length} //This is important field to render the next data
                      next={this._getMoreItemFeed}
                      hasMore={true}
                    >
                      {feed.map((item) => {
                        return (
                          <div className="pt-4">
                            <div className="shadow w-full md:h-full bg-white rounded-lg p-3 card-custom">
                              <img
                                className="w-full rounded-lg"
                                src={ baseUrlAPI + item.image.formats.medium.url }
                              />
                              <div className="pt-5">
                                <p className="md:text-base text-gray-500">
                                  { item.title }
                                  <br />
                                  <div
                                    dangerouslySetInnerHTML={{
                                      __html: replaceLineBreak(
                                        item.description
                                      ),
                                    }}
                                  />
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </InfiniteScroll>
                  )}
                </>
              ) : (
                <>
                  <div className="pt-4 custom-feed">
                    <div className="shadow w-full md:h-full bg-white rounded-lg p-3">
                      <Skeleton loading={true} avatar active paragraph={{ rows: 4 }} />
                    </div>
                  </div>
                  <div className="pt-4">
                    <div className="shadow w-full md:h-full bg-white rounded-lg p-3">
                      <Skeleton loading={true} avatar active paragraph={{ rows: 4 }} />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="navbar_menu">
              <ul>
                <li>
                  <Link href="#">
                    <a>
                      
                    </a>
                  </Link>
                </li>
              </ul>
          </div>
        </Wrapper>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { feed } = state;
  return {
    feed,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setFeedData: (data) =>
    dispatch({
      type: FEED_PAYLOAD,
      data: data,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
