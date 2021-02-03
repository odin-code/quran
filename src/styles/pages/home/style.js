import styled from "styled-components";

export const Wrapper = styled.div`
   .section-1 {
      background-size: 100%;
      padding: 0;
      width: 100%;
      margin: 0px;
      background-repeat: no-repeat;
      display: block;
      @media (min-width: 992px) {
         background-image: url(/img/home-bg.png);
         height: 800px;
      }

      @media (max-width: 768px) {
         background-image: url(/img/bg-home-m.png);
         height: 867px;
      }
      &_content {
         @media (min-width: 992px) {
            padding-top: 145px;
            width: 50%;
         }

         @media (max-width: 768px) {
            padding-top: 145px;
            width: 100%;
         }
         h1 {
            font-family: "Roboto";
            font-style: normal;
            font-weight: bold;

            color: #ffffff;

            @media (min-width: 992px) {
               font-size: 39px;
               line-height: 40px;
            }

            @media (max-width: 768px) {
               font-size: 24px;
               line-height: 32px;
               text-align: center;
            }
         }
         p {
            font-family: "Roboto";
            font-style: normal;
            font-weight: normal;

            color: #ffffff;
            margin-bottom: 0px;
            @media (min-width: 992px) {
               font-size: 20px;
               line-height: 32px;
               margin-top: 26px;
            }

            @media (max-width: 768px) {
               font-size: 14px;
               line-height: 22px;
               text-align: center;
               margin-top: 26px;
            }
         }
         .btn-content {
            margin-top: 60px;

            @media (max-width: 768px) {
               display: flex;
               justify-content: center;
            }
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
      @media (min-width: 992px) {
         margin-top: 80px;
      }

      @media (max-width: 768px) {
         margin-top: 0px;
      }
      &_content {
         @media (max-width: 768px) {
            background: #ffffff;
            box-shadow: 0px 10px 20px rgba(46, 51, 71, 0.16);
            border-radius: 8px;
            padding: 20px;
            position: relative;
            top: -30px;
         }
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

               color: #333333;
               margin-bottom: 40px;
               @media (min-width: 992px) {
                  font-size: 48px;
                  line-height: 72px;
                  margin-bottom: 20px;
               }

               @media (max-width: 768px) {
                  font-size: 24px;
                  line-height: 32px;
                  margin-bottom: 20px;
               }
            }
            p {
               font-family: Roboto;
               font-style: normal;
               font-weight: normal;

               color: #666666;

               @media (min-width: 992px) {
                  font-size: 16px;
                  line-height: 25px;
                  margin-bottom: 0px;
               }

               @media (max-width: 768px) {
                  font-size: 14px;
                  line-height: 25px;
                  margin-bottom: 60px;
               }
            }
         }
         .content-2 {
            margin: 0 auto;
            display: flex;
            justify-content: flex-end;
            &_list {
               display: block;

               @media (max-width: 768px) {
                  text-align: center;
               }
               &-item {
                  display: flex;
                  margin-bottom: 124px;

                  @media (max-width: 768px) {
                     flex-direction: column;
                     text-align: center;
                     align-items: center;
                     margin-bottom: 40px;
                  }
                  img {
                     display: block;
                     @media (min-width: 992px) {
                        margin-right: 40px;
                        width: 64px;
                        height: 64px;
                     }

                     @media (max-width: 768px) {
                        margin-bottom: 20px;
                        width: 40px;
                        height: 40px;
                     }
                  }
                  .desc {
                     h5 {
                        font-family: Roboto;
                        font-style: normal;
                        font-weight: 500;

                        color: #333333;
                        @media (min-width: 992px) {
                           margin-bottom: 23px;
                           font-size: 20px;
                           line-height: 23px;
                        }

                        @media (max-width: 768px) {
                           font-size: 18px;
                           line-height: 21px;
                           margin-bottom: 20px;
                        }
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
      margin-top: 80px;
      @media (min-width: 992px) {
         background: url(/img/bg-section-3.png);
         background-size: 100%;
         background-repeat: no-repeat;
         height: 700px;
      }

      @media (max-width: 768px) {
         background: url(/img/bg-section-3-m.png);
         background-size: 100%;
         background-repeat: no-repeat;
         height: 772px;
      }
      &_content {
         @media (min-width: 992px) {
            width: 50%;
            float: right;
            padding-top: 130px;
         }

         @media (max-width: 768px) {
            width: 100%;
            padding-top: 410px;
         }

         h2 {
            font-family: Roboto;
            font-style: normal;
            font-weight: bold;

            color: #ffffff;
            margin-bottom: 20px;
            @media (min-width: 992px) {
               font-size: 48px;
               line-height: 73px;
            }

            @media (max-width: 768px) {
               font-size: 24px;
               line-height: 32px;
            }
         }
         p {
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;

            color: #ffffff;
            @media (min-width: 992px) {
               font-size: 16px;
               line-height: 25px;
            }

            @media (max-width: 768px) {
               font-size: 14px;
               line-height: 25px;
            }
         }
         .btn-content {
            margin-top: 60px;
            a {
               margin: auto;
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
      background: url(/img/bg-section-4.png);
      background-size: cover;
      background-repeat: no-repeat;
      margin-bottom: 70px;
      margin-top: 120px;
      padding-bottom: 83px;
      display: block;
      height: 100%;
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

               color: #333333;
               margin-bottom: 20px;
               @media (min-width: 992px) {
                  font-size: 48px;
                  line-height: 47px;
               }

               @media (max-width: 768px) {
                  font-size: 24px;
                  line-height: 32px;
               }
            }
            span {
               font-family: Roboto;
               font-style: normal;
               font-weight: normal;

               display: block;
               @media (min-width: 992px) {
                  font-size: 20px;
                  line-height: 32px;
               }

               @media (max-width: 768px) {
                  font-size: 14px;
                  line-height: 25px;
               }
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

                        text-align: left;
                        color: #333333;
                        @media (min-width: 992px) {
                           font-size: 20px;
                           line-height: 23px;
                           margin-bottom: 21px;
                        }

                        @media (max-width: 768px) {
                           font-size: 18px;
                           line-height: 21px;
                           margin-bottom: 15px;
                        }
                     }
                     p {
                        font-family: Roboto;
                        font-style: normal;
                        font-weight: normal;
                        color: #666666;
                        @media (min-width: 992px) {
                           font-size: 16px;
                           line-height: 25px;
                        }

                        @media (max-width: 768px) {
                           font-size: 14px;
                           line-height: 25px;
                        }
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
            margin-bottom: 50px;
            h4 {
               font-family: Roboto;
               font-style: normal;
               font-weight: bold;s
               text-align: center;
               color: #333333;
               margin: auto;
               @media (min-width: 992px) {
                  width: 60%;
                  font-size: 40px;
                  line-height: 56px;
                  padding-bottom: 40px;
               }

               @media (max-width: 768px) {
                  font-size: 24px;
                  line-height: 32px;
                  padding-bottom: 15px;
               }
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
                     
                     display: block;
                     @media (min-width: 992px) {
                        width: 170px;
                     }
      
                     @media (max-width: 768px) {
                        height: 35px;
                     }
                  }
               }
            }
         }
         .drop-email {
            border-radius: 4px;
            margin-top: 120px;
            @media (min-width: 992px) {
               background: url(/img/bg-send.png);
               background-repeat: no-repeat;
               background-size: 100%;
               height: 320px;
               padding: 80px 50px 0px 50px;

            }

            @media (max-width: 768px) {
               background: url(/img/bg-contact-m.png);
               background-repeat: no-repeat;
               background-size: 100%;
               height: 224px;
               padding: 40px 40px 0px 40px;

            }
            .decs {
               span {
                  font-family: Roboto;
                  font-style: normal;
                  font-weight: bold;
                  display: block;
                  color: #ffffff;
                  @media (min-width: 992px) {
                     font-size: 40px;
                     line-height: 56px;
                  }
   
                  @media (max-width: 768px) {
                     font-size: 24px;
                     line-height: 32px;
                  }
               }
            }
            .form-email {
               margin-top: 30px;
               .select-input {
                  background: #ffffff;
                  border-radius: 4px;
                  display: flex;
                 
                  padding: 10px;
                  margin: 0 auto;
                  @media (min-width: 992px) {
                     width: 80%;
                  }
   
                  @media (max-width: 768px) {
                     width: 100%;
                  }
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
