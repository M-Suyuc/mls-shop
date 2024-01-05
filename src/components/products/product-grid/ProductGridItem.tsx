import Image from 'next/image'
import Link from 'next/link'

import { Result } from '../../../../public/seedProducts'

interface Props {
  product: Result
}

export const ProductGridItem = ({ product }: Props) => {
  const { name, code, galleryImages, price, searchEngineProductId } = product

  return (
    <div
      key={code}
      className='rounded-md overflow-hidden border border-violet-900/20 fade-in'
    >
      <Link href={`/product/${searchEngineProductId}`}>
        <Image
          src={`${galleryImages[0].url}`}
          alt={name}
          className='w-full object-cover'
          width={500}
          height={500}
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
