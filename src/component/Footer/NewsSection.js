import React from "react";
import NewsletterImg from "../../Assets/Footer Images/banner-9.png";
import './NewSection.css';

function NewsSection() {
  return (
    <>
      <section className="newsletter mb-15 mt-15 ">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="position-relative newsletter-inner">
                <div className="newsletter-content">
                  <div className="box d-flex align-items-center">
                    <div className="info">
                      <h2 className="mb-20">
                        Stay home & get your daily <br />
                        needs from our shop
                      </h2>
                      <p className="mb-45">
                        Start You'r Daily Shopping with{" "}
                        <span class="text-brand">Nest Mart</span>{" "}
                      </p>
                      <br />
                      <br className="res-hide" />
                      {/* <Newsletter/> */}
                    </div>
                  </div>
                  <form class="form-subcriber d-flex">
                    <input type="email" placeholder="Your emaill address" />
                    <button class="btn" type="submit">
                      Subscribe
                    </button>
                  </form>

                 
                </div>
                <img src={NewsletterImg} alt="newsletter"></img>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NewsSection;
