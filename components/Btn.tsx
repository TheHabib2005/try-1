"use client"
import axios from 'axios';

export default function Login() {
    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/set-cookie', {
                credentials: "include",
                mode: "cors"
            });
            console.log(await response.json());

        } catch (error) {
            console.error('Login error:');
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}
