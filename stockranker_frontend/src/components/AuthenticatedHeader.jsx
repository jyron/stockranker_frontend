import React from 'react';

const AuthenticatedHeader = ({ userEmail, onLogout }) => (
    <div className="flex items-center justify-end gap-4">
        {/* User Email */}
        <span className="text-gray-600">{userEmail}</span>

        {/* Logout Button */}
        <button
            onClick={onLogout}
            className="cursor-pointer block shrink-0 rounded-full bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
        >
            <span className="sr-only">Logout</span>
            Logout
        </button>
    </div>
);

export default AuthenticatedHeader;
