'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

import { Comments } from '../lib'
 
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
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

export function CarouselComments() {
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
    <section className='mt-8 '>
      <div className=''>
        <Swiper
         style={swiperStyles}

         className='mySwiper '
         spaceBetween={12}
         slidesPerView={1}
         loop={true}
         autoplay={{ delay: 4000, disableOnInteraction: false }}
         centeredSlides={true}
         modules={[ Autoplay, Pagination]}
         pagination={navigationEnabled ? false : true}
        

          breakpoints={{
            640: {
              slidesPerView: 2
            },
            740: {
              slidesPerView: 2
            },
            1100: {
              slidesPerView: 3
            }
          }}
        >
          {
            Comments.map((comment, index) => (
              <SwiperSlide key={index}>
                  <div className='mx-auto lg:mx-0 pb-16 px-3 max-w-[347px] bg-white rounded-md'>
                    <blockquote>
                      <cite className='flex items-center gap-3 mt-6 justify-between'>
                        <div className='flex items-center gap-3 mt-2'>
                          <Image className='rounded-full' width={30} height={30}
                            src={comment.src}
                            alt={comment.alt}
                          />
                          
                          <div className=''>
                            <p>{comment.name}</p>
                            
                            <p className='font-thin text-body text-sm md:text-base'>{comment.date}</p>
                          </div>
                        </div>

                        <Image src='/google.png' alt='' width={25} height={25}/>
                      </cite>
                      
                      <div className='mt-8'>
                        <Image src='/stars.svg' alt='' width={100} height={18}/>
                        <p className='mt-2'><span className='text-4xl md:text-5xl text-orange-dark'>&ldquo;</span>{comment.text}</p>
                      </div>
                    </blockquote>
                  </div>
              </SwiperSlide>
            
          ))}
        </Swiper>
      </div>
    </section>
  )
}