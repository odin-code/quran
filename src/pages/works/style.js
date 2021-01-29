import styled from "styled-components";

export const Wrapper = styled.div`
  .section-1 {
    background: url(/img/bg-work.png);
    display: block;
    height: 800px;
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
    margin-top:80px;
    margin-bottom:80px;
    &_content {
      .tabs-works {
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
