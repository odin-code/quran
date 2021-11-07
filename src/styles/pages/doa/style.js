import styled from "styled-components";

export const Wrapper = styled.div`
  .placeholder-menu {
    li {
      width: 60px;
      text-align: center;
    }
  }
  .list_item_doa {
    span {
      color: #333333;
      font-family: "Poppins";
    }
  }
  .search-custom {
    background: rgba(190, 190, 190, 0.2);
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    .ant-input-group-addon {
      box-shadow: unset;
      background: transparent;
      .ant-btn-primary {
        background: transparent;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
        box-shadow: unset;
        border: 0px;
        font-size: 20px;
        position: relative;
        top: -4px;
        color: #ababab;
        &:after {
          box-shadow: unset !important;
          outline: 0;
        }
      }
    }
    .ant-input-affix-wrapper {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      height: 40px;
      border: 0px;
      box-shadow: unset !important;
      background: transparent;
      .ant-input-suffix {
        .ant-input-clear-icon {
          color: #ababab;
        }
      }
      .ant-input {
        background: transparent;
      }
      &:focus,
      &:active,
      &:hover {
        border: 0px;
        box-shadow: unset;
      }
    }
  }
  .number-custom {
    color: #fff;
    width: 25px;
    height: 25px;
    padding-left: 10px;
    display: block;
    border-radius: 4px;
    span {
      color: #fff;
      font-size: 12px;
      padding-top: 5px;
    }
  }
  .loading-custom {
    .ant-skeleton-content {
      .ant-skeleton-title {
        display: none;
      }
      .ant-skeleton-paragraph {
        margin: 0px;
        li {
          width: 100% !important;
        }
      }
    }
  }
`;
