import React from 'react';
import {useNavigate} from "react-router-dom";

export const ButtonLogout = () => {

    const navigate = useNavigate();

    const onButtonClick = () => {
        navigate('/auth/login');
    }

    return (
        <button onClick={() => onButtonClick()} className={"py-4 px-8 mt-8 rounded-2xl border-2 border-gray-800"}>Logout</button>
    )
}