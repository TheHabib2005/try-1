import React from 'react'

const ReceviceOrder = () => {
    return (
        <div>
            <div className="max-w-4xl mx-auto p-6 bg-zinc-950 shadow-lg mt-10">
                <div className="border-b-2 border-dashed border-green-400 mb-6 pb-6">
                    <h2 className="text-green-600 text-center text-2xl font-semibold mb-2">Thank you. Your order has been received.</h2>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                    <div>
                        <p className="font-semibold">Order number:</p>
                        <p>11135</p>
                    </div>
                    <div>
                        <p className="font-semibold">Date:</p>
                        <p>July 28, 2024</p>
                    </div>
                    <div>
                        <p className="font-semibold">Email:</p>
                        <p>hamida2005@gmail.com</p>
                    </div>
                    <div>
                        <p className="font-semibold">Total:</p>
                        <p>415.00৳</p>
                    </div>
                    <div>
                        <p className="font-semibold">Payment method:</p>
                        <p>Cash on delivery</p>
                    </div>
                </div>

                <p className="mb-6">Pay with cash on delivery.</p>

                <div>
                    <h3 className="font-semibold mb-4 text-xl">Order Details</h3>
                    <div className="border border-zinc-800 p-4 rounded-lg">
                        <div className="flex justify-between items-center mb-4">
                            <div>
                                <p className="font-semibold">React Developer T-shirt - Black, L × 1</p>
                                <p>Color: Black</p>
                                <p>Size: L</p>
                            </div>
                            <div>
                                <p className="text-blue-500">350.00৳</p>
                            </div>
                        </div>

                        <div className="flex justify-between items-center mb-2">
                            <p>Subtotal:</p>
                            <p className="text-blue-500">350.00৳</p>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                            <p>Shipping:</p>
                            <p className="text-blue-500">65.00৳ via Flat rate</p>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                            <p>Payment method:</p>
                            <p>Cash on delivery</p>
                        </div>
                        <div className="flex justify-between items-center font-semibold">
                            <p>Total:</p>
                            <p className="text-blue-500">415.00৳</p>
                        </div>
                    </div>
                </div>
            </div></div>
    )
}

export default ReceviceOrder