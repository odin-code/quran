import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  @media (min-width: 992px) {
    width: 720px
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
  }
  @media (max-width: 414px) {
    width: 100%;
  }
  height: 80px;
  background: #fff;
  ul {
    display: flex;
    padding: 20px 40px;
    justify-content: space-between;
    margin: 0px;
      li {
        width: 30px;
        height: 30px;
      }
  }
`;
