import { delay } from '@/utils';
import { useGoogleLogin } from '@react-oauth/google';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const useGoogleAuthentication = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({
        error: false,
        message: "",
    });
    const saveuserInfo = async (user: any) => {

        setError({ error: false, message: "" });
        try {
            setLoading(true);
            let response = await fetch("http://localhost:8000/user/google-login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
                credentials: "include"
            });
            let data = await response.json();

            if (!response.ok) {
                toast.error(data.message);
                setError({ error: true, message: data.message });
                return;
            }

            if (data.success) {
                toast.success(data.message);
                await delay(1000);
                window.location.href = "/profile";
            }

        } catch (error) {
            setError({ error: true, message: "something was wroing ! " });
            toast.error("something was wrong ! ");
        } finally {
            setLoading(false);
        }


    }



    const getUserData = async (accessToken: string): Promise<any> => {
        const apiUrl = 'https://www.googleapis.com/oauth2/v3/userinfo';
        try {
            const response = await fetch(apiUrl, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            const userinfo = {
                username: data.name,
                email: data.email,
                profilePicture: data.picture,
                password: "googleuseracount"
            };
            return userinfo;
        } catch (error) {
            console.error('Error fetching data from Google API:', error);
            return undefined;
        }
    };

    const SignWithGoogle = async () => {
        if (navigator.onLine) {
            handleGoogleConfig()
        } else {
            setLoading(true);
            await delay(3000);
            setLoading(false);
            setError({
                error: true,
                message: "please check internet connection"
            })
            toast.error("please check internet connection")
        }
    }


    const handleGoogleConfig = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            console.log(tokenResponse);
            const accessToken = tokenResponse.access_token;
            let userData: any = await getUserData(accessToken);
            console.log(userData);
            saveuserInfo(userData)
        }
    })

    return { SignWithGoogle, loading }
}

export default useGoogleAuthentication