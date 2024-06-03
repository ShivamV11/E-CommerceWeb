import React from "react";
import slider1 from '../../Assets/slider-1.png'
import slider2 from '../../Assets/slider-2.png'
import './Slider.css'


function Slider() {
  return (
    <>
    <div id="carouselExampleCaptions" class="carousel slide  " data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={slider1} class="d-block w-100" alt="..."/>
      <div className="slider-content">
        <h1 className="display-2 mb-40">  Fresh Vegetables <br/> Big discount </h1>
        <p className="mb-65">Save up to 50% off on your first order</p>
        <form className="form-subcriber d-flex">
          <input type="email" placeholder="Your emaill address"></input>
          <button className="btn" type="submit">Subscribe</button>
        </form>
      </div>
      {/* <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div> */}
    </div>
    <div class="carousel-item">
      <img src={slider2} class="d-block w-100" alt="..."/>
      <div className="slider-content">
        <h1 className="display-2 mb-40">  Don’t miss amazing <br/> grocery deals </h1>
        <p className="mb-65">Sign up for the daily newsletter</p>
        <form className="form-subcriber d-flex">
          <input type="email" placeholder="Your emaill address"></input>
          <button className="btn" type="submit">Subscribe</button>
        </form>
      </div>
      {/* <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div> */}
    </div>
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</>
  );
}

export default Slider;