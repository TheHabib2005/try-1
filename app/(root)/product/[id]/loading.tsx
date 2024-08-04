import { delay } from '@/utils'
import React from 'react'

const loading = async () => {
    return (
        <section className="text-zinc-300 body-font overflow-hidden animate-pulse">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    {/* Image Skeleton */}
                    <div className="lg:w-1/2 w-full h-96 bg-gray-300 dark:bg-zinc-900 rounded"></div>

                    {/* Content Skeleton */}
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        {/* Small Text Skeleton */}
                        <div className="h-6 bg-gray-300 dark:bg-zinc-900 mb-4 rounded"></div>

                        {/* Title Skeleton */}
                        <div className="h-8 bg-gray-300 dark:bg-zinc-900 mb-4 rounded"></div>

                        {/* Rating and other details Skeleton */}
                        <div className="flex mb-4">
                            <div className="h-4 bg-gray-300 dark:bg-zinc-900 rounded w-1/4"></div>
                            <div className="h-4 bg-gray-300 dark:bg-zinc-900 rounded w-1/4 ml-3"></div>
                        </div>

                        {/* Description Skeleton */}
                        <div className="h-20 bg-gray-300 dark:bg-zinc-900 mb-4 rounded"></div>

                        {/* Price and Add to Cart Skeleton */}
                        <div className="flex mt-5">
                            <div className="h-8 bg-gray-300 dark:bg-zinc-900 rounded w-1/3"></div>
                            <div className="h-10 bg-gray-300 dark:bg-zinc-900 rounded w-1/3 ml-auto"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8 border-t border-gray-800 pt-4 animate-pulse">
                <h3 className="text-xl text-gray-700 font-medium mb-4">Customer Reviews</h3>

                {/* Skeleton for reviews */}
                <div className="flex items-start gap-8 md:flex-row flex-col">
                    <div className="flex-1">
                        {/* Skeleton for individual review */}
                        <div className="flex items-start mb-6">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-zinc-900"></div>
                            </div>
                            <div className="ml-3 flex-1">
                                <div className="h-4 bg-gray-300 dark:bg-zinc-900 rounded mb-2 w-3/4"></div>
                                <div className="h-4 bg-gray-300 dark:bg-zinc-900 rounded w-1/2"></div>
                            </div>
                        </div>
                        {/* Repeat the skeleton for more reviews */}
                        <div className="flex items-start mb-6">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-zinc-900"></div>
                            </div>
                            <div className="ml-3 flex-1">
                                <div className="h-4 bg-gray-300 dark:bg-zinc-900 rounded mb-2 w-3/4"></div>
                                <div className="h-4 bg-gray-300 dark:bg-zinc-900 rounded w-1/2"></div>
                            </div>
                        </div>
                        <div className="flex items-start mb-6">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-zinc-900"></div>
                            </div>
                            <div className="ml-3 flex-1">
                                <div className="h-4 bg-gray-300 dark:bg-zinc-900 rounded mb-2 w-3/4"></div>
                                <div className="h-4 bg-gray-300 dark:bg-zinc-900 rounded w-1/2"></div>
                            </div>
                        </div>
                    </div>

                    {/* Skeleton for "Write a Review" form */}
                    <div className="flex-1 md:px-8 px-4">
                        <div className="h-6 bg-gray-300 dark:bg-zinc-900 rounded mb-4 w-1/2"></div>
                        <div className="flex flex-col items-start gap-3">
                            <div className="h-12 bg-gray-300 dark:bg-zinc-900 rounded w-full mb-4"></div>
                            <div className="h-10 bg-gray-300 dark:bg-zinc-900 rounded w-1/3"></div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default loading