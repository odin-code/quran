import React from "react";
import { Wrapper, Nav } from "./style";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <Wrapper>
        <div className="container">
          <nav className="navbar">
            <Link href="#">
              <a className="search-bar">
                <div className="search-bar__content">
                  <img src="/img/search-bar.svg" />
                  <span>Kemana anda ingin pergi</span>
                </div>
              </a>
            </Link>
          </nav>
        </div>
      </Wrapper>
    </>
  );
};

export default Navbar;
