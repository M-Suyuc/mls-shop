'use client'

import { useState } from 'react'
import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5'

interface Props {
  quantity: number
}

export const QuantitySelector = ({ quantity }: Props) => {
  const [count, setCount] = useState(quantity)

  const onQuantityChanged = (value: number) => {
    if (count + value < 1) return

    setCount(count + value)
  }

  return (
    <div className='flex gap-4'>
      <button
        className='font-semibold text-lg'
        onClick={() => onQuantityChanged(-1)}
      >
        <IoRemoveCircleOutline size={30} />
      </button>
      <input
        type='number'
        value={count}
        // defaultValue={5}
        min={0}
        max={10}
        className='p-3 text-center outline outline-1 outline-gray-200 font-semibold focus:outline-none [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none rounded-md'
      />
      <button
        className='font-semibold text-lg'
        onClick={() => onQuantityChanged(+1)}
      >
        <IoAddCircleOutline size={30} />
      </button>
    </div>
  )
}
