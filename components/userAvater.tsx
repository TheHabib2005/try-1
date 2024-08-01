import { cookies } from 'next/headers'
import Link from 'next/link';
import React from 'react'

const UserAvater = () => {

    return (
        <div className=' bg-gray-100 md:flex hidden items-center justify-center rounded-full dark:bg-zinc-900 dark:text-white'  >
            <img src="https://lh3.googleusercontent.com/a/ACg8ocLQPv7EAeTXCo0fTN0G9TG4CCCzm0uMgdDSrQ91_49fl50ikixm=s96-c" alt="" className='w-10 rounded-full cursor-pointer' />

        </div>
    )
}

export default UserAvater