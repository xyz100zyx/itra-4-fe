import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {register} from "../../store/slices/authSlice";
import {useNavigate} from "react-router-dom";

export const Register = () => {

    const stylesLabel = "flex justify-between p-3"
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const error = useSelector(state => state.auth.error);

    const [first_name, setFirstName] = React.useState('');
    const [second_name, setSecondName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [visibleErr, setVisibleErr] = React.useState(false)

    const onRegisterClick = async (e) => {
        e.preventDefault();
        await dispatch(register({first_name, second_name, email, password}));
        if(localStorage.getItem('token')) navigate('/');
        else{
            setVisibleErr(true);
        }
    }

    React.useEffect(() => {
        localStorage.removeItem('token')
    }, [])

    return (
        <form className={"flex flex-col"} action="POST">
            <span className={"block font-bold text-4xl mb-8"}>Registration</span>
            <label className={stylesLabel}>
                <span>First name</span>
                <input onChange={e => setFirstName(e.target.value)} type="text"/>
            </label>
            <label className={stylesLabel}>
                <span>Second name</span>
                <input onChange={e => setSecondName(e.target.value)} type="text"/>
            </label>
            <label className={stylesLabel}>
                <span>Email</span>
                <input onChange={e => setEmail(e.target.value)} type="email"/>
            </label>
            <label className={stylesLabel}>
                <span>Password</span>
                <input onChange={e => setPassword(e.target.value)} type="password"/>
            </label>
            <button onClick={(e) => onRegisterClick(e)} className={"mt-10 p-3 font-medium text-white bg-gray-800 rounded-2xl"} type={"submit"}>Register</button>
            {visibleErr && <span>{error}</span>}
        </form>
    )
}