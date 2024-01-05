import { ProductGrid } from '@/components'
import Title from '@/components/ui/title/Title'
import { inicialData } from '../../../public/seedProducts'
// import MiPagina from '@/services'

const products = inicialData.results

export default function Home() {
  return (
    <>
      {/* <MiPagina /> */}
      <Title title='Tienda' subTitle='Todos los productos' className='mb-2' />
      <ProductGrid products={products} />
    </>
  )
}
