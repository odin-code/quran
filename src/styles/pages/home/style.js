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

  .placeholder-menu {
    li {
      width: 60px;
      text-align: center;
      margin-right: 0px;
      &:last-child {
        margin-right: 0px;
      }
      .ant-skeleton {
        display: flex;
        flex-direction: column;
        justify-content: center;
       
        .ant-skeleton-header {
          padding-right: 0px;
        }
        .ant-skeleton-content {
          .ant-skeleton-title {
            margin: auto;
            margin-top: 10px;
          }
        }
      }
    }
  }

  .custom-feed {
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
  }

  .profile-icon {
    position: absolute;
    right: 0;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background: #dddcdc;
    color: #f9fafb;
    &:hover,
    &:focus {
      color: #f9fafb;
    }
    span {
      padding: 7px 12px;
      display: block;
      color: #f9fafb;
    }
  }

  .bg-custom {
    background-image: url(/img/bg_top_home.png);
    background-size: cover;
  }

  .username-container {
  }

  .card-custom {
    p {
      color: #333333;
      font-family: Poppins;
      font-style: normal;
      font-weight: normal;
      word-break: break-word;
      a {
        color: #333;
        &:focus,
        &:hover {
          color: #333;
        }
      }
      @media (max-width: 767px) {
        font-size: 12px;
      }
      @media (min-width: 768px) {
        font-size: 14px;
      }
    }
  }

  @media (max-width: 767px) {
    .card-floating {
      width: 92.333333%;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    .card-floating {
      width: 92.333333%;
    }
  }

  @media (min-width: 1200px) {
    .card-floating {
      width: 92.333333%;
    }
  }
`;
