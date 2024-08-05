import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import GoogleLoginButton from './GoogleLoginButton'
import logo from "../public/logo-icon.png"
import Login from './Btn'
const GoogleSigninForm = () => {
    return (
        <main className='w-full h-screen flex items-center  p-4'>
            <div className='sm:max-w-[400px] w-full sm:p-7 p-5 bg-zinc-950 rounded-md  mx-auto h-auto flex items-center justify-center flex-col'>
                <Link href={"/"}>
                    <Image
                        width={100}
                        height={100}
                        src={logo}
                        alt='app-icon'
                    /></Link>
                <div className='mt-6 text-center'>
                    <h1 className='text-2xl my-1 font-semibold '>Sign in to <span className='text-blue-600'>SlideHub</span></h1>
                    <p className='text-lg font-semibold text-gray-400'>welcome back! please sign in continue</p>
                </div>
                <GoogleLoginButton />
            </div>
            <Login />
        </main>
    )
}

export default GoogleSigninForm