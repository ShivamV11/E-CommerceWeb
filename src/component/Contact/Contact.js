/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Contact.css";
import MainHeader from "../Header/MainHeader";
import contact2 from './img/contact-2.png'
import Footer from '../Footer/Footer'

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
function Contact() {
  return (
    <>
      <MainHeader />
      <div className="container fluid">
        <div className="page-header breadcrumb-wrap undefined">
          <div className="container">
            <div className="breadcrumb">
              <a href="/">Home</a>
              <span></span> Pages<span></span> Contact
            </div>
          </div>
        </div>
      </div>
      <div className="page-content pt-50">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 col-lg-12 m-auto">
              <section className="row align-items-end mb-50">
                <div className="col-lg-4 mb-lg-0 mb-md-5 mb-sm-5">
                  <h4 className="mb-20 text-brand">How can help you ?</h4>
                  <h1 className="mb-30">Let us know how we can help you</h1>
                  <p className="mb-20">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                    leo.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                    leo.
                  </p>
                </div>

                <div className="col-lg-8">
                  <div className="row">
                    <div className="col-lg-6 mb-4">
                      <h5 className="mb-20">01. Visit Feedback</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                        dapibus leo.
                      </p>
                    </div>

                    <div className="col-lg-6 mb-4">
                      <h5 className="mb-20">02. Employer Services</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                        dapibus leo.
                      </p>
                    </div>
                    <div className="col-lg-6 mb-lg-0 mb-4">
                      <h5 className="mb-20 text-brand">
                        03. Billing Inquiries
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                        dapibus leo.
                      </p>
                    </div>
                    <div className="col-lg-6">
                      <h5 className="mb-20">04.General Inquiries</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                        dapibus leo.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        <section className="container mb-50 d-none d-md-block">
          <div className="border-radius-15 overflow-hidden">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29426.50889275295!2d78.4069707!3d22.790840499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1713417653646!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </section>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-10 col-lg-12 m-auto">
            <section className="mb-50">
              <div className="row mb-60">
                <div className="col-md-4 mb-4 mb-md-0">
                  <h4 className="mb-15 text-brand">Office</h4>
                  <address>
                    205 North Michigan Avenue, Suite 810
                    <br />
                    Chicago, 60601, USA
                    <br />
                    <abbr title="Phone">Phone:</abbr> (123) 456-7890
                    <br />
                    <abbr title="Email">Email:</abbr> contact@Evara.com
                    <br />
                  </address>
                  <a
                    href="#"
                    className="btn btn-sm font-weight-bold text-white mt-20 border-radius-5 btn-shadow-brand hover-up viewbtn"
                  >
                    <i className="fi-rs-marker mr-5"></i>View map
                  </a>
                </div>

                <div class="col-md-4 mb-4 mb-md-0">
                  <h4 class="mb-15 text-brand">Studio</h4>205 North Michigan
                  Avenue, Suite 810
                  <br />
                  Chicago, 60601, USA
                  <br />
                  <abbr title="Phone">Phone:</abbr> (123) 456-7890
                  <br />
                  <abbr title="Email">Email: </abbr>contact@Evara.com
                  <br />
                  <a class="btn btn-sm font-weight-bold text-white mt-20 border-radius-5 btn-shadow-brand hover-up viewbtn">
                    <i class="fi-rs-marker mr-5"></i>View map
                  </a>
                </div>

                <div class="col-md-4">
                  <h4 class="mb-15 text-brand">Shop</h4>205 North Michigan
                  Avenue, Suite 810
                  <br />
                  Chicago, 60601, USA
                  <br />
                  <abbr title="Phone">Phone:</abbr> (123) 456-7890
                  <br />
                  <abbr title="Email">Email: </abbr>contact@Evara.com
                  <br />
                  <a class="btn btn-sm font-weight-bold text-white mt-20 border-radius-5 btn-shadow-brand hover-up viewbtn">
                    <i class="fi-rs-marker mr-5"></i>View map
                  </a>
                </div>


              </div>

              <div className="row">
      <div className="col-xl-8">
        <div className="contact-from-area padding-20-row-col">
          <h5 className="text-brand mb-10">Contact form</h5>
          <h2 className="mb-10">Drop Us a Line</h2>
          <p className="text-muted mb-30 font-sm">
            Your email address will not be published. Required fields are marked *
          </p>
          <form className="contact-form-style mt-30" id="contact-form" action="#" method="post">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="input-style mb-20">
                  <input name="name" placeholder="First Name" type="text" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="input-style mb-20">
                  <input name="email" placeholder="Your Email" type="email" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="input-style mb-20">
                  <input name="telephone" placeholder="Your Phone" type="tel" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="input-style mb-20">
                  <input name="subject" placeholder="Subject" type="text" />
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="textarea-style mb-30">
                  <textarea name="message" placeholder="Message" />
                </div>
                <button className="submit submit-auto-width" type="submit">
                  Send message
                </button>
              </div>
            </div>
          </form>
          <p className="form-messege"></p>
        </div>
      </div>
      <div className="col-lg-4 pl-50 d-lg-block d-none">
        <img
          className="border-radius-15 mt-50"
          src={contact2}
          alt="nest"
        />
      </div>
    </div>
            </section>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
}

export default Contact;
