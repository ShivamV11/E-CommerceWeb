/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import Body from './Body'
import './Shop.css'
import MainHeader from "../Header/MainHeader";
import Footer from "../Footer/Footer";



const Shop = () => {
  return (
    <>
    <MainHeader/>

    <div class="page-header mt-30 mb-50">
      <div class="container">
        <div class="archive-header">
          <div class="row align-items-center">
            <div class="col-xl-3">
              <h1 class="mb-15 text-capitalize">Category</h1>
              <div class="breadcrumb">
                <a href="/">
                  <i class="fi-rs-home mr-5"></i>Home
                </a>
                <span></span> Shop <span></span>
              </div>
            </div>
            <div class="col-xl-9 text-end d-none d-xl-block">
              <ul class="tags-list">
                <li class="hover-up">
                  <a class="cat-item text-brand-2">
                    <i class="fi-rs-cross mr-10"></i>All
                  </a>
                </li>
                <li class="hover-up">
                  <a class="cat-item text-brand">
                    <i class="fi-rs-cross mr-10"></i>snack
                  </a>
                </li>
                <li class="hover-up">
                  <a class="cat-item text-brand">
                    <i class="fi-rs-cross mr-10"></i>milk
                  </a>
                </li>
                <li class="hover-up">
                  <a class="cat-item text-brand">
                    <i class="fi-rs-cross mr-10"></i>fruit
                  </a>
                </li>
                <li class="hover-up">
                  <a class="cat-item text-brand">
                    <i class="fi-rs-cross mr-10"></i>broccoli
                  </a>
                </li>
                <li class="hover-up">
                  <a class="cat-item text-brand">
                    <i class="fi-rs-cross mr-10"></i>salad
                  </a>
                </li>
                <li class="hover-up">
                  <a class="cat-item text-brand">
                    <i class="fi-rs-cross mr-10"></i>appetizer
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Body/>
    <Footer/>
    </>
  );
};

export default Shop;
