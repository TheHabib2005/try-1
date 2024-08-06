
import { fetchProduct } from '@/actions';
import BrandLists from '@/components/BrandLists';
import Error from '@/components/Error';
import LazyImage from '@/components/LazyImage';
import ProductNotFound from '@/components/Product-not-found';
import ProductCard from '@/components/productCard';
import ShowProducts from '@/components/SearchResult';
import { calculateDiscountedPrice, delay, formatePrice } from '@/utils';
import axios from 'axios';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
export const metadata: Metadata = {
    title: "slides - SlideHub",
    description: "Generated by create next app",
};
const Product = async () => {

    let { product, success } = await fetchProduct();

    if (!success) {
        return <Error />
    }

    if (product.length === 0) {
        return <ProductNotFound />
    }

    return (



        <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-3 w-full'>
            <ShowProducts products={product} />
        </div>

    )
}

export default Product