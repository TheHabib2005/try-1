import { useCartStore } from "@/zustant-store/useCartStore";
import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Span } from "next/dist/trace";
import { checkoutFormSchema } from "@/helpers/yup-Schema";
import { delay } from "@/utils";
import toast from "react-hot-toast";

const useCheckoutProduct = () => {
    const { cart, totalAmount, clearCart } = useCartStore();
    const [loading, setLoading] = useState(false)
    const [placeOrder, setPlaceOrder] = useState(false)

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
                    userId: "66ae33cf86f7df652eec97a3",
                    product:
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
                // const response = await axios.post('https://mern-24.onrender.com/order/create', orderPayload);
                // console.log(response);


                // simulate delay to mimic real API call
                await delay(3000)

                toast.success("Order placed successfully");


                window.location.href = `/confirm-order?${orderPayload.userId}`
                clearCart()

            } catch (error) {
                console.error(error);
                alert("Failed to place order");
            } finally {
                setLoading(false)
            }
        }


    })
    return { handleChange, handleSubmit, errors, values, touched, handleBlur, loading, placeOrder }
}

export default useCheckoutProduct