import { useState, useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination, EffectFade } from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { VideosTestimonial } from '../lib'

interface SwiperProps {
  [key: string]: string;
}

const swiperStyles: SwiperProps = {
  '--swiper-navigation-size': '24px',
  '--swiper-navigation-top-offset': '50%',
  '--swiper-navigation-sides-offset': '16px',
  '--swiper-pagination-color': '#FF7205',
  '--swiper-navigation-color': '#FF7205',
};


export function CarouselTestimonials(){
  const [navigationEnabled, setNavigationEnabled] = useState(true);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640 && navigationEnabled) {
        setNavigationEnabled(false);
      } else if (window.innerWidth >= 640 && !navigationEnabled) {
        setNavigationEnabled(true);
      }
    };

    // Adiciona um ouvinte de redimensionamento para atualizar o estado quando a largura da tela mudar
    window.addEventListener('resize', handleResize);

    // Remove o ouvinte de redimensionamento ao desmontar o componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [navigationEnabled]);

  return (
    

    <div className='mySwiper lg:mx-8'>
      <Swiper
        style={swiperStyles}

        className='mySwiper'
        effect={'fade'}
        spaceBetween={2}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        centeredSlides={true}
        modules={[EffectFade, Navigation, Autoplay, Pagination]}
        pagination={navigationEnabled ? false : true}
        navigation={navigationEnabled ? true : false}
      >   
        { 
          VideosTestimonial.map((video, index) => (
            <SwiperSlide key={index}>
                <div>
                  <video poster="" width="320" height="140" autoPlay={false} controls className='mx-auto rounded-lg'>
                    <source type="video/mp4" src={video.src}/>
                  </video>
                </div>
            </SwiperSlide>
          ))
        }   
        </Swiper>
    </div>
  );
};