"use client"
import { formatePrice } from '@/utils';
import { useCartStore } from '@/zustant-store/useCartStore'
import Link from 'next/link';
import React from 'react'

const CartSubtotalCard = () => {
    const { cart, totalAmount } = useCartStore();
    return (
        <div className={` h-min bg-zinc-950 rounded-md p-6 mt-5 w-[400px] ml-auto ${cart.length === 0 && "hidden"}`}>
            <div>
                <h1 className="text-xl text-zinc-400">Cart Totals</h1>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-neutral-700">
                <span className="text-lg text-zinc-400">Subtotal </span>
                <span className="text-lg text-blue-600 ">{formatePrice(totalAmount)}.00 BDT</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-neutral-700">
                <span className="text-lg text-zinc-400">Shipping Cost </span>
                <span className="text-lg text-blue-600 ">100 Tk</span>
            </div>

            <div className="flex items-center justify-between py-3 ">
                <span className="text-lg text-zinc-400">Total</span>
                <span className="text-lg text-blue-600">
                    {formatePrice(totalAmount + 100)}.00 BDT
                </span>
            </div>
            <Link href={"/checkout"} className="p-2 text-center w-full rounded-md bg-blue-600 cursor-pointer mt-3 inline-block">
                Proceed To Checkout
            </Link>
        </div>
    )
}

export default CartSubtotalCard