/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./HotDeals.css";

function HotDeals() {
  return (
      <div className="main">
        <div className="page-header breadcrumb-wrap d-none">
          <div className="container">
            <div className="breadcrumb">
              <a href="/"></a>
              
            </div>
          </div>
        </div>
        <div className="page-header mt-30 mb-50">
          <div className="container">
            <div className="archive-header">
              <div className="row align-items-center">
                <div className="col-xl-3">
                  <h1 className="mb-15 text-capitalize">Category</h1>
                  <div className="breadcrumb">
                    <a href="/">
                      <i className="fi-rs-home mr-5"></i>Home
                    </a>
                    <span></span> Shop <span></span>
                  </div>
                </div>
                <div className="col-xl-9 text-end d-none d-xl-block">
                  <ul className="tags-list">
                    <li className="hover-up">
                      <a className="cat-item text-brand-2">
                        <i className="fi-rs-cross mr-10"></i>All
                      </a>
                    </li>
                    <li className="hover-up">
                      <a className="cat-item text-brand">
                        <i className="fi-rs-cross mr-10"></i>snack
                      </a>
                    </li>
                    <li className="hover-up">
                      <a className="cat-item text-brand">
                        <i className="fi-rs-cross mr-10"></i>milk
                      </a>
                    </li>
                    <li className="hover-up">
                      <a className="cat-item text-brand">
                        <i className="fi-rs-cross mr-10"></i>fruit
                      </a>
                    </li>
                    <li className="hover-up">
                      <a className="cat-item text-brand">
                        <i className="fi-rs-cross mr-10"></i>broccoli
                      </a>
                    </li>
                    <li className="hover-up">
                      <a className="cat-item text-brand">
                        <i className="fi-rs-cross mr-10"></i>salad
                      </a>
                    </li>
                    <li className="hover-up">
                      <a className="cat-item text-brand">
                        <i className="fi-rs-cross mr-10"></i>appetizer
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <section className="mt-50 mb-50">
            <div className="container mb-30">
              <div className="row flex-row-reverse">
                <div className="col-lg-4-5">
                  <div className="shop-product-fillter">
                    <div className="totall-product">
                      <p>
                        We found<strong className="text-brand">21</strong>items
                        for you!
                      </p>
                    </div>
                    <div className="sort-by-product-area">
                      <div className="sort-by-cover mr-10">
                        <div className="sort-by-product-wrap">
                          <div className="sort-by">
                            <span>
                              <i className="fi-rs-apps"></i>Show:
                            </span>
                          </div>
                          <div className="sort-by-dropdown-wrap custom-select">
                            <select>
                              <option value="12">12</option>
                              <option value="5">5</option>
                              <option value="10">10</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div class="sort-by-cover">
                        <div class="sort-by-product-wrap">
                          <div class="sort-by">
                            <span>
                              <i class="fi-rs-apps-sort"></i>Sort by:
                            </span>
                          </div>
                          <div class="sort-by-dropdown-wrap custom-select">
                            <select>
                              <option value="">Defaults</option>
                              <option value="featured">Featured</option>
                              <option value="trending">Trending</option>
                              <option value="lowToHigh">Low To High</option>
                              <option value="highToLow">High To Low</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
  );
}

export default HotDeals;
