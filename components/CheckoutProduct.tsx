import React from 'react'
import { Products } from '../typings'
import Image from 'next/image'
import { urlFor } from '../sanity'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

interface Props {
    items: Products[],
    id: string
}

const CheckoutProduct = ({id, items}:Props) => {
  return (
    <div>
        <div className='relative h-44 w-44'>
            <Image src={urlFor(items[0].image[0]).url()}
            fill
            style={{objectFit:"contain"}}
            alt="product image"
            />
        </div>
        <div className='flex flex-1 items-end lg:items-center'>
            <div className='flex-1 space-y-4'>
                <div className='flex flex-col gap-x-8 text-xl lg:flex-row lg:text-2xl'>
                    <h4 className='font-semibold lg:w-96 lg:items-center'>
                        {items[0].title}
                    </h4>
                    <p className='flex items-end gapx-x-1 lg:items-center'>
                        {items.length}
                        <ChevronDownIcon className='h-6 w-6 text-blue-500'/>
                    </p>
                </div>
                <p className='flex cursor-pointer items-end text-blue-500 hover:underline'>
                    Show Product Details
                </p>
            </div>
        </div>
    </div>
  )
}

export default CheckoutProduct
