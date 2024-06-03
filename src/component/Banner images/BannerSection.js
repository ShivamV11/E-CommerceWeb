import React from 'react'
import Banner1 from '../../Assets/Banner images/banner-1.png'
import Banner2 from '../../Assets/Banner images/banner-2.png'
import Banner3 from '../../Assets/Banner images/banner-3.png'
import './BannerSection.css'

function BannerSection() {
    return (
        <>
            <div className='container-fluid banners mb-25'>
                <div className='row'>
                    <div className='col-lg-4 col-md-6'>
                        <div className='banner-img wow animate__animated animate__fadeInUp' data-wow-delay='"0'>
                            <img src= {Banner1} alt='banner1'/>
                            <div className='banner-text'>
                            <h4>Everyday Fresh <br/>Clean with Our<br/>Products</h4>
                            <a class="btn btn-xs" href="/products">Shop Now <i class="fi-rs-arrow-small-right"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4 col-md-6'>
                        <div className='banner-img wow animate__animated animate__fadeInUp' data-wow-delay='"0'>
                            <img src= {Banner2} alt='banner1'/>
                            <div className='banner-text'>
                            <h4>Everyday Fresh <br/>Clean with Our<br/>Products</h4>
                            <a class="btn btn-xs" href="/products">Shop Now <i class="fi-rs-arrow-small-right"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4 col-md-6'>
                        <div className='banner-img wow animate__animated animate__fadeInUp' data-wow-delay='"0'>
                            <img src= {Banner3} alt='banner1'/>
                            <div className='banner-text'>
                            <h4>Everyday Fresh <br/>Clean with Our<br/>Products</h4>
                            <a class="btn btn-xs" href="/products">Shop Now <i class="fi-rs-arrow-small-right"></i></a>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default BannerSection;




