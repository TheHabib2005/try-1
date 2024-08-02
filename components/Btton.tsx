"use client"
import axios from 'axios';
import React from 'react'

const Btton = () => {
    const fetchCookie = async () => {
        let res = await axios.get("https://mern-24.onrender.com/set-cookie", {
            withCredentials: true,
        })
        return res.data
    };

    return (
        <div className='bg-red-600 text-white p-5 cursor-pointer w-40' onClick={() => {
            fetchCookie();
        }}>Click me</div>
    )
}

export default Btton