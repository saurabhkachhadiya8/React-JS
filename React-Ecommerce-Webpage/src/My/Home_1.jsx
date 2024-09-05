import React from 'react'
import './Style.css'
import { NavBar, SearchBar } from './Header/Header'
import BannerSlider from './BannerSlider_2/BannerSlider'
import Offer from './Offer_3/Offer'
import PopularProduct from './PopularProduct_4/PopularProduct'
import OfferSlider from './OfferSlider_5/OfferSlider'
import ServiceSlider from './ServiceSlider_6/ServiceSlider'
import Deal from './Deal_7/Deal'
import Reviews from './Reviews_9/Reviews'
import Blog from './Blog_10/Blog'
import Footer from './Footer/Footer'
import ProductCardSlider from './ProductCardSlider_8/ProductCardSlider'

const Home_1 = () => {
  return (
    <div>
        <SearchBar/>
        <NavBar/>
        <BannerSlider/>
        <Offer/>
        <PopularProduct/>
        <OfferSlider/>
        <ServiceSlider/>
        <Deal/>
        <ProductCardSlider/>
        <Reviews/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default Home_1