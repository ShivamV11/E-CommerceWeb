import React from "react";
import "./TopSelling.css";
import Product1 from '../../Assets/Products/product-1-1.jpg'
import Product2 from '../../Assets/Products/product-2-1.jpg'
import Product3 from '../../Assets/Products/product-3-1.jpg'
import Col1 from "./Col1";
import Col2 from "./Col2";
import Col3 from "./Col3";


function TopSelling() {
  return (
    <>
      <div className="section-padding mb-30">
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0 wow animate__animated animate__fadeInUp"
              data-wow-delay="0"
            >
              <h4 class="section-title style-1 mb-30  animated animated">
                Top Selling
              </h4>
              <div className="product-list-small  animated animated">
                <article class="row align-items-center hover-up">
                  <figure class="col-md-4 mb-0">
                    <a href="/products/all-natural-italian-style-chicken-meatballs">
                      <img
                        src={Product1}
                        alt="nest"
                      />
                    </a>
                  </figure>
                  <div class="col-md-8 mb-0">
                    <h6>
                      <a href="/products/all-natural-italian-style-chicken-meatballs">
                        All Natural Italian-Style Chicken Meatballs
                      </a>
                    </h6>
                    <div class="product-rate-cover">
                      <div class="product-rate d-inline-block">
                        <div
                          class="product-rating"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                      <span class="font-small ml-5 text-muted"> (4.0)</span>
                    </div>
                    <div class="product-price">
                      <span>$73 </span>
                      <span class="old-price"></span>
                    </div>
                  </div>
                </article>

                {/* second block */}
                <article class="row align-items-center hover-up">
                  <figure class="col-md-4 mb-0">
                    <a href="/products/all-natural-italian-style-chicken-meatballs">
                      <img
                        src={Product2}
                        alt="nest"
                      />
                    </a>
                  </figure>
                  <div class="col-md-8 mb-0">
                    <h6>
                      <a href="/products/all-natural-italian-style-chicken-meatballs">
                        All Natural Italian-Style Chicken Meatballs
                      </a>
                    </h6>
                    <div class="product-rate-cover">
                      <div class="product-rate d-inline-block">
                        <div
                          class="product-rating"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                      <span class="font-small ml-5 text-muted"> (4.0)</span>
                    </div>
                    <div class="product-price">
                      <span>$73 </span>
                      <span class="old-price"></span>
                    </div>
                  </div>
                </article>
                 {/* third block */}
                 <article class="row align-items-center hover-up">
                  <figure class="col-md-4 mb-0">
                    <a href="/products/all-natural-italian-style-chicken-meatballs">
                      <img
                        src={Product3}
                        alt="nest"
                      />
                    </a>
                  </figure>
                  <div class="col-md-8 mb-0">
                    <h6>
                      <a href="/products/all-natural-italian-style-chicken-meatballs">
                        All Natural Italian-Style Chicken Meatballs
                      </a>
                    </h6>
                    <div class="product-rate-cover">
                      <div class="product-rate d-inline-block">
                        <div
                          class="product-rating"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                      <span class="font-small ml-5 text-muted"> (4.0)</span>
                    </div>
                    <div class="product-price">
                      <span>$73 </span>
                      <span class="old-price"></span>
                    </div>
                  </div>
                </article>
                {/* block ends here */}


              </div>
             
             

            </div>

             {/* second article */}

            <div
              className="col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0 wow animate__animated animate__fadeInUp"
              data-wow-delay="0"
            >
           
            <Col1/>
            </div>
             
            <div
              className="col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0 wow animate__animated animate__fadeInUp"
              data-wow-delay="0"
            >
            <Col2/>
            </div>

            <div
              className="col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0 wow animate__animated animate__fadeInUp"
              data-wow-delay="0"
            >
            <Col3/>
            </div>


          </div>
        </div>
      </div>
    </>
  );
}

export default TopSelling;
