import styled from "styled-components";

export const Wrapper = styled.div`
  .active-header {
    background-color: #464ACD;
  }
  .header {
    height: auto;
    left: 0px;
    top: 0px;
    width: 100%;
    padding: 35px 15px 15px 15px;
    z-index: 9;
    height: 95px;
    position: fixed;
    .container {
      display: flex;
      justify-content: space-between;
    }
    .btn-header {
      .btn-active {
        background: #5B7CFD !important;
        color: #fff !important;
      }
      a {
        width: 113px;
        height: 40px;
        background: #fff;
        padding: 10px;
        border-radius: 4px;
        text-decoration: none;
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        text-align: center;
      }
    }
    .d-navbar {
      width: 65%;
      text-align: right;
      .active {
        background: #fff;
      }
      ul {
        padding: 0px;
        display: flex;

        justify-content: flex-end;
        li {
          margin-right: 41px;
          &:last-child {
            margin: 0px;
          }
          a {
            font-family: "Roboto";
            color: #cccccc;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 19px;
            text-decoration: none;
          }
        }
      }
      @media (min-width: 992px) {
        display: block;
      }
      @media (min-width: 768px) and (max-width: 991px) {
      }
      @media (max-width: 414px) {
        display: none;
      }
    }
    .m-navbar {
      @media (min-width: 992px) {
        display: none;
      }
      @media (min-width: 768px) and (max-width: 991px) {
      }
      @media (max-width: 414px) {
        display: block;
      }
    }
  }
`;
