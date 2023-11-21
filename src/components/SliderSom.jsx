import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import imagem1 from "../images/Som/29145.jpg";
import imagem2 from "../images/Som/rcl715jpg.jpg";
import imagem3 from "../images/Som/som,.webp"
import imagem4 from "../images/Som/xr18.webp";

import { ImagemSlider } from "../pages/styles";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


  
export const SliderSom = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{ delay: 1500 }}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
        
      
    >
      <SwiperSlide>
        <ImagemSlider src={imagem1} alt="Imagem 1" />
      </SwiperSlide>
      <SwiperSlide>
        <ImagemSlider src={imagem2} alt="Imagem 2" />
      </SwiperSlide>
      <SwiperSlide>
        <ImagemSlider src={imagem3} alt="Imagem 3" />
      </SwiperSlide>
      <SwiperSlide>
        <ImagemSlider src={imagem4} alt="Imagem 5" />
      </SwiperSlide>
    </Swiper>
  )
}


