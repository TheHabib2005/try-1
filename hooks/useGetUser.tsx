import { getUser } from '@/actions';
import React, { useLayoutEffect, useState } from 'react'

const useGetUser = () => {

    const [userData, setUserData] = useState<any>()

    const getUserData = async () => {
        const { _id, email, profilePicture, username } = await getUser();

        setUserData({ _id, email, profilePicture, username });


    };

    useLayoutEffect(() => {
        getUserData()
    }, [])



    return userData
}

export default useGetUser