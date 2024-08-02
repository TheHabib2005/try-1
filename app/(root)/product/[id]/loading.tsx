import { delay } from '@/utils'
import React from 'react'

const loading = async () => {
    return (
        <section className="text-zinc-300 body-font overflow-hidden animate-pulse">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 w-full h-96 bg-gray-300 dark:bg-zinc-900 rounded "></div>
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <div className="h-6 bg-gray-300 dark:bg-zinc-900 mb-4 rounded"></div>
                        <div className="h-8 bg-gray-300 dark:bg-zinc-900 mb-4 rounded"></div>
                        <div className="flex mb-4">
                            <div className="h-4 bg-gray-300 dark:bg-zinc-900 rounded w-1/4"></div>
                            <div className="h-4 bg-gray-300 dark:bg-zinc-900 rounded w-1/4 ml-3"></div>
                        </div>
                        <div className="h-20 bg-gray-300 dark:bg-zinc-900 mb-4 rounded"></div>
                        <div className="flex mt-5">
                            <div className="h-8 bg-gray-300 dark:bg-zinc-900 rounded w-1/3"></div>
                            <div className="h-10 bg-gray-300 dark:bg-zinc-900 rounded w-1/3 ml-auto"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default loading