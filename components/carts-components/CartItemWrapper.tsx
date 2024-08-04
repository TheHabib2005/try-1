"use client"
import { useCartStore } from '@/zustant-store/useCartStore'
import React from 'react'
import CartItem from './CartItem'
import { MdOutlineRemoveShoppingCart } from 'react-icons/md'

const CartItemWrapper = () => {

    const { cart } = useCartStore()

    return (
        <>
            {
                cart.map((product) => {
                    return (
                        <CartItem key={product.id} product={product} />
                    )
                })
            }
        </>
    )
}

export default CartItemWrapper