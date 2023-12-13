import { useState } from 'react';

const LoginForm = ({ onSuccess }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8000/api/v0/auth/jwt/login', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    username: formData.email,
                    password: formData.password,
                }),
                credentials: 'include',
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`HTTP error! ${JSON.stringify(errorData)}`);
            }

            console.log("Request successful");
            onSuccess();
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-6 space-y-4 bg-white rounded-lg shadow-lg">

            <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-medium">
                    Email:
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="password" className="text-sm font-medium">
                    Password:
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
            </div>

            <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
                Login
            </button>
        </form>
    );
};

export default LoginForm;