import styled from "styled-components";

export const Wrapper = styled.div`
  .section-1 {
    background: url(/img/bg-work.png);
    display: block;
    height: 700px;
    background-size: 100%;
    background-repeat: no-repeat;

    &_content {
      padding-top: 275px;
      .desc {
        h1 {
          font-family: Roboto;
          font-style: normal;
          font-weight: bold;
          font-size: 48px;
          line-height: 73px;
          color: #ffffff;
          margin-bottom: 30px;
        }
        p {
          font-family: Roboto;
          font-style: normal;
          font-weight: normal;
          font-size: 20px;
          line-height: 32px;
          color: #eeeeee;
        }
      }
      .img-side {
        position: relative;
        top: -75px;
      }
    }
  }
  .section-2 {
    margin-top: 80px;
    margin-bottom: 80px;
    &_content {
      .tabs-works {
        .tabs-item {
          .side-left {
          }
          .side-right {
            margin-top: 80px;
          }
          .list-site {
            &_item {
              .snip1300 {
                position: relative;
                overflow: hidden;
                margin: 10px;
                width: 100%;
                text-align: center;
                border-radius: 10px;
                margin-bottom: 30px;
                box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.1);
                img {
                  max-width: 100%;
                  vertical-align: top;
                }
                .visit-icon {
                  position: absolute;
                  top: 92%;
                  left: 92%;
                  border-radius: 50%;
                  font-size: 34px;
                  color: #000;
                  width: 60px;
                  height: 60px;
                  line-height: 60px;
                  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
                  opacity: 0;
                  -webkit-transform: translate(-50%, -50%);
                  transform: translate(-50%, -50%);
                  transition: all 300ms 0ms
                    cubic-bezier(0.6, -0.28, 0.735, 0.045);
                }
                .title-project {
                  position: absolute;
                  bottom: 1%;
                  left: 4%;
                  color: #fff;
                  opacity: 0;
                  p {
                    font-weight: 900;
                    letter-spacing: 0.2px;
                    font-size: 32px;
                  }
                }
                a {
                  left: 0;
                  right: 0;
                  top: 0;
                  bottom: 0;
                  position: absolute;
                }
                &:hover {
                  backface-visibility: hidden;
                  .overblack {
                    -webkit-filter: brightness(70%);
                    -webkit-transition: all 0.35s ease;
                    -moz-transition: all 0.35s ease;
                    -o-transition: all 0.35s ease;
                    -ms-transition: all 0.35s ease;
                    transition: all 0.35s ease;
                  }
                  .visit-icon {
                    transition: all 500ms 100ms
                      cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    opacity: 1;
                    .bright {
                      -webkit-filter: brightness(100%) !important;
                      -webkit-transition: all 0.35s ease !important;
                    }
                  }
                  .title-project {
                    opacity: 1;
                  }
                }
              }
            }
          }
        }
        .ant-tabs-ink-bar {
          background: transparent;
        }
        .ant-tabs {
          .ant-tabs-nav {
            &:before {
              border: 0px;
            }
            .ant-tabs-nav-wrap {
              justify-content: center;
              .ant-tabs-nav-list {
                .ant-tabs-tab {
                  margin: 0 20px 0 0;
                  .ant-tabs-tab-btn {
                    background: tranparant;
                    font-weight: 500;
                    padding: 8px;
                    border-radius: 4px;
                    width: 100%;
                    text-align: center;
                    font-family: "Roboto";
                    font-style: normal;
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 19px;
                    text-align: center;
                    color: #333333;
                    border: 1px solid #dedede;
                    box-sizing: border-box;
                  }
                }
                .ant-tabs-tab-active {
                  .ant-tabs-tab-btn {
                    background: #5b7cfd;
                    font-weight: 500;
                    border: 1px solid;
                    padding: 8px;
                    border-radius: 4px;
                    width: 100%;
                    text-align: center;
                    font-family: "Roboto";
                    font-style: normal;
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 19px;
                    text-align: center;
                    color: #ffffff;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
