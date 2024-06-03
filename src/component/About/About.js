/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import MainHeader from "../Header/MainHeader";
import Footer from "../Footer/Footer";
import "./About.css";
import aboutimg from "./img/about-1.png";
import icon1 from "./img/icon-1.svg";
import icon2 from "./img/icon-2.svg";
import icon3 from "./img/icon-3.svg";
import icon4 from "./img/icon-4.svg";
import icon5 from "./img/icon-5.svg";
import icon6 from "./img/icon-6.svg";
import about5 from "./img/about-5.png";
import about6 from "./img/about-6.png";
import about8 from "./img/about-8.png";


import social1 from './img/icon-facebook-brand.svg'
import social2 from './img/icon-instagram-brand.svg'
import social3 from './img/icon-twitter-brand.svg'
import social4 from './img/icon-youtube-brand.svg'
function About() {
  return (
    <>
      <MainHeader />
      <div className="page-header breadcrumb-wrap undefined">
        <div className="container">
          <div class="breadcrumb">
            <a href="/">Home</a>
            <span></span> Pages<span></span> About
          </div>
        </div>

        <div className="container-fluid  pt-50">
          <div className="row">
            <div className="col-xl-10 col-lg-12 m-auto">
              <section className="row align-items-center mb-50">
                <div className="col-lg-6">
                  <img
                    src={aboutimg}
                    alt="nest"
                    class="border-radius-15 mb-md-3 mb-lg-0 mb-sm-4"
                  />
                </div>
                <div className="col-lg-6">
                  <div className="pl-25">
                    <h2 class="mb-30">Welcome to Nest</h2>

                    <p class="mb-25">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate id est
                      laborum.
                    </p>
                    <p class="mb-50">
                      Ius ferri velit sanctus cu, sed at soleat accusata. Dictas
                      prompta et Ut placerat legendos interpre.Donec vitae
                      sapien ut libero venenatis faucibus. Nullam quis ante
                      Etiam sit amet orci eget. Quis commodo odio aenean sed
                      adipiscing. Turpis massa tincidunt dui ut ornare lectus.
                      Auctor elit sed vulputate mi sit amet. Commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate id est
                      laborum.
                    </p>
                  </div>
                </div>
              </section>

              <section class="text-center mb-50">
                <h2 class="title style-3 mb-40">What We Provide?</h2>
                <div class="row">
                  <div class="col-lg-4 col-md-6 mb-24">
                    <div class="featured-card">
                      <img src={icon1} alt="nest" />
                      <h4>Best Prices &amp; Offers</h4>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form
                      </p>
                      <a href="#">Read more</a>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6 mb-24">
                    <div class="featured-card">
                      <img src={icon2} alt="nest" />
                      <h4>Wide Assortment</h4>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form
                      </p>
                      <a href="#">Read more</a>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6 mb-24">
                    <div class="featured-card">
                      <img src={icon3} alt="nest" />
                      <h4>Free Delivery</h4>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form
                      </p>
                      <a href="#">Read more</a>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6 mb-24">
                    <div class="featured-card">
                      <img src={icon4} alt="nest" />
                      <h4>Easy Returns</h4>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form
                      </p>
                      <a href="#">Read more</a>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6 mb-24">
                    <div class="featured-card">
                      <img src={icon5} alt="nest" />
                      <h4>100% Satisfaction</h4>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form
                      </p>
                      <a href="#">Read more</a>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6 mb-24">
                    <div class="featured-card">
                      <img src={icon6} alt="nest" />
                      <h4>Great Daily Deal</h4>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form
                      </p>
                      <a href="#">Read more</a>
                    </div>
                  </div>
                </div>
              </section>

              <section className="row align-items-center mb-50">
                <div className="row mb-50 align-items-center">
                  <div class="col-lg-7 pr-30">
                    <img
                      src={about5}
                      alt="nest"
                      class="mb-md-3 mb-lg-0 mb-sm-4"
                    />
                  </div>

                  <div class="col-lg-5">
                    <h4 class="mb-20 text-muted">Our performance</h4>
                    <h1 class="heading-1 mb-40">
                      Your Partner for e-commerce grocery solution
                    </h1>
                    <p class="mb-30">
                      Ed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto
                    </p>
                    <p>
                      Pitatis et quasi architecto beatae vitae dicta sunt
                      explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                      aspernatur aut odit aut fugit, sed quia
                    </p>
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-4 pr-30 mb-md-5 mb-lg-0 mb-sm-5">
                    <h3 class="mb-30">Who we are</h3>
                    <p>
                      Volutpat diam ut venenatis tellus in metus. Nec dui nunc
                      mattis enim ut tellus eros donec ac odio orci ultrices in.
                      ellus eros donec ac odio orci ultrices in.
                    </p>
                  </div>
                  <div class="col-lg-4 pr-30 mb-md-5 mb-lg-0 mb-sm-5">
                    <h3 class="mb-30">Our history</h3>
                    <p>
                      Volutpat diam ut venenatis tellus in metus. Nec dui nunc
                      mattis enim ut tellus eros donec ac odio orci ultrices in.
                      ellus eros donec ac odio orci ultrices in.
                    </p>
                  </div>
                  <div class="col-lg-4">
                    <h3 class="mb-30">Our mission</h3>
                    <p>
                      Volutpat diam ut venenatis tellus in metus. Nec dui nunc
                      mattis enim ut tellus eros donec ac odio orci ultrices in.
                      ellus eros donec ac odio orci ultrices in.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <section class="container-fluid mb-50 d-none d-md-block">
            <div class="row about-count">
              <div class="col-lg-1-5 col-md-6 text-center mb-lg-0 mb-md-5">
                <h1 class="heading-1">
                  <span class="count">12</span>+
                </h1>
                <h4>Glorious years</h4>
              </div>
              <div class="col-lg-1-5 col-md-6 text-center">
                <h1 class="heading-1">
                  <span class="count">36</span>+
                </h1>
                <h4>Happy clients</h4>
              </div>
              <div class="col-lg-1-5 col-md-6 text-center">
                <h1 class="heading-1">
                  <span class="count">58</span>+
                </h1>
                <h4>Projects complete</h4>
              </div>
              <div class="col-lg-1-5 col-md-6 text-center">
                <h1 class="heading-1">
                  <span class="count">24</span>+
                </h1>
                <h4>Team advisor</h4>
              </div>
              <div class="col-lg-1-5 text-center d-none d-lg-block">
                <h1 class="heading-1">
                  <span class="count">26</span>+
                </h1>
                <h4>Products Sale</h4>
              </div>
            </div>
          </section>
        </div>

        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-10 col-lg-12 m-auto">
              <section class="mb-50">
                <h2 class="title style-3 mb-40 text-center">Our Team</h2>
                <div class="row">
                  <div class="col-lg-4 mb-lg-0 mb-md-5 mb-sm-5">
                    <h6 class="mb-5 text-brand">Our Team</h6>
                    <h1 class="mb-30">Meet Our Expert Team</h1>
                    <p class="mb-30">
                      Proin ullamcorper pretium orci. Donec necscele risque leo.
                      Nam massa dolor imperdiet neccon sequata congue idsem.
                      Maecenas malesuada faucibus finibus.
                    </p>
                    <p class="mb-30">
                      Proin ullamcorper pretium orci. Donec necscele risque leo.
                      Nam massa dolor imperdiet neccon sequata congue idsem.
                      Maecenas malesuada faucibus finibus.
                    </p>
                    <a href="#" class="btn">
                      View All Members
                    </a>
                  </div>
                  <div class="col-lg-8">
                    <div class="row">
                      <div class="col-lg-6 col-md-6">
                        <div class="team-card">
                          <img src={about6} alt="nest" />
                          <div class="content text-center">
                            <h4 class="mb-5">H. Merinda</h4>
                            <span>CEO &amp; Co-Founder</span>
                            <div class="social-network mt-20">
                              <a href="#">
                                <img
                                 src={social1}
                                  alt="nest"
                                />
                              </a>
                              <a href="#">
                                <img
                                 src={social2}
                                  alt="nest"
                                />
                              </a>
                              <a href="#">
                                <img
                                  src={social3}
                                  alt="nest"
                                />
                              </a>
                              <a href="#">
                                <img
                                src={social4}
                                  alt="nest"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6">
                        <div class="team-card">
                          <img src={about8} alt="nest" />
                          <div class="content text-center">
                            <h4 class="mb-5">Dilan Specter</h4>
                            <span>Head Engineer</span>
                            <div class="social-network mt-20">
                              <a href="#">
                                <img
                                 src={social1}
                                  alt="nest"
                                />
                              </a>
                              <a href="#">
                                <img
                                 src={social2}
                                  alt="nest"
                                />
                              </a>
                              <a href="#">
                                <img
                                 src={social3}
                                  alt="nest"
                                />
                              </a>
                              <a href="#">
                                <img
                                  src={social4}
                                  alt="nest"
                                />
                              </a>
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
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
