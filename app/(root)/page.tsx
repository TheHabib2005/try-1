"use client"
import Btton from '@/components/Btton'
import axios from 'axios'
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

const Home = () => {


  return (
    <div>
      <Link className='w-[200px] mx-auto bg-blue-600 text-white rounded-lg  p-3 flex text-center items-center justify-center' href={"/product"}>Browse Product</Link>
      <Btton />
    </div>
  )
}

export default Home