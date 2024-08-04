import { fetchAllOrders, getUser } from "@/actions";
import { delay, formateDate } from "@/utils";
import React from "react";
import { date } from "yup";

const MyOrders = async () => {
    let { userData } = await getUser();


    let data = await fetchAllOrders(userData._id);
    let { orders, success, message } = data

    if (!success) {
        return <div className="text-center p-8  ">
            <div className="text-xl">
                Opps {message} ❌
            </div>
            <span className="text-zinc-400">Refress the web-page </span>
        </div>
    }

    return (
        <section className="py-4 antialiased md:py-10">
            <div>
                <div>
                    <div className="gap-4 sm:flex sm:items-center sm:justify-between">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                            My orders
                        </h2>
                    </div>
                    <div className="mt-5 flow-root sm:mt-3  px-2">
                        {
                            orders.map((order: any) => {
                                return <div className="divide-y divide-gray-200 border border-zinc-900 px-4  dark:divide-gray-700" key={order._id}>
                                    <div className="flex flex-wrap items-center gap-y-4 py-6">
                                        <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                            <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                                                Order ID:
                                            </dt>
                                            <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                                                <a href="#" className="hover:underline">
                                                    #{order.orderId}
                                                </a>
                                            </dd>
                                        </dl>
                                        <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                            <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                                                Date:
                                            </dt>
                                            <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                                                {formateDate(order.createdAt)}
                                            </dd>
                                        </dl>
                                        <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                            <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                                                Price:
                                            </dt>
                                            <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                                                Tk {order.totalAmount}
                                            </dd>
                                        </dl>
                                        <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                            <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                                                Status:
                                            </dt>
                                            <dd className="mt-1.5 inline-flex items-center rounded px-2.5 py-0.5 text-xs font-medium bg-zinc-800 dark:text-white">
                                                {order.orderStatus}
                                            </dd>
                                        </dl>
                                        <div className="w-full grid sm:grid-cols-2 lg:flex lg:w-64 lg:items-center lg:justify-end gap-4">
                                            <a
                                                href="#"
                                                className="flex items-center gap-3 p-3 bg-zinc-900 rounded-md"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="size-4"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                                                    />
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                                    />
                                                </svg>
                                                View details
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyOrders;
