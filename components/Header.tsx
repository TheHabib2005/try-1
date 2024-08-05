"use client"
import Link from 'next/link'

import React, { ReactNode } from 'react'
import SearchBar from './searchBar'
import UserAvater from './userAvater'
import CartBar from './ShoppingCartBar'
import { useCartStore } from '@/zustant-store/useCartStore'
import { useGlobalTempState } from '@/zustant-store/globalTemporyStore'
import { getToken, getUser } from '@/actions'
import useGetUser from '@/hooks/useGetUser'



const Header = ({ children }: { children: ReactNode }) => {

    const { isCartBarOpen, setIsCartBarOpen } = useGlobalTempState()


    const { userData } = useGetUser()



    return (
        <header className='py-6'>

            <div className='flex items-center justify-between '>
                <div className='w-1/3 md:hidden block cursor-pointer '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 dark:text-zinc-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
                <div className=' w-1/3  mx-auto flex items-center '>
                    <Link href={"/"} className=''>
                        <img src="/logo.png" alt="" className='w-[200px]' />
                    </Link>
                    <div className=' xl:flex hidden items-center ml-5 gap-4 text-zinc-700 dark:text-zinc-400'>
                    </div>
                </div>

                <SearchBar className="w-1/3  relative md:block hidden" />
                <div className=' md:w-1/3 flex-1 flex items-center gap-x-6 justify-end'>


                    {children}


                    {/* cart icon */}
                    <div className=' w-11 h-11 bg-[#2563EB] text-white flex  items-center justify-center rounded-full cursor-pointer ' onClick={() => {
                        setIsCartBarOpen(true)
                    }} >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                    </div>
                </div>
            </div>


            <SearchBar className='w-full mt-3 md:hidden block' />

            {isCartBarOpen && <CartBar />}



        </header>
    )
}

export default React.memo(Header)