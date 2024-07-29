"use client"
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react'

const Input = () => {
    const [value, setValue] = useState("");
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const router = useRouter();
    const path = usePathname()

    return (
        <form onSubmit={(e) => {

            params.set("q", value);
            router.push(`/?${params}`);

        }}>
            <input type="text" value={value} onChange={(e) => {
                setValue(e.target.value);
            }} />
        </form>
    )
}

export default Input