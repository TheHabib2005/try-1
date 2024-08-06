
import { useCartStore } from "@/zustant-store/useCartStore";
import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Span } from "next/dist/trace";
import { checkoutFormSchema } from "@/helpers/yup-Schema";
import { delay } from "@/utils";
import toast from "react-hot-toast";
import { cookies } from "next/headers";
import useGetUser from "./useGetUser";

const useCheckoutProduct = () => {
    console.log(process.env.BACKEND_URL!);

    const userData = useGetUser()
    console.log(userData);

    const { cart, totalAmount, clearCart } = useCartStore();
    const [loading, setLoading] = useState(false)
    const [placeOrder, setPlaceOrder] = useState(false)
    let orderId = Math.round(Math.random() * 10000).toString()
    const { handleChange, handleSubmit, errors, values, touched, handleBlur } = useFormik({
        initialValues: {
            contact: '',
            username: '',
            address: '',
        },
        validationSchema: checkoutFormSchema,
        onSubmit: async (values, { setSubmitting }) => {
            try {
                setLoading(true)
                let orderPayload = {
                    userId: userData._id,
                    orderId,
                    products:
                        cart.map((item) => {
                            return {
                                productId: item._id,
                                title: item.title,
                                price: item.price,
                                thumbnail: item.thumbnail,
                                quantity: item.quantity,
                            }
                        })
                    ,
                    totalAmount: totalAmount + 100,
                    paymentMethod: "cod",
                    orderStatus: "prossesing",
                    deliveryInformation: {
                        address: values.address,
                        contact: values.contact,
                        username: values.username,
                    }
                }
                const response = await axios.post(`https://mern-24.onrender.com/order/create`, orderPayload);

                if (response.data.success) {
                    toast.success("Order placed successfully");
                    window.location.href = `/checkout/order-received/${orderPayload.orderId}`
                    clearCart()
                    setLoading(true)
                }


            } catch (error) {
                console.error(error);
                alert("Failed to place order");
                setLoading(false);
            }
        }


    })
    return { handleChange, handleSubmit, errors, values, touched, handleBlur, loading, placeOrder }
}

export default useCheckoutProduct