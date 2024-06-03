/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./CSS Header/HeaderMiddle.css";
import NavLogo from "../../Assets/logo.svg";

import NavCompare from '../../Assets/icon-compare.svg'


// import { useState } from 'react'

function HeaderMiddle() {
  // const[compareCount,setCompareCount] = useState(0)

  return (
    <div className="navbar-2">
      <div className="nav-logo-div">
        <img src={NavLogo} alt="" />
      </div>
      <div className="search-nav-div">
        <div className="nav-search-bar">
      {/* <div className="dropdown">
            <button className="nav-category-btn"> All Categories</button>
            </div> */}


            <div class="dropdown">
    <button class="nav-category-btn">All Categories</button>
    <div class="dropdown-content">
        <a href="#">Mens</a>
        <a href="#">Womens</a>
        <a href="#">Cellphones</a>
        <a href="#">Computers</a>
        <a href="#">Electronics</a>
        <a href="#">Home & Garden</a>
        <a href="#">Luggage</a>
        <a href="#">Mother & Kid's</a>
    </div>
</div>
            {/* dropdown start */}
            

          <input type="text" className="nav-search-input" placeholder="search" />
          <button className="nav-search-btn">
          <i className="bx bx-search">   </i>
          </button>
        </div>
        <div className="left-side-nav-2">
          <div className="nav-item">
            <div className="nav-icon-div header-action-icon-2">
            <span class="pro-count blue">0</span>
            {/* <div className="nav-icon-counter"></div> */}
             
            </div>
            <img src={NavCompare} alt="compare"/>
            <div>Compare</div>
          </div>
          <div className="nav-item">
            <i className="bx bx-heart nav-icons-2">
            
              
              {/* <img src={NavHeart} alt="" className='nav-compare-icon'></img> */}
           
            </i>
            <div>Wishlist </div>
            <span class="pro-count blue">0</span>
          </div>
          <div className="nav-item">
            <i className="bx bx-cart nav-icons-2">    </i>
            <div>Cart</div>
          </div>
          <div className="nav-item">
            <i
              className="bx bx-user nav-icons-2"
              style={{ color: "black" }}
            >   </i>
            <div>Account</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderMiddle;
