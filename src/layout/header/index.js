import React, { useState, useEffect } from "react";
import { Wrapper } from "./style";
import Link from "next/link";
import ActiveLink from "../../activeLink";
import { Drawer } from "antd";

const Navbar = () => {
  const [navbar, setnav] = useState(false);
  const [visible, setVisible] = useState(false);

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

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

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
                  <ActiveLink
                    ActiveLink
                    activeClassName="active-nav"
                    href="/works"
                  >
                    <a>Work</a>
                  </ActiveLink>
                </li>
              </ul>
            </nav>
            <nav className="m-navbar">
              <Drawer
                title=""
                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible}
                placement="left"
              >
                <div className="logo-mobile">
                  <Link href="/">
                    <a className="logo">
                      <img src="/logo.png" />
                    </a>
                  </Link>
                </div>
                <div className="list-mobile">
                  <ul>
                    <li>
                      <ActiveLink
                        ActiveLink
                        activeClassName="active-mobile"
                        href="/"
                      >
                        <a>Home</a>
                      </ActiveLink>
                    </li>
                    <li>
                      <ActiveLink
                        ActiveLink
                        activeClassName="active-mobile"
                        href="/works"
                      >
                        <a>Work</a>
                      </ActiveLink>
                    </li>
                  </ul>
                </div>
                <div className="btn-talk">
                  <Link href="https://api.whatsapp.com/send?phone=81932622629&text=Assalamu'alaikum%20,%20Saya%20mendapatkan%20info%20dari%20website%20claudmedia">
                    <a className="btn-wa"> Let's Talk</a>
                  </Link>
                </div>
              </Drawer>
            </nav>
            <div className="btn-header">
              <Link href="https://api.whatsapp.com/send?phone=81932622629&text=Assalamu'alaikum%20,%20Saya%20mendapatkan%20info%20dari%20website%20claudmedia">
                <a className={navbar ? "btn-active" : ""}> Let's Talk</a>
              </Link>
            </div>
            <div className="hamberger-menu">
              <a href="javascript:void(0)" onClick={showDrawer}>
                <img src="/img/hambur.png" />
              </a>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
  return null;
};

export default Navbar;
