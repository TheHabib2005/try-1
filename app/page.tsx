
import { calculateDiscountedPrice, formatePrice } from '@/utils';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Product = async () => {
  const fetchProduct = async () => {
    let res = await fetch(`http://localhost:8000/products/all`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: "include"
    })
    let data = await res.json()
    return data;
  };
  let apiResponse = await fetchProduct();
  return (
    <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-5 w-full'>
      {
        apiResponse.map((prod: any, index: number) => {
          return <Link href={`/product/${prod._id}`} key={index}>
            <div className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-zinc-900/70 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
              <img
                className="h-48 w-full object-cover object-center"
                src={prod.thumbnail}
                alt="Product Image"
              />
              <div className="p-4">
                <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
                  {prod.title}
                </h2>
                <p className="mb-2 text-base dark:text-gray-300 text-gray-700">
                  {prod.description.slice(0, 70)}...
                </p>
                <div className="flex items-center">
                  <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                    Tk {formatePrice(Number(calculateDiscountedPrice(prod.price, prod.discountPercentage).toFixed(0)))}.00


                  </p>
                  <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">
                    Tk {formatePrice(prod.price)}.00
                  </p>
                  <p className="ml-auto text-base font-medium text-green-500">{prod.discountPercentage}% off</p>
                </div>
              </div>
            </div>

          </Link>
        })
      }
    </div>
  )
}

export default Product