import { Result } from '../../../../public/seedProducts'
import { ProductGridItem } from './ProductGridItem'

interface Props {
  products: Result[]
}

export const ProductGrid = ({ products }: Props) => {
  return (
    <div className='grid grid-cols-2  sm:grid-cols-3  lg:grid-cols-4 gap-4 mb-10'>
      {products.map((product) => {
        return <ProductGridItem product={product} key={product.code} />
      })}
    </div>
  )
}
