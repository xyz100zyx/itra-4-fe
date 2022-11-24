import React from 'react';

export const AuthLayout = ({children}) => {

    return (
        <div className="container h-full max-w-md mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
            {children}
        </div>
    )
}