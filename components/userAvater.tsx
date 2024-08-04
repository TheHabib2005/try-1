//@ts-nocheck
"use server"
import { verify } from 'jsonwebtoken';
import { cookies } from 'next/headers'
import Link from 'next/link';
import React, { Suspense } from 'react'
import ProfilePupup from './ProfilePupup';

const UserAvater = async () => {
    const cookieStore = cookies();
    const token = cookieStore.get("auth-token")?.value;
    let { userData } = await verify(token!, process.env.JWT_SECRET!);
    console.log(userData);


    return (
        <Suspense fallback={"lOADING..."}>
            <div>

                <ProfilePupup email={userData.email} username={userData.username} profilePicture={userData.profilePicture} />
            </div>
        </Suspense>
    )
}

export default UserAvater