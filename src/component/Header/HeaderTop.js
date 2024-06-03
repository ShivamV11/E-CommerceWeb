import React from "react";
import "./CSS Header/HeaderTop.css";

import Navbar from "react-bootstrap/Navbar";



function HeaderTop() {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <div className="container-fluid">
          <div className="row col-12">
            <div className="col ">
              {/* <Navbar.Brand href="#home">Navbar with text</Navbar.Brand> */}
              <div className="header-container">
                <ul className="header-list">
                  <li>
                    <a href="/about">About Us</a>
                  </li>
                  <div className="nav-seperator">|</div>
                  <li>
                    <a href="/account">My Account</a>
                  </li>
                  <div className="nav-seperator">|</div>
                  <li>
                    <a href="/wishlist">Wishlist</a>
                  </li>
                  <div className="nav-seperator">|</div>
                  <li>
                    <a href="/tracking">Order Tracking</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col">
              {" "}
              <div className="middle-title">
                Get great devices up to 50% off{" "}
                <span className="nav-span">View details</span>
              </div>
            </div>
            <div className="col">
              {/* <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Signed in as: <a href="#login">Mark Otto</a>
              </Navbar.Text>
            </Navbar.Collapse> */}
              <div className="left-side-nav-1">
                <div className="nav-help-dial">
                  <div className="need-help">Need Help? Call Us:</div>
                  <div className="nav-dial">+1800 900</div>
                </div>
                <div className="nav-seperator">|</div>
                <div className="lang-change">
                  {/* <img src={Globe} alt="" className='nav-globe'/> */}
                  <div className="lang">
                    English
                    <i className="bx bx-chevron-down"></i>
                  </div>
                </div>
                <div className="nav-seperator ">|</div>
                <div className="country-change">
                  <div className="lang">
                    USD
                    <i className="bx bx-chevron-down"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Navbar>
    </>
  );
}

export default HeaderTop;
