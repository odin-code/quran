import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  padding: 0;
  max-width: 444px;
  min-height: 100vh;
  border-left: 1px solid #f1f1f1;
  border-right: 1px solid #f1f1f1;
  padding-bottom: 56px;
  background-color: #fafafa;
  margin-left: auto;
  margin-right: auto;

  .ant-skeleton {
    display: flex;
    flex-direction: column;
    .ant-skeleton-header {
      padding: 0px;
      .ant-skeleton-avatar {
        border-radius: 0.5rem;
        width: 100%;
        height: 155px;
      }
    }
  }

  .card-custom {
    p {
      color: #333333;
      font-family: Poppins;
      font-style: normal;
      font-weight: normal;
      a {
        color: #333;
        &:focus,
        &:hover {
          color: #333;
        }
      }
      @media(max-width: 767px) {
        font-size: 12px;
      }
      @media (min-width: 768px) {
        font-size: 14px;
      }
    }
  }

  @media (max-width: 767px) {
    .card-floating {
      width: 85.333333%;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    .card-floating {
      width: 87.333333%;
    }
  }

  @media (min-width: 1200px) {
    .card-floating {
      width: 87.333333%;
    }
  }
`;
