import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import {login} from '../../store/slices/authSlice';

export const Login = () => {
    const stylesLabel = "flex justify-between p-3"
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const error = useSelector(state => state.auth.error);

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function onLoginClick(e){
        e.preventDefault();
        dispatch(login({email, password}));
        if(localStorage.getItem('token')){
            navigate('/');
        }
    }

    React.useEffect(() => {
        localStorage.removeItem('token')
    }, [])

    return (
        <form className={"flex flex-col"} action="POST">
            <span className={"block font-bold text-4xl mb-8"}>Login</span>
            <label className={stylesLabel}>
                <span>Email</span>
                <input onChange={(e) => {setEmail(e.target.value)}} type="email"/>
            </label>
            <label className={stylesLabel}>
                <span>Password</span>
                <input onChange={(e) => {setPassword(e.target.value)}} type="password"/>
            </label>
            <button onClick={(e) => onLoginClick(e)} className={"mt-10 p-3 font-medium text-white bg-gray-800 rounded-2xl"} type={"submit"}>Login</button>
            {error && <span>{error}</span>}
        </form>
    )
}