import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

font-family: 'Roboto', sans-serif !important;
    .f-right {
        float: right !important;
    }
    .d-block {
        display: block !important;
    }
    .container {
        @media (min-width: 992px) {
            width: 992px;
        }
        @media (min-width: 768px) and (max-width: 991px) {
            width: 100%
        }
        margin-right: auto;
        margin-left: auto;
    }
    .ant-drawer {
        .ant-drawer-content {
            background: #464ACD;
            .logo-mobile {
                .logo {
                img {
                    height: 47px;
                    width: 155px;
                    left: 0px;
                    top: -11px;
                    position: relative;
                }
                }
            }
            .list-mobile {
                margin-top: 40px;
                margin-bottom:80px;
                ul {
                    padding : 0px;
                    li {
                        margin-bottom: 30px;
                        &:last-child {
                          margin: 0px;
                        }
                        a {
                          font-family: "Roboto";
                          color: #cccccc;
                          font-style: normal;
                          font-weight: normal;
                          font-size: 18px;
                          line-height: 19px;
                          text-decoration: none;
                          
                        }
                        .active-mobile {
                          color #fff;
                          font-weight: 600;
                        }
                      }
                }
            }
            .btn-talk {
                .btn-wa {
                    width: 100%;
                    height: 40px;
                    background: #fff;
                    padding: 10px;
                    border-radius: 4px;
                    -webkit-text-decoration: none;
                    text-decoration: none;
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 16px;
                    text-align: center;
                    display: block;
                }
            }
        }
    } 
`;
