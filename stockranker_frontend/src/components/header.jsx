import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthenticatedHeader from './AuthenticatedHeader';
import LoginForm from './loginform';
import RegistrationForm from './registrationform';

const Header = () => {
    const api_url = import.meta.env.VITE_API_URL;
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showRegisterModal, setShowRegisterModal] = useState(false);
    const [userEmail, setUserEmail] = useState(null);

    const toggleLoginModal = () => setShowLoginModal(!showLoginModal);
    const toggleRegisterModal = () => setShowRegisterModal(!showRegisterModal);

    const checkLoggedInUser = async () => {
        try {
            const response = await fetch(`${api_url}/api/v0/users/me`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',

                },
                credentials: 'include',
            });

            if (response.ok) {

                const userData = await response.json();
                setUserEmail(userData.email);
            } else {

                setUserEmail(null);
            }
        } catch (error) {
            console.error('Error checking logged-in user:', error);
        }
    };

    const handleLogout = async () => {
        try {
            const response = await fetch(`${api_url}/api/v0/auth/jwt/logout`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                },
                credentials: 'include',
            });

            if (!response.ok) {
                console.error('Logout failed:', response.statusText);
                return;
            }



            setUserEmail(null);
            console.log('Logout successful');
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };
    const handleLoginSuccess = async () => {
        await checkLoggedInUser();
        toggleLoginModal();
    };

    useEffect(() => {
        checkLoggedInUser();
    }, []);

    return (
        <header className="bg-gray-50">
            <div className="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <Link to="/" className="text-xl font-bold text-gray-900 sm:text-2xl">StockRanker.Co</Link>
                    {userEmail ? (
                        <AuthenticatedHeader userEmail={userEmail} onLogout={handleLogout} />
                    ) : (
                        <div className="flex items-center gap-4">
                            <button onClick={toggleLoginModal} className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600">Log In</button>
                            <button onClick={toggleRegisterModal} className="px-4 py-2 text-sm font-medium text-gray-800 bg-gray-200 rounded-md hover:bg-gray-300">Register</button>
                        </div>
                    )}
                </div>
            </div>
            {/* Modals */}
            {showLoginModal && <LoginForm onClose={toggleLoginModal} onSuccess={handleLoginSuccess} />}
            {showRegisterModal && <RegistrationForm onClose={toggleRegisterModal} />}
        </header>
    );
};

export default Header;
