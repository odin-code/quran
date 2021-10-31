import React from "react";
import { Wrapper } from "./style";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="copyright">
                <span>Copyright PT Claudmedia Indonesia. &copy;2021</span>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Footer;
