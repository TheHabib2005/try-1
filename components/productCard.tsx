import { calculateDiscountedPrice, formatePrice } from '@/utils'
import Link from 'next/link'
import React from 'react'

const ProductCard = ({ product }: { product: Product }) => {
    return (
        <Link href={`/product/${product._id}`} key={product._id}>
            <div className="mx-auto mt-3 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-zinc-900/70 shadow-md duration-300 hover:scale-105 hover:shadow-lg">

                <div className='h-48 w-full' >
                    <img
                        className="h-48 w-full object-cover object-center"
                        src={product.thumbnail}
                        alt="productuct Image"
                    />
                </div>
                <div className="p-4">
                    <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
                        {product.title}
                    </h2>
                    <p className="mb-2 text-base dark:text-gray-300 text-gray-700">
                        {product.description.slice(0, 70)}...
                    </p>
                    <div className="flex items-center">
                        <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                            Tk {formatePrice(Number(calculateDiscountedPrice(product.price, product.discountPercentage).toFixed(0)))}.00


                        </p>
                        <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">
                            Tk {formatePrice(product.price)}.00
                        </p>
                        <p className="ml-auto text-base font-medium text-green-500">{product.discountPercentage}% off</p>
                    </div>
                </div>
            </div>

        </Link>
    )
}

export default ProductCard