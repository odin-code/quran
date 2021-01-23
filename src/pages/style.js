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
    }
  }
`;
