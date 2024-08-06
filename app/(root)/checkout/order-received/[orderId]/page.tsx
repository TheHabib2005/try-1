import { getOrderDetails, getUser } from '@/actions';
import { formateDate } from '@/utils';
import React from 'react'

const ConfirmOrderDetails = async ({ params }: { params: any }) => {
    let { username } = await getUser()
    let { order } = await getOrderDetails(params.orderId)

    return (
        <section className="py-24 relative">
            <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
                <h2 className="font-manrope font-bold text-3xl sm:text-4xl leading-10 text-white mb-11">
                    Your Order Confirmed
                </h2>
                <h6 className="font-medium text-xl leading-8 text-white mb-3">
                    Hello, {username}
                </h6>
                <p className="font-normal text-lg leading-8 text-gray-500 mb-11">
                    Your order has been completed and be delivery in only two days .
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8 py-6 border-y border-gray-100 mb-6">
                    <div className="box group">
                        <p className="font-normal text-base leading-7 text-gray-500 mb-3 transition-all duration-500 group-hover:text-gray-700">
                            Delivery Date
                        </p>
                        <h6 className="font-semibold font-manrope text-xl leading-9 text-white">
                            {formateDate(order[0].createdAt)}
                        </h6>
                    </div>
                    <div className="box group">
                        <p className="font-normal text-base leading-7 text-gray-500 mb-3 transition-all duration-500 group-hover:text-gray-700">
                            Order
                        </p>
                        <h6 className="font-semibold font-manrope text-xl leading-9 text-white">
                            # {order[0].orderId}
                        </h6>
                    </div>
                    <div className="box group">
                        <p className="font-normal text-base leading-7 text-gray-500 mb-3 transition-all duration-500 group-hover:text-gray-700">
                            Payment Method
                        </p>
                        <h1 className=' text-lg'>CASH ON DELIVERY</h1>
                    </div>
                    <div className="box group">
                        <p className="font-normal text-base leading-7 text-gray-500 mb-3 transition-all duration-500 group-hover:text-gray-700">
                            Address
                        </p>
                        <h6 className="font-semibold font-manrope text-xl leading-9 text-white">
                            {
                                order[0].deliveryInformation.address
                            }
                        </h6>
                        <p> username:{order[0].deliveryInformation.username}</p>
                        <p>  contact:{order[0].deliveryInformation.contact}</p>

                    </div>
                </div>
                {
                    order[0].products.map((product: any, index: number) => {
                        return <div className="grid grid-cols-7 w-full pb-6 border-b border-gray-100" key={index}>
                            <div className="col-span-7 min-[500px]:col-span-2 md:col-span-1">
                                <img
                                    src={product.thumbnail}
                                    alt="Skin Care Kit image"
                                    className="w-[100px]"
                                />
                            </div>
                            <div className="col-span-7 min-[500px]:col-span-5 md:col-span-6 min-[500px]:pl-5 max-sm:mt-5 flex flex-col justify-center">
                                <div className="flex flex-col min-[500px]:flex-row min-[500px]:items-center justify-between">
                                    <div className="">
                                        <h5 className="font-manrope font-semibold text-xl leading-9 text-white mb-6">
                                            {product.title}
                                        </h5>
                                        <p className="font-normal text-xl leading-8 text-gray-500">
                                            Quantity : <span className="text-white font-semibold">{product.quantity}</span>
                                        </p>
                                    </div>
                                    <h5 className="font-manrope font-semibold text-2xl leading-10 text-white sm:text-right mt-3">
                                        Tk {product.price}.00
                                    </h5>
                                </div>
                            </div>
                        </div>
                    })
                }

                <div className="flex items-center justify-center sm:justify-end w-full my-6">
                    <div className=" w-full">
                        <div className="flex items-center justify-between mb-6">
                            <p className="font-normal text-xl leading-8 text-gray-500">
                                Subtotal
                            </p>
                            <p className="font-semibold text-xl leading-8 text-gray-200">
                                Tk {order[0].totalAmount - 90}.00
                            </p>
                        </div>
                        <div className="flex items-center justify-between mb-6">
                            <p className="font-normal text-xl leading-8 text-gray-500">
                                Shipping Charge
                            </p>
                            <p className="font-semibold text-xl leading-8 text-gray-200">
                                Tk 90.00
                            </p>
                        </div>

                        <div className="flex items-center justify-between py-6 border-y border-gray-100">
                            <p className="font-manrope font-semibold text-xl leading-9 text-gray-200">
                                Total
                            </p>
                            <p className="font-manrope font-bold text-xl leading-9 text-indigo-600">
                                Tk {order[0].totalAmount + 90}.00
                            </p>
                        </div>
                    </div>
                </div>
                <div className="data ">
                    <p className="font-normal text-lg leading-8 text-gray-500 mb-11">
                        {" We'll be sending a shipping confirmation email when the items shipped successfully"}
                    </p>
                    <h6 className="font-manrope font-bold text-xl leading-9 text-white mb-3">
                        Thank you for shopping with us!
                    </h6>
                </div>
            </div>
        </section>

    )
}

export default ConfirmOrderDetails