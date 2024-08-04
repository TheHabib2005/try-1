"use client"

import { useCartStore } from "@/zustant-store/useCartStore";
import Link from "next/link";
import React from "react";
import CheckoutForm from "./CheckoutForm";
import CheckoutOrderDetails from "@/components/CheckoutOrder-details";
import ReceviceOrder from "./ReceviceOrder";
import useCheckoutProduct from "@/hooks/useCheckoutProduct";


const CheckoutPageComponenet = () => {
    const { cart, totalAmount } = useCartStore()
    const { placeOrder } = useCheckoutProduct()
    console.log(placeOrder);

    return (
        <div className="font-[sans-serif] bg-black  ">
            {
                cart.length > 0 ? <div className="w-full   lg:grid  flex flex-col-reverse lg:grid-cols-7  ">
                    <CheckoutForm />
                    <CheckoutOrderDetails />
                </div> : (placeOrder ? <ReceviceOrder /> : <div className="text-xl text-white font-bold text-center p-6">
                    <h1>No Product Found 😊</h1>
                    <p className="font-semibold text-zinc-500 capitalize mt-3 text-sm">please frist choose a Product then checkout </p>
                </div>)
            }
            {/* <ReceviceOrder /> */}
        </div>
    );
};

export default CheckoutPageComponenet;
