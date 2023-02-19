// import Swiper core and required modules
import {Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

const HeroSection = () => {
  return (
    <Swiper
    spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
       
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
    >
      <SwiperSlide>
        <img className='w-full h-96  object-cover  '
      
          src={
            "https://images.unsplash.com/photo-1676677355891-15f45fa7ee8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=892&q=80"
          }
          alt={'scroll'}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img className='w-full h-96  object-cover  '
      
          src={
            "https://images.unsplash.com/photo-1676614722679-8ab239411924?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
          }
          alt={'scroll1'}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img className='w-full h-96  object-cover  '
      
          src={
            "https://images.unsplash.com/photo-1670349081674-90d0e76a20ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          }
          alt='scroll2'
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSection;
