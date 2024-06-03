import React from 'react'
import Ban from './Img/banner-11.png'
import './Sidebanner.css'

const Sidebanner = () => {
  return (
    <>
    <div class="banner-img ">
    <img src={Ban} alt="nest"/>
    <div class="banner-text">
        <span>Oganic</span>
        <h4>Save 17% <br/>on <span class="text-brand">Oganic</span><br/>Juice</h4>
    </div>
</div>


    </>
  )
}

export default Sidebanner
