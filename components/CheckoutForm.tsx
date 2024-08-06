import { useCartStore } from "@/zustant-store/useCartStore";
import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import InputFeild from "./InputFeild";
import { Span } from "next/dist/trace";
import { checkoutFormSchema } from "@/helpers/yup-Schema";
import useCheckoutProduct from "@/hooks/useCheckoutProduct";
import Loader from "./Loader";

const CheckoutForm = () => {
    const { handleChange, handleSubmit, errors, values, touched, handleBlur, loading, placeOrder } = useCheckoutProduct()
    return (
        <form className="col-span-4  p-6 max-w-full " onSubmit={handleSubmit}>
            {loading && <Loader />}
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
                        name="contact"
                        onChange={handleChange}
                        value={values.contact}
                        onBlur={handleBlur}
                    />
                    {errors.contact && touched.contact && <span className="text-red-500 capitalize font-semibold mt-2 inline-flex">{errors.contact}</span>}
                </div>

                <div className="relative mt-4">
                    <span className="text-md text-zinc-500 mb-2 inline-flex z-10">
                        Enter your username
                    </span>
                    <input
                        type="text"
                        className="w-full p-3 bg-transparent outline-0 border border-zinc-800 rounded-md focus:border-blue-800 text-white"
                        name="username"
                        onChange={handleChange}
                        value={values.username}
                        onBlur={handleBlur}
                    />
                    {errors.username && touched.username && <span className="text-red-500 capitalize font-semibold mt-2 inline-flex">{errors.username}</span>}
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
                        name="address"
                        onChange={handleChange}
                        value={values.address}
                        onBlur={handleBlur}
                    />
                    {errors.address && touched.address && <span className="text-red-500 capitalize font-semibold mt-2 inline-flex">{errors.address}</span>}
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
                >
                    Place Order
                </button>
            </div>
        </form>
    );
};

export default CheckoutForm;
