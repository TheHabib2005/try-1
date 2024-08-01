
import { useCartStore } from '@/zustant-store/useCartStore';
import Link from 'next/link';
import React from 'react'
import { formatePrice } from '@/utils';
import UpdateCartButton from './UpdateCartButton';

const CartItem = ({ item }: { item: any }) => {




    return (
        <div className="grid grid-cols-12 py-3 border-t border-neutral-800 items-center">
            <div className="col-span-8 text-center flex items-center gap-6">
                <UpdateCartButton
                    className="" disabled={false}
                    action='REMOVE_ITEM'
                    payload={item._id}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                        />
                    </svg>
                </UpdateCartButton>
                <div>
                    <img
                        src={item.thumbnail}
                        className="w-[70px]"
                        alt=""
                    />
                </div>
                <div className='flex flex-col items-start justify-start'>
                    <Link href={"/"} className="text-left text-lg font-semibold text-zinc-400">
                        {item.title}


                    </Link>
                    <button className='text-bold text-zinc-300 mt-1 text-lg opacity-70 hover:opacity-100'>{item.brand}</button>
                </div>
            </div>
            <div className="col-span-2  text-center">
                <span className='text-lg font-semibold text-zinc-400'>
                    Tk {formatePrice(item.price)}.00 </span>
            </div>
            <div className="col-span-2  text-center">
                <div className="w-full flex items-center justify-center gap-2">


                    <UpdateCartButton
                        className="w-9 h-9  rounded-md bg-zinc-900 flex items-center justify-center" disabled={item.quantity > 1 ? false : true}
                        action='DECREMENT_QUANTITY'
                        payload={item._id}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                            className="h-4 w-4 text-white"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 12h14"
                            />
                        </svg>
                    </UpdateCartButton>

                    <span className="text-xl text-zinc-400">{item.quantity}</span>
                    <UpdateCartButton
                        className="w-9 h-9  rounded-md bg-zinc-900 flex items-center justify-center" disabled={false}
                        action='INCREMENT_QUANTITY'
                        payload={item._id}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                            className="h-4 w-4 text-white"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4.5v15m7.5-7.5h-15"
                            />
                        </svg>
                    </UpdateCartButton>
                </div>
            </div>

        </div>
    )
}

export default CartItem