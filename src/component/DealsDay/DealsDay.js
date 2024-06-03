/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./DealsDay.css";
import Banner5 from '../../Assets/DealsBanner/banner-5.png'
import Banner6 from '../../Assets/DealsBanner/banner-6.png'
import Banner8 from '../../Assets/DealsBanner/banner-8.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
function DealsDay() {
  return (
    <>
      <section className="section-padding pb-5">
        {/* Header */}
        <div className="container-fluid">
          <div className="section-title wow animate__animated animate__fadeIn">
            <div className="left-side">
              <h3 className="">Deals Of The Day</h3>
            </div>
            <div className="right-side">
              <ul className="nav ">
                <li>All Deals</li>
              </ul>
            </div>
          </div>
          {/* Header */}

          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="product-cart-wrap style-2 wow animate__animated animate__fadeInUp">
                <div className="product-img-action-wrap">
                  <div className="product-img">
                    <a href="/products">
                      <img src={Banner5} alt="nest" />
                    </a>
                  </div>
                </div>

                <div className="product-content-wrap">
                  <div className="deals-countdown-wrap">
                    <div className="deals-countdown  pl-5">
                      <span class="countdown-section">
                        <span className="countdown-amount hover-up">237</span>
                        <span className="countdown-period"> days </span>
                      </span>
                      <span className="countdown-section">
                        <span className="countdown-amount hover-up">6</span>
                        <span className="countdown-period"> hours </span>
                      </span>
                      <span className="countdown-section">
                        <span className="countdown-amount hover-up">48</span>
                        <span className="countdown-period"> mins </span>
                      </span>
                      <span className="countdown-section">
                        <span className="countdown-amount hover-up">54</span>
                        <span className="countdown-period"> sec </span>
                      </span>
                    </div>
                  </div>

                  <div className="deals-content">
                    <h2>
                      <a href="/products/seeds-of-change-organic-quinoe">
                        Seeds of Change Organic Quinoa, Brown
                      </a>
                    </h2>
                    <div className="product-rate-cover">
                      <div className="product-rate d-inline-block">
                        <div
                          class="product-rating"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                      <span class="font-small ml-5 text-muted"> (4.0)</span>
                    </div>

                    <div><span className="font-small text-muted">By <a href="/vendor/1">NestFood</a></span></div>
                    <div className="product-card-bottom">
                    <div class="product-price"><span>$238.85</span><span class="old-price">$ 245.8</span></div>
                    <div className="add-cart">
  <a className="add">
    <i><FontAwesomeIcon icon={faCartShopping} /></i> Add
  </a>
</div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="product-cart-wrap style-2 wow animate__animated animate__fadeInUp">
                <div className="product-img-action-wrap">
                  <div className="product-img">
                    <a href="/products">
                      <img src={Banner6} alt="nest" />
                    </a>
                  </div>
                </div>

                <div className="product-content-wrap">
                  <div className="deals-countdown-wrap">
                    <div className="deals-countdown  pl-5">
                      <span class="countdown-section">
                        <span className="countdown-amount hover-up">237</span>
                        <span className="countdown-period"> days </span>
                      </span>
                      <span className="countdown-section">
                        <span className="countdown-amount hover-up">6</span>
                        <span className="countdown-period"> hours </span>
                      </span>
                      <span className="countdown-section">
                        <span className="countdown-amount hover-up">48</span>
                        <span className="countdown-period"> mins </span>
                      </span>
                      <span className="countdown-section">
                        <span className="countdown-amount hover-up">54</span>
                        <span className="countdown-period"> sec </span>
                      </span>
                    </div>
                  </div>

                  <div className="deals-content">
                    <h2>
                      <a href="/products/seeds-of-change-organic-quinoe">
                        Seeds of Change Organic Quinoa, Brown
                      </a>
                    </h2>
                    <div className="product-rate-cover">
                      <div className="product-rate d-inline-block">
                        <div
                          class="product-rating"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                      <span class="font-small ml-5 text-muted"> (4.0)</span>
                    </div>

                    <div><span className="font-small text-muted">By <a href="/vendor/1">NestFood</a></span></div>
                    <div className="product-card-bottom">
                    <div class="product-price"><span>$238.85</span><span class="old-price">$ 245.8</span></div>
                    <div className="add-cart">
  <a className="add">
    <i><FontAwesomeIcon icon={faCartShopping} /></i> Add
  </a>
</div>

                    </div>
                  </div>
                </div>
              </div>


            </div>

            <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="product-cart-wrap style-2 wow animate__animated animate__fadeInUp">
                <div className="product-img-action-wrap">
                  <div className="product-img">
                    <a href="/products">
                      <img src={Banner8} alt="nest" />
                    </a>
                  </div>
                </div>

                <div className="product-content-wrap">
                  <div className="deals-countdown-wrap">
                    <div className="deals-countdown  pl-5">
                      <span class="countdown-section">
                        <span className="countdown-amount hover-up">237</span>
                        <span className="countdown-period"> days </span>
                      </span>
                      <span className="countdown-section">
                        <span className="countdown-amount hover-up">6</span>
                        <span className="countdown-period"> hours </span>
                      </span>
                      <span className="countdown-section">
                        <span className="countdown-amount hover-up">48</span>
                        <span className="countdown-period"> mins </span>
                      </span>
                      <span className="countdown-section">
                        <span className="countdown-amount hover-up">54</span>
                        <span className="countdown-period"> sec </span>
                      </span>
                    </div>
                  </div>

                  <div className="deals-content">
                    <h2>
                      <a href="/products/seeds-of-change-organic-quinoe">
                        Seeds of Change Organic Quinoa, Brown
                      </a>
                    </h2>
                    <div className="product-rate-cover">
                      <div className="product-rate d-inline-block">
                        <div
                          class="product-rating"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                      <span class="font-small ml-5 text-muted"> (4.0)</span>
                    </div>

                    <div><span className="font-small text-muted">By <a href="/vendor/1">NestFood</a></span></div>
                    <div className="product-card-bottom">
                    <div class="product-price"><span>$238.85</span><span class="old-price">$ 245.8</span></div>
                    <div className="add-cart">
  <a className="add">
    <i><FontAwesomeIcon icon={faCartShopping} /></i> Add
  </a>
</div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="product-cart-wrap style-2 wow animate__animated animate__fadeInUp">
                <div className="product-img-action-wrap">
                  <div className="product-img">
                    <a href="/products">
                      <img src={Banner8} alt="nest" />
                    </a>
                  </div>
                </div>

                <div className="product-content-wrap">
                  <div className="deals-countdown-wrap">
                    <div className="deals-countdown  pl-5">
                      <span class="countdown-section">
                        <span className="countdown-amount hover-up">237</span>
                        <span className="countdown-period"> days </span>
                      </span>
                      <span className="countdown-section">
                        <span className="countdown-amount hover-up">6</span>
                        <span className="countdown-period"> hours </span>
                      </span>
                      <span className="countdown-section">
                        <span className="countdown-amount hover-up">48</span>
                        <span className="countdown-period"> mins </span>
                      </span>
                      <span className="countdown-section">
                        <span className="countdown-amount hover-up">54</span>
                        <span className="countdown-period"> sec </span>
                      </span>
                    </div>
                  </div>

                  <div className="deals-content">
                    <h2>
                      <a href="/products/seeds-of-change-organic-quinoe">
                        Seeds of Change Organic Quinoa, Brown
                      </a>
                    </h2>
                    <div className="product-rate-cover">
                      <div className="product-rate d-inline-block">
                        <div
                          class="product-rating"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                      <span class="font-small ml-5 text-muted"> (4.0)</span>
                    </div>

                    <div><span className="font-small text-muted">By <a href="/vendor/1">NestFood</a></span></div>
                    <div className="product-card-bottom">
                    <div class="product-price"><span>$238.85</span><span class="old-price">$ 245.8</span></div>
                    <div className="add-cart">
  <a className="add">
    <i><FontAwesomeIcon icon={faCartShopping} /></i> Add
  </a>
</div>

                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DealsDay;
