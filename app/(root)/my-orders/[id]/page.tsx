import React from 'react'

const OrderDetails = () => {
    return (
        <section className="py-24 relative">
            <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
                <h2 className="font-manrope font-bold text-3xl sm:text-4xl leading-10 text-white mb-11">
                    Your Order Confirmed
                </h2>
                <h6 className="font-medium text-xl leading-8 text-white mb-3">
                    Hello, Christine
                </h6>
                <p className="font-normal text-lg leading-8 text-gray-500 mb-11">
                    Your order has been completed and be delivery in only two days .
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8 py-6 border-y border-gray-100 mb-6">
                    <div className="box group">
                        <p className="font-normal text-base leading-7 text-gray-500 mb-3 transition-all duration-500 group-hover:text-gray-700">
                            Delivery Date
                        </p>
                        <h6 className="font-semibold font-manrope text-2xl leading-9 text-white">
                            Dec 01, 2023
                        </h6>
                    </div>
                    <div className="box group">
                        <p className="font-normal text-base leading-7 text-gray-500 mb-3 transition-all duration-500 group-hover:text-gray-700">
                            Order
                        </p>
                        <h6 className="font-semibold font-manrope text-2xl leading-9 text-white">
                            #1023498789
                        </h6>
                    </div>
                    <div className="box group">
                        <p className="font-normal text-base leading-7 text-gray-500 mb-3 transition-all duration-500 group-hover:text-gray-700">
                            Payment Method
                        </p>
                        <h1 className="font-semibold text-lg text-blue-400">CASH ON DELIVERY</h1>
                    </div>
                    <div className="w-full">
                        <p className="font-normal text-base leading-7 text-gray-500 mb-3 transition-all duration-500 group-hover:text-gray-700">
                            Delivery Address
                        </p><p className="text-lg font-medium text-white whitespace-normal">
                            zas-complex, signboard,narayangong
                        </p>
                    </div>



                </div>
                <div className="grid grid-cols-7 w-full pb-6 border-b border-gray-100">
                    <div className="col-span-7 min-[500px]:col-span-2 md:col-span-1">
                        <img
                            src="https://pagedone.io/asset/uploads/1701167681.png"
                            alt="Skin Care Kit image"
                            className="w-full rounded-xl"
                        />
                    </div>
                    <div className="col-span-7 min-[500px]:col-span-5 md:col-span-6 min-[500px]:pl-5 max-sm:mt-5 flex flex-col justify-center">
                        <div className="flex flex-col min-[500px]:flex-row min-[500px]:items-center justify-between">
                            <div className="">
                                <h5 className="font-manrope font-semibold text-2xl leading-9 text-white mb-6">
                                    Skin Care Kit
                                </h5>
                                <p className="font-normal text-xl leading-8 text-gray-500">
                                    Quantity : <span className="text-white font-semibold">1</span>
                                </p>
                            </div>
                            <h5 className="font-manrope font-semibold text-3xl leading-10 text-white sm:text-right mt-3">
                                $325.00
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-7 w-full py-6 border-b border-gray-100">
                    <div className="col-span-7 min-[500px]:col-span-2 md:col-span-1">
                        <img
                            src="https://pagedone.io/asset/uploads/1701167697.png"
                            alt="Skin Tone Serum image"
                            className="w-full rounded-xl"
                        />
                    </div>
                    <div className="col-span-7 min-[500px]:col-span-5 md:col-span-6 min-[500px]:pl-5 max-sm:mt-5 flex flex-col justify-center">
                        <div className="flex flex-col min-[500px]:flex-row min-[500px]:items-center justify-between">
                            <div className="">
                                <h5 className="font-manrope font-semibold text-2xl leading-9 text-white mb-6">
                                    Skin Tone Serum
                                </h5>
                                <p className="font-normal text-xl leading-8 text-gray-500">
                                    Quantity : <span className="text-white font-semibold">1</span>
                                </p>
                            </div>
                            <h5 className="font-manrope font-semibold text-3xl leading-10 text-white sm:text-right mt-3">
                                $325.00
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center sm:justify-end w-full my-6">
                    <div className=" w-full">
                        <div className="flex items-center justify-between mb-6">
                            <p className="font-normal text-xl leading-8 text-gray-500">
                                Subtotal
                            </p>
                            <p className="font-semibold text-xl leading-8 text-gray-900">
                                $240.00
                            </p>
                        </div>
                        <div className="flex items-center justify-between mb-6">
                            <p className="font-normal text-xl leading-8 text-gray-500">
                                Shipping Charge
                            </p>
                            <p className="font-semibold text-xl leading-8 text-gray-900">
                                $60.00
                            </p>
                        </div>
                        <div className="flex items-center justify-between mb-6">
                            <p className="font-normal text-xl leading-8 text-gray-500">Taxes</p>
                            <p className="font-semibold text-xl leading-8 text-gray-900">
                                $50.00
                            </p>
                        </div>
                        <div className="flex items-center justify-between mb-6">
                            <p className="font-normal text-xl leading-8 text-gray-500">
                                Discount
                            </p>
                            <p className="font-semibold text-xl leading-8 text-gray-900">
                                $50.00
                            </p>
                        </div>
                        <div className="flex items-center justify-between py-6 border-y border-gray-100">
                            <p className="font-manrope font-semibold text-2xl leading-9 text-gray-900">
                                Total
                            </p>
                            <p className="font-manrope font-bold text-2xl leading-9 text-indigo-600">
                                $300.00
                            </p>
                        </div>
                    </div>
                </div>
                <div className="data ">
                    <p className="font-normal text-lg leading-8 text-gray-500 mb-11">
                        {"  We'll be sending a shipping confirmation email when the items shipped successfully."}
                    </p>
                    <h6 className="font-manrope font-bold text-2xl leading-9 text-white mb-3">
                        Thank you for shopping with us!
                    </h6>
                    <p className="font-medium text-xl leading-8 text-indigo-600">
                        Team Pagedone
                    </p>
                </div>
            </div>
        </section>
    )
}

export default OrderDetails