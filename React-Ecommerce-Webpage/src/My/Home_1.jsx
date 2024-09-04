import React from 'react'
import './Style.css'
import { NavBar, SearchBar } from './Header/Header'
import Slider from './Slider_2/Slider'
import Offer from './Offer_3/Offer'
import PopularProduct from './PopularProduct_4/PopularProduct'
import OfferSlider from './OfferSlider_5/OfferSlider'
import ServiceSlider from './ServiceSlider_6/ServiceSlider'
import Deal from './Deal_7/Deal'
import Reviews from './Reviews_9/Reviews'
import Blog from './Blog_10/Blog'
import Footer from './Footer/Footer'

const Home_1 = () => {
  return (
    <div>
        <SearchBar/>
        <NavBar/>
        <Slider/>
        <Offer/>
        <PopularProduct/>
        <OfferSlider/>
        <ServiceSlider/>
        <Deal/>
        <Reviews/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default Home_1