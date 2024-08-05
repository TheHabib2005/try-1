"use client"

import { useCartStore } from "@/zustant-store/useCartStore";
import Link from "next/link";
import React from "react";
import CheckoutForm from "./CheckoutForm";
import CheckoutOrderDetails from "@/components/CheckoutOrder-details";
import ReceviceOrder from "./ReceviceOrder";
import useCheckoutProduct from "@/hooks/useCheckoutProduct";
import Image from "next/image";


const CheckoutPageComponenet = () => {
    const { cart, totalAmount } = useCartStore()
    const { placeOrder } = useCheckoutProduct()

    return (
        <div className="font-[sans-serif] bg-black  ">
            {
                cart.length > 0 ? <div className="w-full   lg:grid  flex flex-col-reverse lg:grid-cols-7  ">
                    <CheckoutForm />
                    <CheckoutOrderDetails />
                </div> : <div>no product found</div>
            }
            {/* <ReceviceOrder /> */}
        </div>


    );
};

export default CheckoutPageComponenet;
