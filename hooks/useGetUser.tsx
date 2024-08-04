import { getUser } from '@/actions';
import React, { useLayoutEffect, useState } from 'react'

const useGetUser = () => {

    const [userData, setUserData] = useState<any>()

    const getUserData = async () => {
        const { userData } = await getUser();

        setUserData(userData);
    };

    useLayoutEffect(() => {
        getUserData()
    }, [])



    return { userData }
}

export default useGetUser