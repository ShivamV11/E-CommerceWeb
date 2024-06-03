/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Body.css";

import shop1 from "./Img/category-1.svg";
import Fill from "./Fill";
import product1 from '../../Assets/Products/product-1-1.jpg'

// import List from "../Popular Products/Product";
import Sidebanner from "./Sidebanner";

const products = [
  {
    id: 1,
    name: "Armani Seeds of Change Organic Quinoa, Brown",
    image: product1,
    price: 65.8,
  },
  {
    id: 2,
    name: "Armani Seeds of Change Organic Quinoa, Brown",
    image: product1,
    price: 235.8,
  },
  {
    id: 2,
    name: "Armani Seeds of Change Organic Quinoa, Brown",
    image: product1,
    price: 235.8,
  },
  {
    id: 2,
    name: "Armani Seeds of Change Organic Quinoa, Brown",
    image: product1,
    price: 235.8,
  },
  {
    id: 2,
    name: "Armani Seeds of Change Organic Quinoa, Brown",
    image: product1,
    price: 235.8,
  },
  {
    id: 2,
    name: "Armani Seeds of Change Organic Quinoa, Brown",
    image: product1,
    price: 235.8,
  },
  {
    id: 2,
    name: "Armani Seeds of Change Organic Quinoa, Brown",
    image: product1,
    price: 235.8,
  },
  {
    id: 2,
    name: "Armani Seeds of Change Organic Quinoa, Brown",
    image: product1,
    price: 235.8,
  },
  {
    id: 2,
    name: "Armani Seeds of Change Organic Quinoa, Brown",
    image: product1,
    price: 235.8,
  },
  {
    id: 2,
    name: "Armani Seeds of Change Organic Quinoa, Brown",
    image: product1,
    price: 235.8,
  },
  {
    id: 2,
    name: "Armani Seeds of Change Organic Quinoa, Brown",
    image: product1,
    price: 235.8,
  },
  {
    id: 2,
    name: "Armani Seeds of Change Organic Quinoa, Brown",
    image: product1,
    price: 235.8,
  },
  // Add more product objects as needed
];

const Body = () => {
    const renderProductCards = () => {
        return products.map((product) => (
          <div className="col-md-3 col-sm-6" key={product.id}>
            <div className="product">
              <img
                className="default"
                src={product.image}
                alt={product.name}
              />
              <h3>{product.name}</h3>
              <p>(90) By NestFood</p>
              <p>${product.price}</p>
              <button>Add</button>
            </div>
          </div>
        ));
      };
    
  return (
    <section className="mt-50 mb-50">
      <div className="container-fluid">
        <div className="row flex-row-reverse">
          <div className="col-3 primary-sidebar sticky-sidebar">
            <div class="sidebar-widget widget-category-2 mb-30">
              <h5 class="section-title style-1 mb-30">Category</h5>
              <ul>
                <li>
                  <a>All</a>
                </li>
                <li>
                  <a>
                    <img src={shop1} alt="Logo" className="logo" />
                    Milks &amp; Dairies
                  </a>
                  <span class="count">30</span>
                </li>
                <li>
                  <a>
                    <img src={shop1} alt="Logo" className="logo" />
                    Clothing
                  </a>
                  <span class="count">35</span>
                </li>
                <li>
                  <a>
                    <img src={shop1} alt="Logo" className="logo" />
                    Pet Foods{" "}
                  </a>
                  <span class="count">42</span>
                </li>
              </ul>
            </div>
            <Fill></Fill>
            <Sidebanner />
          </div>
          <div className="col-9">
            <div className="row justify-content-center align-items-center">
              {renderProductCards()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body;
