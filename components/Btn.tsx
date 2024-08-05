"use client"
import axios from 'axios';

export default function Login() {
    const handleLogin = async () => {
        try {
            const response = await axios.get('http://localhost:8000/set-cookie', { withCredentials: true });
            console.log(response.data);
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
