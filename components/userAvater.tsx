//@ts-nocheck
"use server"
import { verify } from 'jsonwebtoken';
import { cookies } from 'next/headers'
import Link from 'next/link';
import React from 'react'

const UserAvater = async () => {
    const cookieStore = cookies();
    const token = cookieStore.get("auth-token")?.value;
    let { userData } = await verify(token!, process.env.JWT_SECRET!);
    console.log(userData);


    return (
        <div className=' bg-gray-100 md:flex hidden items-center justify-center rounded-full dark:bg-zinc-900 dark:text-white'  >
            <img src={userData.profilePicture} alt="" className='w-10 rounded-full cursor-pointer' />

        </div>
    )
}

export default UserAvater