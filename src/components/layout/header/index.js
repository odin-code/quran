import React, { useState, useEffect } from "react";
import { Wrapper } from "./style";
import Link from "next/link";

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
              <a className="logo">contoh logo</a>
            </Link>
            <nav className="d-navbar">
              <ul>
                <li>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/works">
                    <a>Work</a>
                  </Link>
                </li>
              </ul>
            </nav>
            <nav className="m-navbar"></nav>
            <div className="btn-header">
              <Link href="">
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
