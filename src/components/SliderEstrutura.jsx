import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import imagem1 from "../images/Estrutura/BackDrop.jpeg";
import imagem2 from "../images/Estrutura/Bar.jpeg";
import imagem3 from "../images/Estrutura/Castelao.jpeg";
import imagem5 from "../images/Estrutura/Estrutura Metalica.jpeg";
import imagem6 from "../images/Estrutura/Palco.jpeg";
import imagem7 from "../images/Estrutura/Portico.jpeg";
import imagem8 from "../images/Estrutura/Tenda.jpeg";
import { ImagemSlider } from "../pages/styles";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';





export const SliderEstrutura = () => {
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
        <ImagemSlider  src={imagem1} alt="Imagem 1" />
      </SwiperSlide>
      <SwiperSlide>
        <ImagemSlider  src={imagem2} alt="Imagem 2" />
      </SwiperSlide>
      <SwiperSlide>
        <ImagemSlider  src={imagem3} alt="Imagem 3" />
      </SwiperSlide>
      <SwiperSlide>
        <ImagemSlider  src={imagem5} alt="Imagem 5" />
      </SwiperSlide>
      <SwiperSlide>
        <ImagemSlider  src={imagem6} alt="Imagem 6" />
      </SwiperSlide>
      <SwiperSlide>
        <ImagemSlider  src={imagem7} alt="Imagem 7" />
      </SwiperSlide>
      <SwiperSlide>
        <ImagemSlider  src={imagem8} alt="Imagem 8" />
      </SwiperSlide>
    </Swiper>
  )
}


