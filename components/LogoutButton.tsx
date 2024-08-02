"use client"

import { delay } from '@/utils';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { MdLogout } from 'react-icons/md';
import { ClipLoader } from 'react-spinners';

const LogoutButton = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({
        error: false,
        message: "",
    });
    const handleLogin = async () => {
        setError({ error: false, message: "" });

        try {
            setLoading(true);
            let response = await fetch("http://localhost:8000/logout", {
                credentials: "include"
            });
            let data = await response.json();

            if (!response.ok) {
                toast.error(data.message);
                setError({ error: true, message: data.message });
                return;
            }




            if (data.success === true) {
                toast.success(data.message);
                await delay(1000);
                window.location.href = "/login";
            }
        } catch (error) {
            // setError({ error: true, message: "something was wroing ! " });
            toast.error("something was wrong ! ");
        } finally {
            setLoading(false);
        }
    };

    return (
        <button className='flex items-center justify-between w-full p-3 bg-zinc-800/70 rounded-md cursor-pointer' onClick={handleLogin}>LOGOUT {loading ? <ClipLoader size={25} color='#fff' /> : <MdLogout color='#2563EB' fontSize={20} />}</button>

    )
}

export default LogoutButton