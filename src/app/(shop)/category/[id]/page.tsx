// import { notFound } from 'next/navigation'

import { ProductGrid, Title } from '@/components'
import { CategoryName, inicialData } from '../../../../../public/seedProducts'

// const products = inicialData.results.slice(0, 7)
const products = inicialData.results

interface Props {
  params: { id: CategoryName }
}

export default function Home({ params }: Props) {
  const { id } = params

  const filterProducts = products.filter(
    (product) => product.categoryName === id
  )

  const labels: Record<CategoryName, string> = {
    Men: 'Hombres',
    Ladies: 'Señoritas',
    Kids: 'Niños',
    'H&M HOME': 'H&M HOME',
    Baby: ' Bebé',
    Beauty: '',
    Divided: 'Para todos',
    Outlet: '',
    SALE: 'A la venta',
    Sport: 'Deportes',
    Women: 'Mujer'
  }

  // if (id === 'kids') {
  //   notFound()
  // }

  return (
    <div>
      <Title
        title={labels[id]}
        subTitle='Todos los productos'
        className='mb-2'
      />
      <ProductGrid products={filterProducts} />
    </div>
  )
}
