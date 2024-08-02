import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

const page = () => {

  return (
    <Link className='w-[200px] mx-auto bg-blue-600 text-white rounded-lg  p-3 flex text-center items-center justify-center' href={"/product"}>Browse Product</Link>
  )
}

export default page