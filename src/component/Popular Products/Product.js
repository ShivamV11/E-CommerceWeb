/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Product.css";
import product1 from "../../Assets/Products/product-1-1.jpg";
import product2 from "../../Assets/Products/product-2-1.jpg";
import product3 from "../../Assets/Products/product-3-1.jpg";
import product4 from "../../Assets/Products/product-4-1.jpg";
import product5 from "../../Assets/Products/product-5-1.jpg";
import product6 from "../../Assets/Products/product-6-1.jpg";
import product7 from "../../Assets/Products/product-7-1.jpg";
import product8 from "../../Assets/Products/product-8-1.jpg";
import product9 from "../../Assets/Products/product-9-1.jpg";
import product10 from "../../Assets/Products/product-10-1.jpg";

const Product = () => {
  return (
    <>

<div className="section">
            <div className="left-side">
                <h2>Popular Products</h2>
            </div>
            <div className="right-side">
                <h3>All</h3> 
                <h3>Featured</h3> 
                <h3>Popular</h3>
                <h3>New added</h3>
            </div>
        </div>



      <div className="col-12">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col">
              <div className="product">
                <img className="default" src={product1} />
                <h3>Armani Seeds of Change Organic Quinoa, Brown</h3>
                <p>(90) By NestFood</p>
                <p>$65.8</p>
                <button>Add</button>
              </div>
            </div>
            <div className="col">
  <div className="product">
    <img
      src={product2}
      alt="Armani Seeds of Change Organic Quinoa, Brown"
    />
    <h3>Armani Seeds of Change Organic Quinoa, Brown</h3>
    <p>(90) By NestFood</p>
    <p>$235.8</p>
    <button>Add</button>
    <div className="product-action-1">
      <a aria-label="Quick view" className="action-btn hover-up" data-bs-toggle="modal">
      <i class='bx bxs-low-vision' ></i>
      </a>
      <a aria-label="Add To Wishlist" className="action-btn hover-up">
      <i class='bx bx-heart' ></i>
      </a>
      <a aria-label="Compare" className="action-btn hover-up">
      <i class='bx bx-shuffle' ></i>
      </a>
    </div>
  </div>
</div>

            <div className="col">
              <div className="product">
                <img
                  src={product3}
                  alt="Armani Seeds of Change Organic Quinoa, Brown"
                />
                <h3>Armani Seeds of Change Organic Quinoa, Brown</h3>
                <p>(90) By NestFood</p>
                <p>$238.8</p>
                <button>Add</button>
              </div>
            </div>
            <div className="col">
              <div className="product">
                <img
                  src={product4}
                  alt="Armani Seeds of Change Organic Quinoa, Brown"
                />
                <h3>Armani Seeds of Change Organic Quinoa, Brown</h3>
                <p>(90) By NestFood</p>
                <p>$145.8</p>
                <button>Add</button>
              </div>
            </div>
            <div className="col">
              <div className="product">
                <img
                  src={product5}
                  alt="Armani Seeds of Change Organic Quinoa, Brown"
                />
                <h3>Armani Seeds of Change Organic Quinoa, Brown</h3>
                <p>(90) By NestFood</p>
                <p>$245.8</p>
                <button>Add</button>
              </div>
            </div>
            <div className="col">
              <div className="product">
                <img
                  src={product6}
                  alt="Armani Seeds of Change Organic Quinoa, Brown"
                />
                <h3>Armani Seeds of Change Organic Quinoa, Brown</h3>
                <p>(90) By NestFood</p>
                <p>$245.8</p>
                <button>Add</button>
              </div>
            </div>
            <div className="col">
              <div className="product">
                <img
                  src={product7}
                  alt="Armani Seeds of Change Organic Quinoa, Brown"
                />
                <h3>Armani Seeds of Change Organic Quinoa, Brown</h3>
                <p>(90) By NestFood</p>
                <p>$238.8</p>
                <button>Add</button>
              </div>
            </div>
            <div className="col">
              <div className="product">
                <img
                  src={product8}
                  alt="Armani Seeds of Change Organic Quinoa, Brown"
                />
                <h3>Armani Seeds of Change Organic Quinoa, Brown</h3>
                <p>(90) By NestFood</p>
                <p>$256.6</p>
                <button>Add</button>
              </div>
            </div>
            <div className="col">
              <div className="product">
                <img
                  src={product9}
                  alt="Armani Seeds of Change Organic Quinoa, Brown"
                />
                <h3>Armani Seeds of Change Organic Quinoa, Brown</h3>
                <p>(90) By NestFood</p>
                <p>$385.45</p>
                <button>Add</button>
              </div>
            </div>
            <div className="col">
              <div className="product">
                <img
                  src={product10}
                  alt="Armani Seeds of Change Organic Quinoa, Brown"
                />
                <h3>Armani Seeds of Change Organic Quinoa, Brown</h3>
                <p>(90) By NestFood</p>
                <p>$29.8</p>
                <button>Add</button>
              </div>
            </div>
            <div className="col">
              <div className="product">
                <img
                  src={product3}
                  alt="Armani Seeds of Change Organic Quinoa, Brown"
                />
                <h3>Armani Seeds of Change Organic Quinoa, Brown</h3>
                <p>(90) By NestFood</p>
                <p>$23.5</p>
                <button>Add</button>
              </div>
            </div>
            <div className="col">
              <div className="product">
                <img
                  src={product5}
                  alt="Armani Seeds of Change Organic Quinoa, Brown"
                />
                <h3>Armani Seeds of Change Organic Quinoa, Brown</h3>
                <p>(90) By NestFood</p>
                <p>$238.85 </p>
                <button>Add</button>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
