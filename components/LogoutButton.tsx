"use client"

import { delay } from '@/utils';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { MdLogout } from 'react-icons/md';
import { ClipLoader } from 'react-spinners';
import Loader from './Loader';
import { logoutUser } from '@/actions';

const LogoutButton = () => {

    const [loading, setLoading] = useState(false);
    const handleLogin = async () => {
        setLoading(true);
        let { success, message } = await logoutUser()
        if (success) {
            window.location.href = "/sign-in";
            toast.success(message);
            setLoading(false);
        } else {
            toast.error(message);
            setLoading(false);
        }
    };

    return (
        <button className='flex items-center justify-between w-full p-3 bg-zinc-800/70 rounded-md cursor-pointer' onClick={handleLogin}>LOGOUT {loading ? <Loader /> : <MdLogout color='#2563EB' fontSize={20} />}</button>

    )
}

export default LogoutButton