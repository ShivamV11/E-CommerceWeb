/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Blog.css";
import comp from "./img/category-1.svg";
import comp2 from "./img/category-2.svg";
import comp3 from "./img/category-3.svg";
import comp4 from "./img/category-4.svg";
import comp5 from "./img/category-5.svg";
import blog1 from "./img/blog-1.png";
import blog2 from "./img/blog-2.png";
import blog3 from "./img/blog-3.png";
import blog4 from "./img/blog-4.png";
import blog5 from "./img/blog-5.png";
import blog6 from "./img/blog-6.png";
import blog7 from "./img/blog-7.png";
import blog8 from "./img/blog-8.png";
import blog9 from "./img/blog-9.png";
import blog10 from "./img/blog-10.png";
import blog11 from "./img/blog-11.png";
import blog12 from "./img/blog-12.png";

import icon1 from './img/thumbnail-3.jpg'
import icon2 from './img/thumbnail-4.jpg'
import icon3 from './img/thumbnail-5.jpg'
import icon4 from './img/thumbnail-6.jpg'
import icon5 from './img/thumbnail-1.jpg'
import icon6 from './img/thumbnail-2.jpg'
import banner11 from './img/banner-11.png'

import MainHeader from "../Header/MainHeader";
import Footer from "../Footer/Footer";

const Blog = () => {
  return (
    <div>
      <MainHeader />
      <main className="main">
        <section class="mt-50 mb-50">
          <div class="container custom">
            <div className="row">
              <div className="col-9">
                <div class="shop-product-fillter mb-50 pr-30">
                  <div class="totall-product">
                    <h2>
                      <img class="w-36px mr-10" src={comp} alt="nest" />
                      Recips Articles
                    </h2>
                  </div>
                  <div class="sort-by-product-area">
                    <div class="sort-by-cover mr-10">
                      <div class="sort-by-product-wrap">
                        <div class="sort-by">
                          <span>
                            <i class="fi-rs-apps"></i>Show:
                          </span>
                        </div>
                        <select>
                          <option>All</option>
                          <option>100</option>
                          <option>150</option>
                          <option>200</option>
                        </select>
                      </div>
                    </div>
                    <div class="sort-by-cover">
                      <div class="sort-by-product-wrap">
                        <div class="sort-by">
                          <span>
                            <i class="fi-rs-apps-sort"></i>Sort:
                          </span>
                        </div>
                        <select>
                          <option>Featured</option>
                          <option>Newest</option>
                          <option>Most comments</option>
                          <option>Release Date</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="loop-grid pr-30">
                  <div class="row">
                    {/* <!-- Individual Blog Articles --> */}

                    <article class="col-xl-4 col-lg-6 col-md-6 text-center hover-up mb-30 animated">
                      <div class="post-thumb">
                        <a href="/blog-post-right">
                          <img
                            class="border-radius-15"
                            src={blog1}
                            alt="nest"
                          />
                        </a>
                        <div class="entry-meta">
                          <a
                            class="entry-meta meta-2"
                            href="/blog-category-grid"
                          >
                            <i class="fi-rs-heart"></i>
                          </a>
                        </div>
                      </div>
                      <div class="entry-content-2">
                        <h6 class="mb-10 font-sm">
                          <a
                            class="entry-meta text-muted"
                            href="/blog-category-grid"
                          >
                            Politic
                          </a>
                        </h6>
                        <h4 class="post-title mb-15">
                          <a href="/blog-post-right">
                            The litigants on the screen are not actors
                          </a>
                        </h4>
                        <div class="entry-meta font-xs color-grey mt-10 pb-10">
                          <div>
                            <span class="post-on mr-10">25 April 2024</span>
                            <span class="hit-count has-dot mr-10">
                              126k Views
                            </span>
                            <span class="hit-count has-dot">4 mins read</span>
                          </div>
                        </div>
                      </div>
                    </article>
                    {/* <!-- End of Individual Blog Article --> */}
                    {/* <!-- Individual Blog Articles --> */}

                    <article class="col-xl-4 col-lg-6 col-md-6 text-center hover-up mb-30 animated">
                      <div class="post-thumb">
                        <a href="/blog-post-right">
                          <img
                            class="border-radius-15"
                            src={blog2}
                            alt="nest"
                          />
                        </a>
                        <div class="entry-meta">
                          <a
                            class="entry-meta meta-2"
                            href="/blog-category-grid"
                          >
                            <i class="fi-rs-heart"></i>
                          </a>
                        </div>
                      </div>
                      <div class="entry-content-2">
                        <h6 class="mb-10 font-sm">
                          <a
                            class="entry-meta text-muted"
                            href="/blog-category-grid"
                          >
                            Politic
                          </a>
                        </h6>
                        <h4 class="post-title mb-15">
                          <a href="/blog-post-right">
                            The litigants on the screen are not actors
                          </a>
                        </h4>
                        <div class="entry-meta font-xs color-grey mt-10 pb-10">
                          <div>
                            <span class="post-on mr-10">25 April 2024</span>
                            <span class="hit-count has-dot mr-10">
                              126k Views
                            </span>
                            <span class="hit-count has-dot">4 mins read</span>
                          </div>
                        </div>
                      </div>
                    </article>
                    {/* <!-- End of Individual Blog Article --> */}
                    {/* <!-- Individual Blog Articles --> */}

                    <article class="col-xl-4 col-lg-6 col-md-6 text-center hover-up mb-30 animated">
                      <div class="post-thumb">
                        <a href="/blog-post-right">
                          <img
                            class="border-radius-15"
                            src={blog3}
                            alt="nest"
                          />
                        </a>
                        <div class="entry-meta">
                          <a
                            class="entry-meta meta-2"
                            href="/blog-category-grid"
                          >
                            <i class="fi-rs-heart"></i>
                          </a>
                        </div>
                      </div>
                      <div class="entry-content-2">
                        <h6 class="mb-10 font-sm">
                          <a
                            class="entry-meta text-muted"
                            href="/blog-category-grid"
                          >
                            Politic
                          </a>
                        </h6>
                        <h4 class="post-title mb-15">
                          <a href="/blog-post-right">
                            The litigants on the screen are not actors
                          </a>
                        </h4>
                        <div class="entry-meta font-xs color-grey mt-10 pb-10">
                          <div>
                            <span class="post-on mr-10">25 April 2024</span>
                            <span class="hit-count has-dot mr-10">
                              126k Views
                            </span>
                            <span class="hit-count has-dot">4 mins read</span>
                          </div>
                        </div>
                      </div>
                    </article>
                    {/* <!-- End of Individual Blog Article --> */}
                    {/* <!-- Individual Blog Articles --> */}

                    <article class="col-xl-4 col-lg-6 col-md-6 text-center hover-up mb-30 animated">
                      <div class="post-thumb">
                        <a href="/blog-post-right">
                          <img
                            class="border-radius-15"
                            src={blog4}
                            alt="nest"
                          />
                        </a>
                        <div class="entry-meta">
                          <a
                            class="entry-meta meta-2"
                            href="/blog-category-grid"
                          >
                            <i class="fi-rs-heart"></i>
                          </a>
                        </div>
                      </div>
                      <div class="entry-content-2">
                        <h6 class="mb-10 font-sm">
                          <a
                            class="entry-meta text-muted"
                            href="/blog-category-grid"
                          >
                            Politic
                          </a>
                        </h6>
                        <h4 class="post-title mb-15">
                          <a href="/blog-post-right">
                            The litigants on the screen are not actors
                          </a>
                        </h4>
                        <div class="entry-meta font-xs color-grey mt-10 pb-10">
                          <div>
                            <span class="post-on mr-10">25 April 2024</span>
                            <span class="hit-count has-dot mr-10">
                              126k Views
                            </span>
                            <span class="hit-count has-dot">4 mins read</span>
                          </div>
                        </div>
                      </div>
                    </article>
                    {/* <!-- End of Individual Blog Article --> */}
                    {/* <!-- Individual Blog Articles --> */}

                    <article class="col-xl-4 col-lg-6 col-md-6 text-center hover-up mb-30 animated">
                      <div class="post-thumb">
                        <a href="/blog-post-right">
                          <img
                            class="border-radius-15"
                            src={blog5}
                            alt="nest"
                          />
                        </a>
                        <div class="entry-meta">
                          <a
                            class="entry-meta meta-2"
                            href="/blog-category-grid"
                          >
                            <i class="fi-rs-heart"></i>
                          </a>
                        </div>
                      </div>
                      <div class="entry-content-2">
                        <h6 class="mb-10 font-sm">
                          <a
                            class="entry-meta text-muted"
                            href="/blog-category-grid"
                          >
                            Politic
                          </a>
                        </h6>
                        <h4 class="post-title mb-15">
                          <a href="/blog-post-right">
                            The litigants on the screen are not actors
                          </a>
                        </h4>
                        <div class="entry-meta font-xs color-grey mt-10 pb-10">
                          <div>
                            <span class="post-on mr-10">25 April 2024</span>
                            <span class="hit-count has-dot mr-10">
                              126k Views
                            </span>
                            <span class="hit-count has-dot">4 mins read</span>
                          </div>
                        </div>
                      </div>
                    </article>
                    {/* <!-- End of Individual Blog Article --> */}
                    {/* <!-- Individual Blog Articles --> */}

                    <article class="col-xl-4 col-lg-6 col-md-6 text-center hover-up mb-30 animated">
                      <div class="post-thumb">
                        <a href="/blog-post-right">
                          <img
                            class="border-radius-15"
                            src={blog6}
                            alt="nest"
                          />
                        </a>
                        <div class="entry-meta">
                          <a
                            class="entry-meta meta-2"
                            href="/blog-category-grid"
                          >
                            <i class="fi-rs-heart"></i>
                          </a>
                        </div>
                      </div>
                      <div class="entry-content-2">
                        <h6 class="mb-10 font-sm">
                          <a
                            class="entry-meta text-muted"
                            href="/blog-category-grid"
                          >
                            Politic
                          </a>
                        </h6>
                        <h4 class="post-title mb-15">
                          <a href="/blog-post-right">
                            The litigants on the screen are not actors
                          </a>
                        </h4>
                        <div class="entry-meta font-xs color-grey mt-10 pb-10">
                          <div>
                            <span class="post-on mr-10">25 April 2024</span>
                            <span class="hit-count has-dot mr-10">
                              126k Views
                            </span>
                            <span class="hit-count has-dot">4 mins read</span>
                          </div>
                        </div>
                      </div>
                    </article>
                    {/* <!-- End of Individual Blog Article --> */}
                    {/* <!-- Individual Blog Articles --> */}

                    <article class="col-xl-4 col-lg-6 col-md-6 text-center hover-up mb-30 animated">
                      <div class="post-thumb">
                        <a href="/blog-post-right">
                          <img
                            class="border-radius-15"
                            src={blog7}
                            alt="nest"
                          />
                        </a>
                        <div class="entry-meta">
                          <a
                            class="entry-meta meta-2"
                            href="/blog-category-grid"
                          >
                            <i class="fi-rs-heart"></i>
                          </a>
                        </div>
                      </div>
                      <div class="entry-content-2">
                        <h6 class="mb-10 font-sm">
                          <a
                            class="entry-meta text-muted"
                            href="/blog-category-grid"
                          >
                            Politic
                          </a>
                        </h6>
                        <h4 class="post-title mb-15">
                          <a href="/blog-post-right">
                            The litigants on the screen are not actors
                          </a>
                        </h4>
                        <div class="entry-meta font-xs color-grey mt-10 pb-10">
                          <div>
                            <span class="post-on mr-10">25 April 2024</span>
                            <span class="hit-count has-dot mr-10">
                              126k Views
                            </span>
                            <span class="hit-count has-dot">4 mins read</span>
                          </div>
                        </div>
                      </div>
                    </article>
                    {/* <!-- End of Individual Blog Article --> */}
                    {/* <!-- Individual Blog Articles --> */}

                    <article class="col-xl-4 col-lg-6 col-md-6 text-center hover-up mb-30 animated">
                      <div class="post-thumb">
                        <a href="/blog-post-right">
                          <img
                            class="border-radius-15"
                            src={blog8}
                            alt="nest"
                          />
                        </a>
                        <div class="entry-meta">
                          <a
                            class="entry-meta meta-2"
                            href="/blog-category-grid"
                          >
                            <i class="fi-rs-heart"></i>
                          </a>
                        </div>
                      </div>
                      <div class="entry-content-2">
                        <h6 class="mb-10 font-sm">
                          <a
                            class="entry-meta text-muted"
                            href="/blog-category-grid"
                          >
                            Politic
                          </a>
                        </h6>
                        <h4 class="post-title mb-15">
                          <a href="/blog-post-right">
                            The litigants on the screen are not actors
                          </a>
                        </h4>
                        <div class="entry-meta font-xs color-grey mt-10 pb-10">
                          <div>
                            <span class="post-on mr-10">25 April 2024</span>
                            <span class="hit-count has-dot mr-10">
                              126k Views
                            </span>
                            <span class="hit-count has-dot">4 mins read</span>
                          </div>
                        </div>
                      </div>
                    </article>
                    {/* <!-- End of Individual Blog Article --> */}
                    {/* <!-- Individual Blog Articles --> */}

                    <article class="col-xl-4 col-lg-6 col-md-6 text-center hover-up mb-30 animated">
                      <div class="post-thumb">
                        <a href="/blog-post-right">
                          <img
                            class="border-radius-15"
                            src={blog9}
                            alt="nest"
                          />
                        </a>
                        <div class="entry-meta">
                          <a
                            class="entry-meta meta-2"
                            href="/blog-category-grid"
                          >
                            <i class="fi-rs-heart"></i>
                          </a>
                        </div>
                      </div>
                      <div class="entry-content-2">
                        <h6 class="mb-10 font-sm">
                          <a
                            class="entry-meta text-muted"
                            href="/blog-category-grid"
                          >
                            Politic
                          </a>
                        </h6>
                        <h4 class="post-title mb-15">
                          <a href="/blog-post-right">
                            The litigants on the screen are not actors
                          </a>
                        </h4>
                        <div class="entry-meta font-xs color-grey mt-10 pb-10">
                          <div>
                            <span class="post-on mr-10">25 April 2024</span>
                            <span class="hit-count has-dot mr-10">
                              126k Views
                            </span>
                            <span class="hit-count has-dot">4 mins read</span>
                          </div>
                        </div>
                      </div>
                    </article>
                    {/* <!-- End of Individual Blog Article --> */}
                    {/* <!-- Individual Blog Articles --> */}

                    <article class="col-xl-4 col-lg-6 col-md-6 text-center hover-up mb-30 animated">
                      <div class="post-thumb">
                        <a href="/blog-post-right">
                          <img
                            class="border-radius-15"
                            src={blog10}
                            alt="nest"
                          />
                        </a>
                        <div class="entry-meta">
                          <a
                            class="entry-meta meta-2"
                            href="/blog-category-grid"
                          >
                            <i class="fi-rs-heart"></i>
                          </a>
                        </div>
                      </div>
                      <div class="entry-content-2">
                        <h6 class="mb-10 font-sm">
                          <a
                            class="entry-meta text-muted"
                            href="/blog-category-grid"
                          >
                            Politic
                          </a>
                        </h6>
                        <h4 class="post-title mb-15">
                          <a href="/blog-post-right">
                            The litigants on the screen are not actors
                          </a>
                        </h4>
                        <div class="entry-meta font-xs color-grey mt-10 pb-10">
                          <div>
                            <span class="post-on mr-10">25 April 2024</span>
                            <span class="hit-count has-dot mr-10">
                              126k Views
                            </span>
                            <span class="hit-count has-dot">4 mins read</span>
                          </div>
                        </div>
                      </div>
                    </article>
                    {/* <!-- End of Individual Blog Article --> */}
                    {/* <!-- Individual Blog Articles --> */}

                    <article class="col-xl-4 col-lg-6 col-md-6 text-center hover-up mb-30 animated">
                      <div class="post-thumb">
                        <a href="/blog-post-right">
                          <img
                            class="border-radius-15"
                            src={blog11}
                            alt="nest"
                          />
                        </a>
                        <div class="entry-meta">
                          <a
                            class="entry-meta meta-2"
                            href="/blog-category-grid"
                          >
                            <i class="fi-rs-heart"></i>
                          </a>
                        </div>
                      </div>
                      <div class="entry-content-2">
                        <h6 class="mb-10 font-sm">
                          <a
                            class="entry-meta text-muted"
                            href="/blog-category-grid"
                          >
                            Politic
                          </a>
                        </h6>
                        <h4 class="post-title mb-15">
                          <a href="/blog-post-right">
                            The litigants on the screen are not actors
                          </a>
                        </h4>
                        <div class="entry-meta font-xs color-grey mt-10 pb-10">
                          <div>
                            <span class="post-on mr-10">25 April 2024</span>
                            <span class="hit-count has-dot mr-10">
                              126k Views
                            </span>
                            <span class="hit-count has-dot">4 mins read</span>
                          </div>
                        </div>
                      </div>
                    </article>
                    {/* <!-- End of Individual Blog Article --> */}
                    {/* <!-- Individual Blog Articles --> */}

                    <article class="col-xl-4 col-lg-6 col-md-6 text-center hover-up mb-30 animated">
                      <div class="post-thumb">
                        <a href="/blog-post-right">
                          <img
                            class="border-radius-15"
                            src={blog12}
                            alt="nest"
                          />
                        </a>
                        <div class="entry-meta">
                          <a
                            class="entry-meta meta-2"
                            href="/blog-category-grid"
                          >
                            <i class="fi-rs-heart"></i>
                          </a>
                        </div>
                      </div>
                      <div class="entry-content-2">
                        <h6 class="mb-10 font-sm">
                          <a
                            class="entry-meta text-muted"
                            href="/blog-category-grid"
                          >
                            Politic
                          </a>
                        </h6>
                        <h4 class="post-title mb-15">
                          <a href="/blog-post-right">
                            The litigants on the screen are not actors
                          </a>
                        </h4>
                        <div class="entry-meta font-xs color-grey mt-10 pb-10">
                          <div>
                            <span class="post-on mr-10">25 April 2024</span>
                            <span class="hit-count has-dot mr-10">
                              126k Views
                            </span>
                            <span class="hit-count has-dot">4 mins read</span>
                          </div>
                        </div>
                      </div>
                    </article>
                    {/* <!-- End of Individual Blog Article --> */}
                  </div>
                </div>

                <div class="pagination-area mt-15 mb-sm-5 mb-lg-0">
                  <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-start">
                      <li class="page-item">
                        <a class="page-link" href="#">
                          <i class="fi-rs-arrow-small-left"></i>
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li class="page-item active">
                        <a class="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link dot" href="#">
                          ...
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          6
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          <i class="fi-rs-arrow-small-right"></i>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              <div className="col-3">
                <div className="widget-area">
                  <div className="sidebar-widget-2 widget_search mb-50">
                    <div className="search-form">
                      <form action="#">
                        <input
                          type="text"
                          placeholder="Search…"
                          fdprocessedid="tbqh4r"
                        />
                        <button type="submit" fdprocessedid="vv5wy8">
                          <i class="bx bx-search"></i>
                        </button>
                      </form>
                    </div>
                  </div>

                  <div className="sidebar-widget widget-category-2 mb-50">
                    <h5 class="section-title style-1 mb-30">Category</h5>
                    <ul>
                      <li>
                        <a href="/products">
                          <img src={comp} alt="nest" />
                          Milks &amp; Dairies
                        </a>
                        <span class="count">30</span>
                      </li>
                      <li>
                        <a href="/products">
                          {" "}
                          <img src={comp2} alt="nest" />
                          Clothing
                        </a>
                        <span class="count">35</span>
                      </li>
                      <li>
                        <a href="/products">
                          {" "}
                          <img src={comp3} alt="nest" />
                          Pet Foods
                        </a>
                        <span class="count">42</span>
                      </li>
                      <li>
                        <a href="/products">
                          {" "}
                          <img src={comp4} alt="nest" />
                          Baking material
                        </a>
                        <span class="count">68</span>
                      </li>
                      <li>
                        <a href="/products">
                          {" "}
                          <img src={comp5} alt="nest" />
                          Fresh Fruit
                        </a>
                        <span class="count">87</span>
                      </li>
                    </ul>
                  </div>
                  <div className="sidebar-widget product-sidebar mb-50 p-30 bg-grey border-radius-10">
                    <h5 class="section-title style-1 mb-30">Trending Now</h5>
                    <div class="single-post clearfix">
                      <div class="image">
                        <img src={icon1} alt="#" />
                      </div>
                      <div class="content pt-10">
                        <h5>
                          <a href="/products/seeds-of-change-organic-quinoe">
                            Chen Cardigan
                          </a>
                        </h5>
                        <p class="price mb-0 mt-5">$99.50</p>
                        <div class="product-rate">
                          <div class="product-rating" style={{ width: '60%' }}></div>
                        </div>
                      </div>
                    </div>
                    {/* div end */}
                    <div class="single-post clearfix">
                      <div class="image">
                        <img src={icon2} alt="#" />
                      </div>
                      <div class="content pt-10">
                        <h6>
                          <a href="/products/seeds-of-change-organic-quinoe">
                            Chen Sweater
                          </a>
                        </h6>
                        <p class="price mb-0 mt-5">$89.50</p>
                        <div class="product-rate">
                          <div class="product-rating" style={{ width: '60%' }}></div>
                        </div>
                      </div>
                    </div>

                    <div class="single-post clearfix">
                      <div class="image">
                        <img src={icon3} alt="#" />
                      </div>
                      <div class="content pt-10">
                        <h6>
                          <a href="/products/seeds-of-change-organic-quinoe">
                            Colorful Jacket
                          </a>
                        </h6>
                        <p class="price mb-0 mt-5">$25</p>
                        <div class="product-rate">
                          <div class="product-rating" style={{ width: '60%' }}></div>
                        </div>
                      </div>
                    </div>
                    <div class="single-post clearfix">
                      <div class="image">
                        <img src={icon4} alt="#" />
                      </div>
                      <div class="content pt-10">
                        <h6>
                          <a href="/products/seeds-of-change-organic-quinoe">
                            Lorem, ipsum
                          </a>
                        </h6>
                        <p class="price mb-0 mt-5">$25</p>
                        <div class="product-rate">
                          <div class="product-rating" style={{ width: '60%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sidebar-widget widget_instagram mb-50">
                  <h5 className="section-title style-1 mb-30">Gallery</h5>
                  <div className="instagram-gellay">
                  <ul className="insta-feed">
                  <li><a href="/blog-category-grid#"><img className="border-radius-5" src={icon5} alt="nest"/></a></li>
                  <li><a href="/blog-category-grid#"><img className="border-radius-5" src={icon6} alt="nest"/></a></li>
                  <li><a href="/blog-category-grid#"><img className="border-radius-5" src={icon1} alt="nest"/></a></li>
                  <li><a href="/blog-category-grid#"><img className="border-radius-5" src={icon2} alt="nest"/></a></li>
                  <li><a href="/blog-category-grid#"><img className="border-radius-5" src={icon3} alt="nest"/></a></li>
                  <li><a href="/blog-category-grid#"><img className="border-radius-5" src={icon4} alt="nest"/></a></li>
                  </ul>


                  </div>
                  </div>
                  <div className="sidebar-widget widget-tags mb-50 pb-10">
                  <h5 className="section-title style-1 mb-30">Popular Tags</h5>
                  <ul className="tags-list">
                  <li className="hover-up"><a href="/blog-category-grid"><i class='bx bx-x mr-10' ></i>Cabbage</a></li>
                  <li className="hover-up"><a href="/blog-category-grid"><i class='bx bx-x mr-10' ></i>Broccoli</a>
                  </li><li class="hover-up"><a href="/blog-category-grid"><i class='bx bx-x mr-10' ></i>Smoothie</a></li>
                  <li className="hover-up"><a href="/blog-category-grid"><i class='bx bx-x mr-10' ></i>Fruit</a></li>
                  <li className="hover-up mr-0"><a href="/blog-category-grid"><i class='bx bx-x mr-10' ></i>Salad</a></li>
                  <li className="hover-up mr-0"><a href="/blog-category-grid"><i class='bx bx-x mr-10' ></i>Appetizer</a></li>
                  </ul>
                  </div>
                  <div className="banner-img wow fadeIn mb-50 animated d-lg-block d-none">
                  <img src={banner11} alt="nest"></img>
                  <div className="banner-text"><span>Oganic</span><h4>Save 17% <br/>on <span className="text-brand">Oganic</span><br/>Juice</h4></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
