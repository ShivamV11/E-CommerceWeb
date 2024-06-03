/* eslint-disable react/style-prop-object */
import React from "react";
import "./Vendors.css";
import vendor1 from "./img/vendor-1.png";
import vendor2 from "./img/vendor-2.png";
import vendor3 from "./img/vendor-3.png";
import vendor4 from "./img/vendor-4.png";
import icon1 from "./img/icon-contact.svg";
import icon2 from "./img/icon-location.svg";
import MainHeader from "../Header/MainHeader";
import Footer from "../Footer/Footer";



const cardData = [
  {
    id: 1,
    vendorImg: vendor1,
    vendorName: "Car Toys",
    sinceYear: "Since 2012",
    rating: 4.0,
    totalProducts: 380,
    address: "5171 W Campbell Ave undefined Kent, Utah 53127 United States",
    phoneNumber: "(+91) - 540-025-124553",
    link: "/vendor/1",
  },
  {
    id: 1,
    vendorImg: vendor2,
    vendorName: "Car Toys",
    sinceYear: "Since 2012",
    rating: 4.0,
    totalProducts: 380,
    address: "5171 W Campbell Ave undefined Kent, Utah 53127 United States",
    phoneNumber: "(+91) - 540-025-124553",
    link: "/vendor/1",
  },
  {
    id: 1,
    vendorImg: vendor3,
    vendorName: "Car Toys",
    sinceYear: "Since 2012",
    rating: 4.0,
    totalProducts: 380,
    address: "5171 W Campbell Ave undefined Kent, Utah 53127 United States",
    phoneNumber: "(+91) - 540-025-124553",
    link: "/vendor/1",
  },
  {
    id: 1,
    vendorImg: vendor4,
    vendorName: "Car Toys",
    sinceYear: "Since 2012",
    rating: 4.0,
    totalProducts: 380,
    address: "5171 W Campbell Ave undefined Kent, Utah 53127 United States",
    phoneNumber: "(+91) - 540-025-124553",
    link: "/vendor/1",
  },
  // Add more objects for additional cards as needed
  {
    id: 1,
    vendorImg: vendor1,
    vendorName: "Car Toys",
    sinceYear: "Since 2012",
    rating: 4.0,
    totalProducts: 380,
    address: "5171 W Campbell Ave undefined Kent, Utah 53127 United States",
    phoneNumber: "(+91) - 540-025-124553",
    link: "/vendor/1",
  },
  {
    id: 1,
    vendorImg: vendor2,
    vendorName: "Car Toys",
    sinceYear: "Since 2012",
    rating: 4.0,
    totalProducts: 380,
    address: "5171 W Campbell Ave undefined Kent, Utah 53127 United States",
    phoneNumber: "(+91) - 540-025-124553",
    link: "/vendor/1",
  },
  {
    id: 4,
    vendorImg: vendor2,
    vendorName: "Car Toys",
    sinceYear: "Since 2012",
    rating: 4.0,
    totalProducts: 380,
    address: "5171 W Campbell Ave undefined Kent, Utah 53127 United States",
    phoneNumber: "(+91) - 540-025-124553",
    link: "/vendor/1",
  },
  {
    id: 1,
    vendorImg: vendor3,
    vendorName: "Car Toys",
    sinceYear: "Since 2012",
    rating: 4.0,
    totalProducts: 380,
    address: "5171 W Campbell Ave undefined Kent, Utah 53127 United States",
    phoneNumber: "(+91) - 540-025-124553",
    link: "/vendor/1",
  },
  // Add more objects for additional cards as needed
];

function Vendors() {
  return (
    <>
    <MainHeader/>
     
      <div className="container fluid">
        <div className="page-header breadcrumb-wrap undefined">
          <div className="container">
            <div className="breadcrumb">
              <a href="/">Home</a>
            </div>
          </div>
        </div>
      </div>
      <div className="page-content pt-50">
        <div className="container">
          <div className="archive-header-2 text-center">
            <h1 class="display-2 mb-50">Vendors List</h1>
            <div className="row">
              <div class="col-lg-5 mx-auto">
                <div class="sidebar-widget-2 widget_search mb-50">
                  <div class="search-form">
                    <form action="#">
                      <input
                        type="text"
                        placeholder="Search vendors (by name or ID)..."
                      />
                      <button type="submit">
                        <i class="fi-rs-search"></i>
                      </button>
                    </form>
                  </div>
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
                        We have <strong class="text-brand">780</strong> vendors
                        now
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

        <div className="row vendor-grid">
          {/* second card */}

          <div className="row">
            {cardData.map((card) => (
              <div
                key={card.id}
                className="col-lg-3 col-md-6 col-12 col-sm-6 mb-50"
              >
                <div className="vendor-wrap mb-40">
                  <div className="vendor-img-action-wrap">
                    <div className="vendor-img"></div>
                    <a href={card.link}>
                      <img
                        className="default-img"
                        src={card.vendorImg}
                        alt="nest"
                      />
                    </a>
                  </div>
                  <div className="product-badges product-badges-position product-badges-mrg">
                    <span className="hot">Mall</span>
                  </div>
                </div>
                <div className="vendor-content-wrap">
                  <div className="d-flex justify-content-between align-items-end mb-30">
                    <div>
                      <div className="product-category">
                        <span className="text-muted">{card.sinceYear}</span>
                      </div>
                      <h4 className="mb-5">
                        <a href={card.link}>{card.vendorName}</a>
                      </h4>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div
                            className="product-rating"
                            style={{
                              backgroundColor: "#ffc107",
                              height: "10px",
                            }}
                          ></div>
                        </div>
                        <span className="font-small ml-5 text-muted">
                          {" "}
                          ({card.rating})
                        </span>
                      </div>
                    </div>
                    <div className="mb-10">
                      <span className="font-small total-product">
                        {card.totalProducts} products
                      </span>
                    </div>
                  </div>
                  <div className="vendor-info mb-30">
                    <ul className="contact-infor text-muted">
                      <li>
                        <img src={icon2} alt="nest" />
                        <strong>Address: </strong>
                        <span>{card.address}</span>
                      </li>
                      <li>
                        <img src={icon1} alt="nest" />
                        <strong>Call Us:</strong>
                        <span>{card.phoneNumber}</span>
                      </li>
                    </ul>
                  </div>
                  <a className="btn btn-xs visit" href={card.link}>
                    Visit Store <i class='bx bx-right-arrow-alt'></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer/>

     
    </>
  );
}

export default Vendors;
