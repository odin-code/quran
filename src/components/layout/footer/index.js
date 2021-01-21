import React from "react";
import { Wrapper } from "./style";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <ul>
          <li>
            <Link href="#">
              <a>
                <img src="/img/home.png" />
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>
                <img src="/img/like.png" />
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>
                <img src="/img/notification.png" />
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>
              <img src="/img/user.png" />
              </a>
            </Link>
          </li>
        </ul>
      </Wrapper>
    </>
  );
};

export default Footer;
