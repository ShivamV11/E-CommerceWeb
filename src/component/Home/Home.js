import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import MainHeader from "../Header/MainHeader";

import Slider from "../Carousel/Slider";

import CategorySection from "../Popular Category/CategorySection";
import BannerSection from "../Banner images/BannerSection";
import Footer from "../Footer/Footer";

import Product from "../Popular Products/Product";
import DailyProducts from "../BestSell.js/DailyProducts";
import DealsDay from "../DealsDay/DealsDay";
import TopSelling from "../Section/TopSelling";


function Home() {
  return (
    <>
      <MainHeader />
    

      <Slider />
      <CategorySection />
      <BannerSection />
      <Product />
      <DailyProducts />
      <DealsDay />
      <TopSelling />
      <Footer />
    </>
  );
}

export default Home;
