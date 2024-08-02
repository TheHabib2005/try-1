"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { MdLogout } from 'react-icons/md';
import { types } from 'util'
import LogoutButton from './LogoutButton';
interface ProfilePopupProps {
    username: string;
    profilePicture: string;
    email: string;
}
const ProfilePupup: React.FC<ProfilePopupProps> = ({ username, profilePicture, email }) => {
    const [openModel, setOpenModel] = useState(false)
    return (
        <div className=' bg-gray-100 md:flex hidden items-center justify-center rounded-full dark:bg-zinc-900 dark:text-white relative'  >
            <div className='' onClick={() => {
                setOpenModel(!openModel)
            }}>
                <img src={profilePicture} alt="" className='w-10 rounded-full cursor-pointer' />
            </div>
            {openModel && <div className='absolute top-[150%] bg-zinc-900/50 z-50 mx-auto w-[250px]  rounded-md py-3'>

                <div className='   w-full border-b p-3 border-zinc-700 gap-1'>
                    <div className='mb-3 flex items-center justify-center'>
                        <img src={profilePicture} alt="" className='w-16 rounded-full cursor-pointer' />
                    </div>
                    <div className='text-center'>
                        <h1 className='text-md'>{username}</h1>
                        <p className=''>{email}</p>
                        <Link href={"/profile"} className='text-primary'>view profile</Link>
                    </div>
                </div>

                <div className='flex items-start flex-col p-3 gap-y-2 border-b border-zinc-700'>
                    <Link href={"/wishList"} className='bg-zinc-800/30 hover:bg-zinc-800 transition-all w-full flex p-2 rounded-md'>See WishList</Link>
                    <Link href={"/wishList"} className='bg-zinc-800/30 hover:bg-zinc-800 transition-all w-full flex p-2 rounded-md'>My Orders</Link>


                </div>

                <div className='p-3'>
                    <LogoutButton />
                </div>


            </div>}
        </div>

    )
}

export default ProfilePupup