import styled from "styled-components";

export const Wrapper = styled.div`
  height: auto;
  left: 0px;
  top: 0px;
  background: #262c7c;
  width: 100%;
  padding: 15px;
  position: fixed;
  z-index: 9;
  .navbar {
    .search-bar {
      &__content {
        background: #ffffff;
        box-shadow: 0px 7px 20px rgba(0, 0, 0, 0.08);
        border-radius: 24px;
        padding: 9px 15px;
        display: flex;
        img {
          width: 14px;
          height: 14px;
          margin-top: 4px;
        }
        span {
          display: block;
          margin-left: 13px;
          font-family: "Nunito";
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 22px;
          color: #8e8e93;
        }
      }
    }
  }
`;
