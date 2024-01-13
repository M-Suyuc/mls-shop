'use client'

import React, { useState } from 'react'

import { Swiper as SwiperObject } from 'swiper'
import { SwiperSlide, Swiper } from 'swiper/react'
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import './styles.css'

import Image from 'next/image'
import { notFound } from 'next/navigation'

import { inicialData } from '../../../../../public/seedProducts'

interface Props {
  params: { slug: string }
}

export default function ProductSlug({ params }: Props) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>()
  const { slug } = params

  const product = inicialData.results.find(
    (product) => product.searchEngineProductId === slug
  )

  if (!product) notFound()

  return (
    <div className='mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-2'>
      <section className='col-span-1 md:col-span-2 '>
        <Swiper
          spaceBetween={10}
          navigation={true}
          autoplay={{ delay: 2500 }}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs, Autoplay]}
          className='rounded-lg'
        >
          {product?.galleryImages.map(({ url }) => (
            <SwiperSlide key={url}>
              <Image
                width={1024}
                height={800}
                src={url}
                alt={`imagen de ${product.name}`}
                className='object-cover object-top'
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={3}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className='mySwiper'
        >
          {product?.galleryImages.map(({ url }) => (
            <SwiperSlide key={url} className='cursor-pointer'>
              <Image
                width={250}
                height={250}
                alt={`imagen de ${product.name}`}
                src={url}
                className='rounded-lg object-cover object-top'
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className='bg-gray-300 col-span-1 px-4'>
        <div className=''>{product.name}</div>
        <div className=''></div>
        <div className=''></div>
        <div className=''></div>
      </section>
    </div>
  )
}
