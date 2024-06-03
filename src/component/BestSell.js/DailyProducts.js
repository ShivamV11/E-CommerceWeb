/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Slider from "react-slick";
import "./DailyProducts.css";
import Product1 from "../../Assets/Products/product-1-1.jpg";
import Product2 from "../../Assets/Products/product-2-1.jpg";
import Product3 from "../../Assets/Products/product-3-1.jpg";
import Product4 from "../../Assets/Products/product-4-1.jpg";
import Product5 from "../../Assets/Products/product-5-1.jpg";
import Product6 from "../../Assets/Products/product-6-1.jpg";
import Product7 from "../../Assets/Products/product-7-1.jpg";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


function DailyProducts() {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,


        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
      };
  return (
    <>
      <section class="section-padding pb-5">
        <div class="container-fluid">
          <div class="section-title wow animate__animated animate__fadeIn">
            <div class="left-side">
              <h3 class="">Daily Best Sells</h3>
            </div>
            <div class="right-side">
              <ul class="nav ">
                <li>Featured</li>
                <li>Popular</li>
                <li>Added</li>
              </ul>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-3 d-none d-lg-flex wow animate__animated animate__fadeIn">
              <div class="banner-img style-2">
                <div class="banner-text">
                  <h2 class="mb-100">Bring nature into your home</h2>
                  <a class="button btn-xs" href="/products">
                    Shop Now <i class="fi-rs-arrow-small-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-9 col-md-12 Productcol">
              <div class="row row-width">
              <Slider {...settings}>
                <div class="col ">
                  <div class="product-cart-wrap mb-30">
                    <div class="product-img-action-wrap">
                      <img class="img-product" src={Product1} alt="p1" />
                      <div class="product-badges product-badges-position product-badges-mrg">
                        <span class="new">New</span>
                      </div>
                    </div>
                    <div class="product-content-wrap">
                      <div class="product-category">
                        <p>armani</p>
                      </div>
                      <h2>All Natural Italian-Style Chicken Meatballs</h2>
                      <div class="product-rate d-inline-block">
                        <div
                          class="product-rating"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                      <div class="product-price mt-10">
                        <span>$78 </span>
                        <span class="old-price"></span>
                      </div>

                      <div class="sold mt-15 mb-15">
                        <div class="progress mb-5">
                          <div
                            class="progress-bar"
                            role="progressbar"
                            style={{ width: "50%" }}
                          ></div>
                        </div>
                        <span class="font-xs text-heading">
                          {" "}
                          Sold: 90/120
                        </span>
                      </div>

                      <a class="btn w-100 hover-up">
                        <span cart-icon >
                          
                        <FontAwesomeIcon icon={faCartShopping} />

                        </span>
                        Add To Cart
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col">
                <div class="product-cart-wrap mb-30">
                    <div class="product-img-action-wrap">
                      <img class="img-product" src={Product2} alt="p1" />
                      <div class="product-badges product-badges-position product-badges-mrg">
                        <span class="hot">Hot</span>
                      </div>
                    </div>
                    <div class="product-content-wrap">
                      <div class="product-category">
                        <p>armani</p>
                      </div>
                      <h2>All Natural Italian-Style Chicken Meatballs</h2>
                      <div class="product-rate d-inline-block">
                        <div
                          class="product-rating"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                      <div class="product-price mt-10">
                        <span>$78 </span>
                        <span class="old-price"></span>
                      </div>

                      <div class="sold mt-15 mb-15">
                        <div class="progress mb-5">
                          <div
                            class="progress-bar"
                            role="progressbar"
                            style={{ width: "50%" }}
                          ></div>
                        </div>
                        <span class="font-xs text-heading">
                          {" "}
                          Sold: 90/120
                        </span>
                      </div>

                      <a class="btn w-100 hover-up">
                        <span class="icon">
                        <FontAwesomeIcon icon={faCartShopping} />
                        </span>
                        Add To Cart
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col">
                <div class="product-cart-wrap mb-30">
                    <div class="product-img-action-wrap">
                      <img class="img-product" src={Product3} alt="p1" />
                      <div class="product-badges product-badges-position product-badges-mrg">
                        <span class="new">New</span>
                      </div>
                    </div>
                    <div class="product-content-wrap">
                      <div class="product-category">
                        <p>armani</p>
                      </div>
                      <h2>All Natural Italian-Style Chicken Meatballs</h2>
                      <div class="product-rate d-inline-block">
                        <div
                          class="product-rating"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                      <div class="product-price mt-10">
                        <span>$78 </span>
                        <span class="old-price"></span>
                      </div>

                      <div class="sold mt-15 mb-15">
                        <div class="progress mb-5">
                          <div
                            class="progress-bar"
                            role="progressbar"
                            style={{ width: "50%" }}
                          ></div>
                        </div>
                        <span class="font-xs text-heading">
                          {" "}
                          Sold: 90/120
                        </span>
                      </div>

                      <a class="btn w-100 hover-up">
                        <span class="icon">
                        <FontAwesomeIcon icon={faCartShopping} />
                        </span>
                        Add To Cart
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col">
                <div class="product-cart-wrap mb-30">
                    <div class="product-img-action-wrap">
                      <img class="img-product" src={Product4} alt="p1" />
                      <div class="product-badges product-badges-position product-badges-mrg">
                        <span class="new">New</span>
                      </div>
                    </div>
                    <div class="product-content-wrap">
                      <div class="product-category">
                        <p>armani</p>
                      </div>
                      <h2>All Natural Italian-Style Chicken Meatballs</h2>
                      <div class="product-rate d-inline-block">
                        <div
                          class="product-rating"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                      <div class="product-price mt-10">
                        <span>$78 </span>
                        <span class="old-price"></span>
                      </div>

                      <div class="sold mt-15 mb-15">
                        <div class="progress mb-5">
                          <div
                            class="progress-bar"
                            role="progressbar"
                            style={{ width: "50%" }}
                          ></div>
                        </div>
                        <span class="font-xs text-heading">
                          {" "}
                          Sold: 90/120
                        </span>
                      </div>

                      <a class="btn w-100 hover-up">
                        <span class="icon">
                        <FontAwesomeIcon icon={faCartShopping} />
                        </span>
                        Add To Cart
                      </a>
                    </div>
                  </div>
                </div>
              

              <div class="col ">
                  <div class="product-cart-wrap mb-30">
                    <div class="product-img-action-wrap">
                      <img class="img-product" src={Product5} alt="p1" />
                      <div class="product-badges product-badges-position product-badges-mrg">
                        <span class="new">New</span>
                      </div>
                    </div>
                    <div class="product-content-wrap">
                      <div class="product-category">
                        <p>armani</p>
                      </div>
                      <h2>All Natural Italian-Style Chicken Meatballs</h2>
                      <div class="product-rate d-inline-block">
                        <div
                          class="product-rating"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                      <div class="product-price mt-10">
                        <span>$78 </span>
                        <span class="old-price"></span>
                      </div>

                      <div class="sold mt-15 mb-15">
                        <div class="progress mb-5">
                          <div
                            class="progress-bar"
                            role="progressbar"
                            style={{ width: "50%" }}
                          ></div>
                        </div>
                        <span class="font-xs text-heading">
                          {" "}
                          Sold: 90/120
                        </span>
                      </div>

                      <a class="btn w-100 hover-up">
                        <span class="icon">
                        <FontAwesomeIcon icon={faCartShopping} />
                        </span>
                        Add To Cart
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col ">
                  <div class="product-cart-wrap mb-30">
                    <div class="product-img-action-wrap">
                      <img class="img-product" src={Product6} alt="p1" />
                      <div class="product-badges product-badges-position product-badges-mrg">
                        <span class="new">New</span>
                      </div>
                    </div>
                    <div class="product-content-wrap">
                      <div class="product-category">
                        <p>armani</p>
                      </div>
                      <h2>All Natural Italian-Style Chicken Meatballs</h2>
                      <div class="product-rate d-inline-block">
                        <div
                          class="product-rating"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                      <div class="product-price mt-10">
                        <span>$78 </span>
                        <span class="old-price"></span>
                      </div>

                      <div class="sold mt-15 mb-15">
                        <div class="progress mb-5">
                          <div
                            class="progress-bar"
                            role="progressbar"
                            style={{ width: "50%" }}
                          ></div>
                        </div>
                        <span class="font-xs text-heading">
                          {" "}
                          Sold: 90/120
                        </span>
                      </div>

                      <a class="btn w-100 hover-up">
                        <span class="icon">
                        <FontAwesomeIcon icon={faCartShopping} />
                        </span>
                        Add To Cart
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col ">
                  <div class="product-cart-wrap mb-30">
                    <div class="product-img-action-wrap">
                      <img class="img-product" src={Product7} alt="p1" />
                      <div class="product-badges product-badges-position product-badges-mrg">
                        <span class="new">New</span>
                      </div>
                    </div>
                    <div class="product-content-wrap">
                      <div class="product-category">
                        <p>armani</p>
                      </div>
                      <h2>All Natural Italian-Style Chicken Meatballs</h2>
                      <div class="product-rate d-inline-block">
                        <div
                          class="product-rating"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                      <div class="product-price mt-10">
                        <span>$78 </span>
                        <span class="old-price"></span>
                      </div>

                      <div class="sold mt-15 mb-15">
                        <div class="progress mb-5">
                          <div
                            class="progress-bar"
                            role="progressbar"
                            style={{ width: "50%" }}
                          ></div>
                        </div>
                        <span class="font-xs text-heading">
                          {" "}
                          Sold: 90/120
                        </span>
                      </div>

                      <a class="btn w-100 hover-up">
                        <span class="icon">
                        <FontAwesomeIcon icon={faCartShopping} />
                        </span>
                        Add To Cart
                      </a>
                    </div>
                  </div>
                  
                </div>
                </Slider>
                {/* products end here */}
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DailyProducts;
