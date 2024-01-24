import Link from 'next/link'
import Image from 'next/image'
import { inicialData } from '../../../../../public/seedProducts'
import clsx from 'clsx'
import { IoCarOutline } from 'react-icons/io5'
import { Title } from '@/components'

const productsInCacrt = [
  inicialData.results[0],
  inicialData.results[1],
  inicialData.results[2],
  inicialData.results[3],
  inicialData.results[4]
]
interface Props {
  params: {
    id: string
  }
}

export default function Home({ params: { id } }: Props) {
  return (
    <div className='flex justify-center items-center mb-72 px-10 sm:px-0'>
      <div className='flex flex-col w-[1000px] '>
        <Title title={`Orden #${id}`} />
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
          {/* cart */}
          <div className='flex flex-col mt-5'>
            <div
              className={clsx(
                'flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5',
                {
                  'bg-red-500': false,
                  'bg-green-700': true
                }
              )}
            >
              <IoCarOutline size={30} />
              {/* <span className='mx-2'>Pendiente de pago</span> */}
              <span className='mx-2'>Pagada</span>
            </div>
            {productsInCacrt.map((item) => (
              <div key={item.code} className='flex mb-5'>
                <Image
                  style={{ width: '100px', height: '100px' }}
                  priority
                  src={item.galleryImages[0].url}
                  alt={`image ${item.name}`}
                  width={100}
                  height={100}
                  className='mr-5 rounded object-cover object-top'
                />
                <div>
                  <p>{item.name}</p>
                  <p>{item.price.formattedValue} X 3</p>
                  <p className='font-bold'>SubTotal: ${item.price.value * 3}</p>
                </div>
              </div>
            ))}
          </div>
          {/* checkout */}
          <div className='bg-white rounded-xl shadow-xl p-6 h-fit'>
            <h2 className='text-2xl mb-2 font-bold'>Dirección de entrega</h2>
            <div className='mb-10'>
              <p className='text-xl'>Marlon Suyuc</p>
              <p>Av. Chimaltenango</p>
              <p>Col. Centro</p>
              <p>Alcandia. centro</p>
              <p>Ciudad de Guatemala</p>
              <p>CP. 978675656756</p>
              <p>123.123.123</p>
            </div>

            <div className='w-full h-0.5 rounded bg-gray-200 mb-10' />

            <h2 className='text-2xl mb-2'>Resumen de Orden</h2>
            <div className='grid grid-cols-2'>
              <span>No. Productos</span>
              <span className='text-right'>3 articulos</span>

              <span>SubTotal</span>
              <span className='text-right'>$ 100</span>

              <span>Impuestos (15%)</span>
              <span className='text-right'>$ 100</span>

              <span className='text-2xl mt-5 '>Total</span>
              <span className='text-right mt-5 text-2xl'>$ 100</span>
            </div>

            <div className='mt-5 mb-2'>
              <div
                className={clsx(
                  'flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5',
                  {
                    'bg-red-500': false,
                    'bg-green-700': true
                  }
                )}
              >
                <IoCarOutline size={30} />
                {/* <span className='mx-2'>Pendiente de pago</span> */}
                <span className='mx-2'>Pagada</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
