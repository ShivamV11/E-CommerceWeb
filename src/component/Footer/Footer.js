/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Footer.css';
import NewsSection from './NewsSection';

// import NewsletterImg from '../../assets/images/newsletter.png';
import Icon1 from '../../Assets/Footer Images/icon-1.svg';
import Icon2 from '../../Assets/Footer Images/icon-2.svg';
import Icon3 from '../../Assets/Footer Images/icon-3.svg';
import Icon4 from '../../Assets/Footer Images/icon-4.svg';
import Icon5 from '../../Assets/Footer Images/icon-5.svg';


import Logo from '../../Assets/logo.svg';

import Appstore from '../../Assets/Footer Images/app-store (1).jpg';

import GooglePlay from '../../Assets/Footer Images/google-play.jpg';
import PaymentImage from '../../Assets/Footer Images/payment-method.png';



import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material';

// import Newsletter from '../../components/newsletter/index';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  } from '@fortawesome/free-solid-svg-icons';
// import { Facebook } from '@mui/icons-material';


const Footer = () => {
    return (
        <>

            <NewsSection/>

            <div className='footerWrapper'>
                <div className='footerBoxes'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col'>
                                <div className='box d-flex align-items-center w-100'>
                                    <span>
                                         <img src={Icon1} /> 
                                        </span>
                                    <div className='info'>
                                        <h4>Best prices & offers</h4>
                                        <p>Orders $50 or more</p>
                                    </div>
                                </div>
                            </div>

                            <div className='col'>
                                <div className='box d-flex align-items-center w-100'>
                                    <span><img src={Icon2} alt='icon'/></span>
                                    <div className='info'>
                                        <h4>Free delivery</h4>
                                        <p>Orders $50 or more</p>
                                    </div>
                                </div>
                            </div>

                            <div className='col'>
                                <div className='box d-flex align-items-center w-100'>
                                    <span><img src={Icon3} alt='icon3'/></span>
                                    <div className='info'>
                                        <h4>Great daily deal</h4>
                                        <p>Orders $50 or more</p>
                                    </div>
                                </div>
                            </div>


                            <div className='col'>
                                <div className='box d-flex align-items-center w-100'>
                                    <span>
                                        <img src={Icon4} /> 
                                    </span>
                                    <div className='info'>
                                        <h4>Wide assortment</h4>
                                        <p>Orders $50 or more</p>
                                    </div>
                                </div>
                            </div>


                            <div className='col'>
                                <div className='box d-flex align-items-center w-100'>
                                    <span><img src={Icon5} /></span>
                                    <div className='info'>
                                        <h4>Easy returns</h4>
                                        <p>Orders $50 or more</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
        </div>

                <footer>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-md-3 part1'>
                                <img src={Logo} alt='logo' />
                                <br /><br />
                                <p>Awesome grocery store website template</p>
                                <br />

                                <p> <strong>Address</strong>: 5171 W Campbell Ave undefined Kent, Utah 53127 United States</p>
                                <p> <strong>Call Us:</strong> (+91) - 540-025-124553 </p>
                                <p> <strong>Email:</strong> sale@Nest.com</p>
                                <p> <strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</p>

                            </div>


                            <div className='col-md-6 part2'>
                                <div className='row'>
                                    <div className='col'>
                                        <h4>Company</h4>
                                        <ul class="footer-list mb-sm-5 mb-md-0">
                                            <li>About Us</li>
                                            <li>Delivery Information</li>
                                            <li>Privacy Policy</li>
                                            <li>Terms &amp; Conditions</li>
                                            <li>Contact Us</li>
                                            <li>Support Center</li>
                                            <li>Careers</li>
                                        </ul>
                                    </div>

                                    <div className='col'>
                                        <h4>Account</h4>
                                        <ul class="footer-list mb-sm-5 mb-md-0">
                                            <li>Account</li>
                                            <li>Delivery Information</li>
                                            <li>Privacy Policy</li>
                                            <li>Terms &amp; Conditions</li>
                                            <li>Contact Us</li>
                                            <li>Support Center</li>
                                            <li>Careers</li>
                                        </ul>
                                    </div>


                                    <div className='col'>
                                        <h4>Corporate</h4>
                                        <ul class="footer-list mb-sm-5 mb-md-0">
                                            <li>About Us</li>
                                            <li>Delivery Information</li>
                                            <li>Privacy Policy</li>
                                            <li>Terms &amp; Conditions</li>
                                            <li>Contact Us</li>
                                            <li>Support Center</li>
                                            <li>Careers</li>
                                        </ul>
                                    </div>


                                    <div className='col'>
                                        <h4>Popular</h4>
                                        <ul class="footer-list mb-sm-5 mb-md-0">
                                            <li>About Us</li>
                                            <li>Delivery Information</li>
                                            <li>Privacy Policy</li>
                                            <li>Terms &amp; Conditions</li>
                                            <li>Contact Us</li>
                                            <li>Support Center</li>
                                            <li>Careers</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>


                            <div className='col-md-3 part3'>
                                <h3>Install App</h3>
                                <br className='res-hide'/>
                                <p>From App Store or Google Play</p>

                                <div className='d-flex'>
                                    <img src={Appstore} width={150} />
                                    <img src={GooglePlay} className='mx-2' width={150} />
                                </div>

                                <br />

                                <p>Secured Payment Gateways</p>
                                <img src={PaymentImage} />
                            </div>

                        </div>


                        <hr />



                        <div className='row lastStrip'>
                            <div className='col-md-3 part_1'>
                                <p>© 2022, Nest - HTML Ecommerce Template
                                    All rights reserved</p>
                            </div>

                            <div className='col-md-6 d-flex part_2'>
                                <div className='m-auto d-flex align-items-center phWrap'>
                                    <div className='phNo d-flex align-items-center mx-5'>
                                       
                                            {/* <HeadphonesOutlinedIcon /> */}
                                            {/* <img className='hotline' src={Phone} alt='call'/> */}
                                      
                                        <div className='info ml-3'>
                                            <h3 className='text-g mb-0'>1900 - 888</h3>
                                            <p className='mb-0'>24/7 Support Center</p>
                                        </div>
                                    </div>

                                    <div className='phNo d-flex align-items-center  mx-5'>
                                        <span>
                                            {/* <HeadphonesOutlinedIcon /> */}
                                        </span>
                                        <div className='info ml-3'>
                                            <h3 className='text-g mb-0'>1900 - 888</h3>
                                            <p className='mb-0'>24/7 Support Center</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className='col-md-3 part3  part_3'>
                                <div className='d-flex align-items-center'>
                                    <h5>Follow Us</h5>
                                    <ul className='list list-inline'>
                                        <li className='list-inline-item'>
                                        <Facebook />
                                        </li>
                                        <li className='list-inline-item'>
                                        <Twitter/>
                                        </li>
                                        <li className='list-inline-item'>
                                            <Instagram/>
                                        </li>
                                        <li className='list-inline-item'>
                                            <YouTube/>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </footer> 


            {/* </div> */}
        </>
    )
}

export default Footer;