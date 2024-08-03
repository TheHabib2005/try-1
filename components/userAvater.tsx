//@ts-nocheck
"use server"
import { verify } from 'jsonwebtoken';
import { cookies } from 'next/headers'
import Link from 'next/link';
import React, { Suspense } from 'react'
import ProfilePupup from './ProfilePupup';

const UserAvater = async () => {
    // const cookieStore = cookies();
    // const token = cookieStore.get("auth-token")?.value;
    // let { userData } = await verify(token!, process.env.JWT_SECRET!);
    // console.log(userData);


    return (
        <Suspense fallback={"lOADING..."}>
            <div>

                <ProfilePupup email={"mdwear2005@gmail.com"} username={"Habib 05"} profilePicture={"https://lh3.googleusercontent.com/a/ACg8ocLQPv7EAeTXCo0fTN0G9TG4CCCzm0"} />
            </div>
        </Suspense>
    )
}

export default UserAvater