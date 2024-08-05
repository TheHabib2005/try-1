"use client"
import { useCartStore } from '@/zustant-store/useCartStore'
import React from 'react'
import CartItem from './CartItem'
import { MdOutlineRemoveShoppingCart } from 'react-icons/md'
import { redirect } from 'next/navigation'

const CartItemWrapper = () => {

    const { cart } = useCartStore()
    if (cart.length === 0) {
        return redirect("/")
    }

    return (
        <div className={`md:col-span-4 col-span-6  bg-[#000000] rounded-md p-4  h-min ${cart.length === 0 && "hidden"}`}>

            <div className="grid grid-cols-12">
                <div className="md:col-span-8 col-span-6 text-center pb-3">
                    <span className="font-semibold text-zinc-400">PRODUCT</span>
                </div>
                <div className="md:col-span-2 col-span-3  text-center">
                    <span className="font-semibold text-zinc-400">PRICE</span>
                </div>
                <div className="md:col-span-2 col-span-3 text-center">
                    <span className="font-semibold text-zinc-400">QUANTITY</span>
                </div>
            </div>
            <div>
                {
                    cart.map((product) => {
                        return (
                            <CartItem key={product.id} product={product} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CartItemWrapper