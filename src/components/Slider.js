import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';
import slide_1 from "../assets/images/slider/main_slide_1.png"
import slide_2 from "../assets/images/slider/main_slide_2.png"

const Slider = () => {
    return (
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            speed={1000}
            modules={[Pagination, Autoplay]}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <img src={slide_1} alt="Slide 1" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide_2} alt="Slide 2" />
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;
