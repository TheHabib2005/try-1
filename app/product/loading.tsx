import React from 'react'

const loading = () => {
    return (

        <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-5 w-full'>
            {


                Array(12).fill("").map((_, index) => {
                    return <div className="mx-auto mt-11 w-80 animate-pulse  bg-zinc-900 dark:bg-zinc-800 shadow-md rounded-md" key={index}>
                        <div className="h-48 w-full bg-gray-300 dark:bg-zinc-900 rounded-md"></div>
                        <div className="p-4 bg-zinc-950">
                            <div className="h-6 bg-gray-300 dark:bg-zinc-900 mb-4 rounded"></div>
                            <div className="h-4 bg-gray-300 dark:bg-zinc-900 mb-2 rounded"></div>
                            <div className="h-4 bg-gray-300 dark:bg-zinc-900 mb-2 rounded"></div>
                            <div className="flex items-center space-x-2 mt-2">
                                <div className="h-6 w-20 bg-gray-300 dark:bg-zinc-900 rounded"></div>
                                <div className="h-6 w-14 bg-gray-300 dark:bg-zinc-900 rounded"></div>
                                <div className="ml-auto h-6 w-12 bg-gray-300 dark:bg-zinc-900 rounded"></div>
                            </div>
                        </div>
                    </div>

                })

            }
        </div>

    )
}

export default loading