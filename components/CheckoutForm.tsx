import { useCartStore } from "@/zustant-store/useCartStore";
import axios from "axios";
import React from "react";

const CheckoutForm = () => {
    const { cart, totalAmount } = useCartStore()
    return (
        <div className="col-span-4  p-6 max-w-full ">
            <h1 className="text-2xl my-5 text-white font-semibold  text-center">
                Checkout Form
            </h1>
            <div>
                <h1 className="text-xl text-white font-semibold font-sans">Contact</h1>
                <div className="relative mt-4">
                    <span className="text-md text-zinc-500 mb-2 inline-flex z-10">
                        Email or mobile phone number
                    </span>
                    <input
                        type="text"
                        className="w-full p-3 bg-transparent outline-0 border border-zinc-800 rounded-md focus:border-blue-800 text-white"
                    />
                </div>
                <div className="relative mt-4">
                    <span className="text-md text-zinc-500 mb-2 inline-flex z-10">
                        Enter your username
                    </span>
                    <input
                        type="text"
                        className="w-full p-3 bg-transparent outline-0 border border-zinc-800 rounded-md focus:border-blue-800 text-white"
                    />
                </div>
            </div>
            <div className="mt-8">
                <h1 className="text-xl text-white font-semibold font-sans">
                    Shipping address
                </h1>

                <div className="relative mt-4">
                    <span className="text-md text-zinc-500 mb-2 inline-flex z-10">
                        Full Address
                    </span>
                    <input
                        type="text"
                        className="w-full p-3 bg-transparent outline-0 border border-zinc-800 rounded-md focus:border-blue-800 text-white"
                        placeholder="area-state-country"
                    />
                </div>

                <div className="relative mt-4">
                    <span className="text-md text-zinc-500 mb-2 inline-flex z-10">
                        Payment Method
                    </span>

                    <div className="flex items-center gap-x-2 ">
                        <input type="radio" checked={true} name="" id="cod" />
                        <label
                            htmlFor="cod"
                            className="text-white font-semibold text-md cursor-pointer"
                        >
                            {" "}
                            Cash on delivery
                        </label>
                    </div>
                </div>

                <button
                    className="w-full mt-10 p-4 cursor-pointer rounded-md bg-blue-700 hover:bg-blue-900 text-white font-semibold"
                    onClick={async () => {
                        let product = {
                            userId: "66ae33cf86f7df652eec97a3",
                            productId: "123456r",
                            product:

                                cart.map((item) => {
                                    return {
                                        title: item.title,
                                        price: item.price,
                                        thumbnail: item.thumbnail,
                                        quantity: item.quantity,
                                    }
                                })


                            ,
                            totalAmount: totalAmount,
                            paymentMethod: "cod",
                            orderStatus: "prossesing",
                            deliveryAddress: "signboard",
                        };


                        try {
                            let res = await axios.post("http://localhost:8000/order/create", product)
                            console.log(res.data);
                        } catch (error) {
                            console.log(error);

                        }

                    }}
                >
                    Place Order
                </button>
            </div>
        </div>
    );
};

export default CheckoutForm;
