import styled from "styled-components";

export const Wrapper = styled.div`
  .section-1 {
    background-image: url(/img/home-bg.png);
    height: 800px;
    background-size: 100%;
    padding: 0;
    width: 100%;
    margin: 0px;
    background-repeat: no-repeat;
    display: block;
    &_content {
      padding-top: 145px;
      width: 50%;
      h1 {
        font-family: "Roboto";
        font-style: normal;
        font-weight: bold;
        font-size: 39px;
        line-height: 40px;
        color: #ffffff;
      }
      p {
        font-family: "Roboto";
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 32px;
        color: #ffffff;
        margin-bottom: 0px;
        margin-top: 26px;
      }
      .btn-content {
        margin-top: 60px;
        a {
          width: 177px;
          height: 56px;
          background: #fff;
          display: block;
          border-radius: 4px;
          font-family: Roboto;
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 55px;
          text-align: center;
          color: #5b7cfd;
          text-decoration: none;
        }
      }
    }
  }
  .section-2 {
    margin-bottom: 70px;
    margin-top: 80px;
    &_content {
      .content-1 {
        h4 {
          font-family: "Roboto";
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 16px;
          letter-spacing: 1px;
          color: #5b7cfd;
          margin-bottom: 20px;
        }
        h2 {
          font-family: "Roboto";
          font-style: normal;
          font-weight: bold;
          font-size: 48px;
          line-height: 72px;
          color: #333333;
          margin-bottom: 40px;
        }
        p {
          font-family: Roboto;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 25px;
          margin-bottom: 0px;
          color: #666666;
        }
      }
      .content-2 {
        margin: 0 auto;
        display: flex;
        justify-content: flex-end;
        &_list {
          display: block;
          &-item {
            display: flex;
            margin-bottom: 124px;
            img {
              width: 64px;
              height: 64px;
              display: block;
              margin-right: 40px;
            }
            .desc {
              h5 {
                font-family: Roboto;
                font-style: normal;
                font-weight: 500;
                font-size: 20px;
                line-height: 23px;
                color: #333333;
                margin-bottom: 23px;
              }
              span {
                font-family: Roboto;
                font-style: normal;
                font-weight: normal;
                font-size: 16px;
                line-height: 25px;
                display: block;
                color: #666666;
              }
            }
          }
        }
      }
    }
  }
  .section-3 {
    background: url(/img/bg-section-3.png);
    height: 800px;
    background-size: 100%;
    background-repeat: no-repeat;
    margin-bottom: 70px;
    margin-top: 80px;
    &_content {
      width: 50%;
      float: right;
      padding-top: 130px;
      h2 {
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 48px;
        line-height: 73px;
        color: #ffffff;
        margin-bottom: 20px;
      }
      p {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 25px;
        color: #ffffff;
      }
      .btn-content {
        margin-top: 60px;
        a {
          width: 177px;
          height: 56px;
          background: #fff;
          display: block;
          border-radius: 4px;
          font-family: Roboto;
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 55px;
          text-align: center;
          color: #5b7cfd;
          text-decoration: none;
        }
      }
    }
  }
  .section-4 {
    background: url("/img/bg-section-4.png");
    background-size: 100%;
    background-repeat: no-repeat;
    margin-bottom: 70px;
    margin-top: 120px;
    padding-bottom: 83px;
    .img-sction-4 {
      position: relative;
      top: 110px;
    }
    &_content {
      .desc {
        h4 {
          font-family: Roboto;
          font-style: normal;
          font-weight: bold;
          font-size: 48px;
          line-height: 72px;
          color: #333333;
          margin-bottom: 20px;
        }
        span {
          font-family: Roboto;
          font-style: normal;
          font-weight: normal;
          font-size: 20px;
          line-height: 32px;
          display: block;
        }

        &-list {
          display: block;
          margin-top: 60px;
          &_item {
            display: flex;
            margin-bottom: 40px;
            &:last-child {
              margin: 0px;
            }
            img {
              width: 64px;
              height: 64px;
              display: block;
              margin-right: 30px;
            }
            .content {
              h5 {
                font-family: Roboto;
                font-style: normal;
                font-weight: 500;
                font-size: 20px;
                line-height: 23px;
                text-align: left;
                color: #333333;
                margin-bottom: 21px;
              }
              p {
                font-family: Roboto;
                font-style: normal;
                font-weight: normal;
                font-size: 16px;
                line-height: 25px;
                color: #666666;
              }
            }
          }
        }
      }
    }
  }
  .section-5 {
    &_content {
      text-align: center;
      display: block;
      .desc {
        margin-bottom: 80px;
        h4 {
          font-family: Roboto;
          font-style: normal;
          font-weight: bold;
          font-size: 40px;
          line-height: 56px;
          text-align: center;
          color: #333333;
          padding-bottom: 40px;
          width: 60%;
          margin: auto;
        }
        p {
          font-family: Roboto;
          font-style: normal;
          font-weight: normal;
          font-size: 20px;
          line-height: 32px;
          text-align: center;
          color: #333333;
          margin: 0px auto;
          width: 60%;
        }
      }
      .slider-5 {
        .slide-list {
          display: flex;
          justify-content: center;
          &_item {
            margin-right: 30px;
            &:last-child {
              margin: 0px;
            }
            img {
              width: 170px;
              display: block;
            }
          }
        }
      }
      .drop-email {
        height: 320px;
        border-radius: 4px;
        background: url(/img/bg-send.png);
        padding: 80px 50px 0px 50px;
        background-repeat: no-repeat;
        background-size: 100%;
        margin-top: 120px;
        .decs {
          span {
            font-family: Roboto;
            font-style: normal;
            font-weight: bold;
            font-size: 40px;
            line-height: 56px;
            display: block;
            color: #ffffff;
          }
        }
        .form-email {
          margin-top: 30px;
          .select-input {
            background: #ffffff;
            border-radius: 4px;
            display: flex;
            width: 80%;
            padding: 10px;
            margin: 0 auto;
            input {
              width: 100%;
              border: 0px;
              outline: 0px;
            }
          }
          .ant-btn-primary {
            background: #5b7cfd;
            border-radius: 4px;
            img {
              width: 12px;
              height: 12px;
              margin-right: 12px;
            }
            span {
              font-family: Roboto;
              font-style: normal;
              font-weight: 500;
              font-size: 16px;
              line-height: 19px;
              color: #ffffff;
            }
          }
        }
      }
    }
  }
`;
