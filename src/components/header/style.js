import syled from "styled-components";

export const Wrapper = syled.div`
  height: auto;
  left: 0px;
  top: 0px;
  background: #262c7c;
  width: 100%;
  padding: 15px;
  position: fixed;
  z-index: 9;
  .navbar {
    display: flex;
    .title-navbar {
      color: #fff;
      font-size: 20px;
      display: block;
      line-height: 25px;
      margin-left: 10px;
      font-weight: 500;
    }
    .back-to {
      .las {
        color: #fff;
        @media (min-width: 992px) {
        font-size: 25px;
        }
        @media (min-width: 768px) and (max-width: 991px) {
        font-size: 25px;
        }
        @media (max-width: 414px) {
        font-size: 25px;
        }
      }
    }
  }
`;
