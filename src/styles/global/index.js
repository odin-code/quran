import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

font-family: 'Nunito', sans-serif;
    .f-right {
        float: right !important;
    }
    .d-block {
        display: block !important;
    }
    .container {
        @media (min-width: 992px) {
            width: 720px;
        }
        @media (min-width: 768px) and (max-width: 991px) {
            width: 100%
        }
        margin-right: auto;
        margin-left: auto;
    }
    .slick-dots {
        li {
            button {
                width: 25px;
                height: 25px;
                &::before {
                    width: 25px;
                    height: 25px;
                    opacity: 1 !important;
                    color: #EEEEEF !important;
                    font-size: 12px !important;
                }
            }
        }
        .slick-active {
            button {
                width: 25px;
                height: 25px;
                &::before {
                    width: 25px;
                    height: 25px;
                    opacity: 1 !important;
                    color: #4F3592 !important;
                }
            }
        }
        
    }
`;
