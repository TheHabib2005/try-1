"use client"
import { dashboardMenus } from '@/utils/constant'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

const DashboardSidebar = () => {

    const path = usePathname()
    const [menus, setMenus] = useState(dashboardMenus)
    console.log("current" + path);


    return (
        <div className=" flex-col p-3 lg:w-[25%] lg:flex hidden w-full bg-zinc-950/50  h-screen gap-y-3">
            {/* <Link href={"/"} title='myshopbd'>
                <Image
                    width={18888880}
                    height={15000000000}
                    src={"/myshopbd-light.png"}
                    alt='myshopbd-logo'
                />
            </Link> */}

            <h1 className='text-xl  font-semibold'>My Account</h1>
            {
                menus.map((menu) => {


                    return <Link key={menu.id} href={menu.path} className={`p-3 ${path === menu.path ? "bg-blue-600 " : "bg-zinc-900"} rounded-md capitalize font-semibold`}>{menu.title}</Link>
                })
            }
        </div>
    )
}

export default DashboardSidebar