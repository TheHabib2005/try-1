import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import GoogleLoginButton from './GoogleLoginButton'

const GoogleSigninForm = () => {
    return (
        <main className='w-full h-screen flex items-center  p-4'>
            <div className='sm:max-w-[400px] w-full sm:p-7 p-5 bg-zinc-950 rounded-md  mx-auto h-auto flex items-center justify-center flex-col'>
                <Link href={"/"}>
                    <Image
                        width={80}
                        height={80}
                        src={"/app-icon.png"}
                        alt='app-icon'
                    /></Link>
                <div className='mt-6 text-center'>
                    <h1 className='text-2xl my-1 font-semibold uppercase'>Sign in to MYSHOPBD</h1>
                    <p className='text-lg font-semibold text-gray-400'>welcome back! please sign in continue</p>
                </div>
                <GoogleLoginButton />
                <div>
                    <p className='text-gray-300 font-semibold text-lg'> Don&apos;t have an account? <Link href={"/sign-up"} className='text-blue-600'>Sign Up</Link></p>
                </div>
            </div>
        </main>
    )
}

export default GoogleSigninForm