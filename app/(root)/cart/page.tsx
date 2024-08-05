
import CartItemWrapper from "@/components/carts-components/CartItemWrapper";
import CartSubtotalCard from "@/components/carts-components/CartSubtotalCard";
import { delay, formatePrice } from "@/utils";
import { useCartStore } from "@/zustant-store/useCartStore";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { animated, useSpring } from 'react-spring';

const CartPage = async () => {
  return (
    <section className="w-full px-4 ">

      <div className=" w-full  ">


        <CartItemWrapper />

        <CartSubtotalCard />
      </div>





    </section>
  );
};

export default CartPage;




