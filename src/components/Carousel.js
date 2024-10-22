import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Carousel = ({images}) => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={4}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      modules={[Pagination]}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="carousel-content">
            <img src={image} alt={`Product ${index + 1}`} />
            <button className="carousel-button">ПОДРОБНЕЕ</button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
