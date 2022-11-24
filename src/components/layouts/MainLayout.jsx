import React from 'react';

export const MainLayout = ({children}) => {
    return (
        <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
            {children}
        </div>
    )
}