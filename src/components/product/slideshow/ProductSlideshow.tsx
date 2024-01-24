'use client'

import { useState } from 'react'

import { Swiper as SwiperObject } from 'swiper'
import { SwiperSlide, Swiper } from 'swiper/react'
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import './styles.css'

import Image from 'next/image'
import { GalleryImage } from '../../../../public/seedProducts'

interface Props {
  images: GalleryImage[]
  title: string
  className?: string
}

export const ProductSlideshow = ({ images, title, className }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>()

  return (
    <div className={`${className} h-[650px]`}>
      <Swiper
        spaceBetween={10}
        navigation={true}
        autoplay={{ delay: 2500 }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className='w-[80%]'
      >
        {images.map(({ url }) => (
          <SwiperSlide key={url}>
            <Image
              width={1024}
              height={800}
              src={url}
              alt={`imagen de ${title}`}
              className='w-full h-full object-cover object-top'
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        slidesPerView={6}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        direction='vertical'
        className='mySwiper w-[20%] h-[100%]'
      >
        {images.map(({ url }) => (
          <SwiperSlide key={url} className='cursor-pointer my-2'>
            <Image
              width={300}
              height={300}
              src={url}
              alt={`imagen de ${title}`}
              className='w-fit h-full md:object-contain mx-auto'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
