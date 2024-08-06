//@ts-nocheck
"use client"
import { useCartStore } from '@/zustant-store/useCartStore'
import React, { useState } from 'react'
import { ClipLoader, DotLoader, ClimbingBoxLoader, FadeLoader, ClockLoader } from 'react-spinners';
import Loader from '../Loader';
import { delay } from '@/utils';
import toast from 'react-hot-toast';
import { saveCartData } from '@/actions';

const AddTocartButton = ({ product }: { product: any }) => {
    const { ProductaddToCart, cart } = useCartStore();
    const [isLoading, setIsLoading] = useState(false)

    let payload = { ...product, quantity: 1 }

    const saveDb = async () => {
        setIsLoading(true);
        ProductaddToCart(payload);
        let data = await delay(300);
        setIsLoading(false);
        toast.success("product added successfully")
        let res = await saveCartData(cart)

    }

    return (
        <div>
            {
                isLoading && <Loader />
            }
            <button className="bg-blue-600 text-white px-4 py-3 w-[150px] rounded-md hover:bg-blue-700 disabled:bg-blue-950" disabled={isLoading} onClick={saveDb}>
                Add to Cart
            </button>
        </div>
    )
}

export default AddTocartButton