"use client"
import { useCartStore } from '@/zustant-store/useCartStore'
import React, { FC, ReactNode, useState } from 'react'
import Loader from '../Loader'
import { delay } from '@/utils'
import toast from 'react-hot-toast'
interface Props {
    className: string
    children: ReactNode
    action: "INCREMENT_QUANTITY" | "DECREMENT_QUANTITY" | "REMOVE_ITEM"
    payload: string
    disabled: boolean
}
const UpdateCartButton: FC<Props> = ({ disabled, payload, className, action, children }) => {
    const [isLoading, setIsLoading] = useState(false)

    const { removeFromCart, incrementQuantity, decrementQuantity } = useCartStore()


    const handleClick = async () => {
        setIsLoading(true);
        let data = await delay(300);
        switch (action) {
            case "INCREMENT_QUANTITY":
                incrementQuantity(payload)
                toast.success("Cart Updated Successfully")
                setTimeout(() => {
                    alert("data updated successfully")
                }, 9000)
                break
            case "DECREMENT_QUANTITY":
                decrementQuantity(payload)
                toast.success("Cart Updated Successfully")
                break
            case "REMOVE_ITEM":
                removeFromCart(payload)
                toast.success("Product Remove Successfully")

            default:
                break;
        }
        setIsLoading(false);
    }
    return (
        <>
            {
                isLoading && <Loader />
            }
            <button className={className} disabled={disabled} onClick={handleClick}>
                {children}
            </button>
        </>
    )
}

export default UpdateCartButton