'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Result } from '../../../../public/seedProducts'
import { useState } from 'react'

interface Props {
  product: Result
}

export const ProductGridItem = ({ product }: Props) => {
  const { name, pk, galleryImages, price, searchEngineProductId } = product

  const [displaImage, setDisplaImage] = useState(galleryImages[0]?.url)

  return (
    <div
      key={pk}
      className='rounded-md overflow-hidden border border-violet-900/20 fade-in'
    >
      <Link href={`/product/${searchEngineProductId}`}>
        <Image
          src={`${displaImage}`}
          alt={name}
          className='w-full h-[380px] object-top object-cover rounded '
          width={500}
          height={500}
          onMouseEnter={() =>
            setDisplaImage(galleryImages[1]?.url ?? galleryImages[0]?.url)
          }
          onMouseLeave={() => setDisplaImage(galleryImages[0]?.url)}
        />
      </Link>

      <div className='p-4 flex flex-col'>
        <Link
          className='hover:text-blue-600'
          href={`/product/${searchEngineProductId}`}
        >
          {name}
        </Link>
        <span className='font-bold'>{price.formattedValue}</span>
      </div>
    </div>
  )
}
