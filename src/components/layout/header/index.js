import React, { useState, useEffect } from "react";
import { Wrapper } from "./style";
import Link from "next/link";
import ActiveLink from "../../activeLink";

const Navbar = () => {
  const [navbar, setnav] = useState(false);

  useEffect(function mount() {
    function changeBackground() {
      if (window.scrollY >= 90) {
        setnav(true);
      } else {
        setnav(false);
      }
    }
    window.addEventListener("scroll", changeBackground);

    return function unMount() {
      window.removeEventListener("scroll", changeBackground);
    };
  });

  return (
    <>
      <Wrapper>
        <div className={navbar ? "header active-header" : "header"}>
          <div className="container">
            <Link href="/">
              <a className="logo">
                <img src="/logo.png" />
              </a>
            </Link>
            <nav className="d-navbar">
              <ul>
                <li>
                  <ActiveLink ActiveLink activeClassName="active-nav" href="/">
                    <a>Home</a>
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink ActiveLink activeClassName="active-nav" href="/works">
                    <a>Work</a>
                  </ActiveLink>
                </li>
              </ul>
            </nav>
            <nav className="m-navbar"></nav>
            <div className="btn-header">
              <Link href="https://api.whatsapp.com/send?phone=81932622629&text=Assalamu'alaikum%20,%20Saya%20mendapatkan%20info%20dari%20website%20claudmedia">
                <a className={navbar ? "btn-active" : ""}> Let's Talk</a>
              </Link>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
  return null;
};

export default Navbar;
