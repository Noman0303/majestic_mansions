import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';



// Import Swiper styles
import 'swiper/css';

const Banner = () => {
  return (
    <div>

    <Swiper
      spaceBetween={10}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src="https://i.ibb.co.com/GHjQ7Wq/1.jpg" alt="1" border="0"/></SwiperSlide>
      <SwiperSlide><img src="https://i.ibb.co.com/MR29VBr/2.jpg" alt="2" border="0"/></SwiperSlide>
      <SwiperSlide><img src="https://i.ibb.co.com/SvGCcVd/3.jpg" alt="3" border="0"/></SwiperSlide>
      <SwiperSlide><img src="https://i.ibb.co.com/Rb7C60Y/4.jpg" alt="4" border="0"/></SwiperSlide>
      <SwiperSlide><img src="https://i.ibb.co.com/Xx1dgwZ/5.jpg" alt="5" border="0"/></SwiperSlide>
      <SwiperSlide><img src="https://i.ibb.co.com/R4d8Cps/6.jpg" alt="6" border="0"/></SwiperSlide>
      <SwiperSlide><img src="https://i.ibb.co.com/3hPt9g4/7.jpg" alt="7" border="0"/></SwiperSlide>
      <SwiperSlide><img src="https://i.ibb.co.com/HTXggZs/8.jpg" alt="8" border="0"/></SwiperSlide>
      
    </Swiper>
    </div>
    
  )
}

export default Banner
