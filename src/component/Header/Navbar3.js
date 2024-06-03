import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import Dropdown from "react-bootstrap/Dropdown";

import "../../component/Header/CSS Header/Navbar3.css";

import Nav from "react-bootstrap/Nav";
import IconHot from "../../Assets/icon-hot.svg";
import IconCare from "../../Assets/icon-headphone.svg";


import { Link } from 'react-router-dom';

function Navbar3() {
  return (
    <>
      <Navbar className="bg-body-tertiary ">
        <Container fluid>
          <div className="header-nav d-none d-lg-flex">
            <Navbar.Brand href="#home">
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  className="browse-btn nav-category-btn success"
                >
                  <i className="bx bxs-grid-alt"></i>Browse All Categories
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <div className="grid-container">
                    <div className="grid-item">Fruits</div>
                    <div className="grid-item">Vegetables</div>
                    <div className="grid-item">Dairy Products</div>
                    <div className="grid-item">Bakery Items</div>
                    <div className="grid-item">Meat and Poultry</div>
                    <div className="grid-item">Canned Goods</div>
                    <div className="grid-item">Snacks</div>
                    <div className="grid-item">Beverages</div>
                    <div className="grid-item">Frozen Foods</div>
                    <div className="grid-item">Household Essentials</div>
                    <div className="grid-item">Personal Care</div>
                    <div className="grid-item">Pet Supplies</div>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </Navbar.Brand>

            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
             

                <nav class="navbar3">
                  <ul>
                    <li>
                      <i className="icon-hot">
                        
                        <img
                          src={IconHot}
                          alt=""
                          className="nav-compare-icon"
                        ></img>
                      </i>

                      <Link to="/hotdeals">Hot Deals</Link>
                    </li>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/shop">Shop</Link>
                    </li>
                    <li>
                      <Link to="/vendors">Vendors</Link>
                    </li>
                    <li>
                      <Link to="/about">Mega Menu</Link>
                    </li>
                    <li>
                      <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link to="/about">Pages</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </Nav>
            </Navbar.Collapse>
          </div>
          <Navbar.Toggle />

          <Navbar.Collapse className="justify-content-end">
            <div className="hotline d-none d-lg-flex">
              <img src={IconCare} alt="care" />
              <Navbar.Text>
                <p>
                  1900 - 888<span>24/7 Support Center</span>
                </p>
              </Navbar.Text>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbar3;
