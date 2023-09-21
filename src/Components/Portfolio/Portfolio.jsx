import React from 'react';
import './Portfolio.css';
import Sidebar from '../img/sidebar.png';
import Ecomm from '../img/ecommerce.png';
import Hoc from '../img/hoc.png';
import Musicapp from '../img/musicapp.png';
import {Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Porfolio = () => {
  return (
    <div className="portfolio">
      <span>Recent projects</span>
      <span>Portfolio</span>
      <Swiper spaceBetween={30}
      slidesPerView={3}
      grabCursor={true}
      className='portfolio-slider'>
        <SwiperSlide><img src={Sidebar} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Ecomm} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Hoc} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Musicapp} alt="" /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Porfolio