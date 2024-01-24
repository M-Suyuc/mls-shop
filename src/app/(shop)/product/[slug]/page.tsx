import { notFound } from 'next/navigation'

import { inicialData } from '../../../../../public/seedProducts'
import { titleFont } from '@/config/fonts'
import {
  ProductMobileSlideshow,
  ProductSlideshow,
  QuantitySelector,
  SizeSelector
} from '@/components'

interface Props {
  params: { slug: string }
}

export default function ProductSlug({ params }: Props) {
  const { slug } = params

  const product = inicialData.results.find(
    (product) => product.searchEngineProductId === slug
  )

  if (!product) notFound()

  return (
    <div className='mt-5 mb-20 grid grid-cols-1 md:grid-cols-7 md:gap-14'>
      {/* slide */}
      <section className='col-span-1 md:col-span-4'>
        <ProductSlideshow
          title={product.name}
          images={product.galleryImages}
          className='hidden md:flex md:flex-row-reverse md:gap-2 lg:gap-4'
        />
        <ProductMobileSlideshow
          title={product.name}
          images={product.galleryImages}
          className='block md:hidden px-0'
        />
      </section>

      {/* Details product */}
      <section className='col-span-3 pt-4'>
        <h1
          className={`${titleFont.className} text-2xl font-semibold antialiased`}
        >
          {product.name}
        </h1>

        <p className='text-lg mb-4'>{product.price.formattedValue}</p>

        <SizeSelector
          availableSize={product.variantSizes}
          selectedSize={product.variantSizes[0].filterCode}
        />

        <QuantitySelector quantity={1} />

        <button className='btn-primary my-5'>Add to cart</button>

        <h3 className='font-bold text-sm'>DESCRIPTION</h3>
        <p className='font-light'>
          INTRODUCING THE TESLA RAVEN COLLECTION. THE MEN S RAVEN LIGHTWEIGHT
          HOODIE HAS A PREMIUM, RELAXED SILHOUETTE MADE FROM A SUSTAINABLE
          BAMBOO COTTON BLEND. THE HOODIE FEATURES SUBTLE THERMOPLASTIC
          POLYURETHANE TESLA LOGOS ACROSS THE CHEST AND ON THE SLEEVE WITH A
          FRENCH TERRY INTERIOR FOR VERSATILITY IN ANY SEASON. MADE FROM 70%
          BAMBOO AND 30% COTTON.
        </p>
      </section>
    </div>
  )
}
