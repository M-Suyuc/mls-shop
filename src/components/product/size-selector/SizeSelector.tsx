import clsx from 'clsx'
import { VariantSize } from '../../../../public/seedProducts'

interface Props {
  selectedSize: VariantSize['filterCode']
  availableSize: VariantSize[]
}

export const SizeSelector = ({ availableSize, selectedSize }: Props) => {
  return (
    <div className='my-5'>
      <div className='text-lg font-medium'>size</div>
      <div className='flex whitespace-nowrap overflow-y-auto'>
        {availableSize.map((size) => (
          <button
            key={size.filterCode}
            className={clsx('mx-2 hover:underline text-lg', {
              underline: size.filterCode === selectedSize
            })}
          >
            {size.filterCode}
          </button>
        ))}
      </div>
    </div>
  )
}
