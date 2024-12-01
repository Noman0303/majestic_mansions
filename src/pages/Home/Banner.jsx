import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Banner = () => {
    return (
        <div >

            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={2}

                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}

                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><img src="https://i.ibb.co.com/y6DVsDj/outdoor-deck-2.jpg" className='w-full max-h-96 rounded-xl' /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co.com/BK4shGB/todd-kent-178j8t-Jr-Nlc-unsplash.jpg" className='w-full  max-h-96 rounded-xl ' /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co.com/mhMKXMy/abby-rurenko-u-OYak90r4-L0-unsplash.jpg" className='w-full max-h-96 rounded-xl' /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co.com/236kNS4/evelyn-paris-XJn-P4-L958ds-unsplash.jpg" className='w-full max-h-96 rounded-xl ' /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co.com/n03ZtBL/scott-webb-1ddol8rg-UH8-unsplash.jpg" className='w-full max-h-96 rounded-xl ' /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co.com/znjkr9S/aerial-view-small-cabin-hidden-dense-forest-greenery.jpg" className='w-full max-h-96 rounded-xl ' /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co.com/hMmSB0r/beautiful-shot-forest-cabin-reflections-pond.jpg" className='w-full max-h-96 rounded-xl' /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co.com/2KsM5nm/modern-cabin-cloud-forest-landscape.jpg" className='w-full max-h-96 rounded-xl ' /></SwiperSlide>

            </Swiper>
        </div>

    )
}

export default Banner
