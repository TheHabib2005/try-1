"use client";
import CartItemWrapper from "@/components/carts-components/CartItemWrapper";
import { formatePrice } from "@/utils";
import { useCartStore } from "@/zustant-store/useCartStore";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { animated, useSpring } from 'react-spring';

const CartPage = () => {
  const { cart, totalAmount } = useCartStore();

  return (
    <section className="w-full px-4 ">
      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full">
          <MdOutlineRemoveShoppingCart className="text-3xl" />
          <h1 className="text-[35px] ">Your cart is currently empty.</h1>

          <p className="w-[70%] text-center my-5">Before proceed to checkout you must add some products to your shopping cart.
            You will find a lot of interesting products on our {"Shop"} page.</p>

          <a href="/products/" className="inline-flex mb-5 bg-blue-600 text-white font-semibold text-lg rounded-md p-3">Continue to Shopping</a>
        </div>
      ) : (
        <div className=" w-full  ">
          <div className="md:col-span-4 col-span-6  bg-[#000000] rounded-md p-4  h-min">
            {/* wrapper  */}

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
            <CartItemWrapper />
          </div>
          <div className="  h-min bg-zinc-950 rounded-md p-6 mt-5 w-[400px] ml-auto">
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
        </div>
      )}




    </section>
  );
};

export default CartPage;




