import {createBrowserRouter} from "react-router-dom";
import {Main} from "../pages/Main/Main";
import {AuthLayout} from "../components/layouts/AuthLayout";
import {Register} from "../components/Register/Register";
import {Login} from "../components/Login/Login";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>
    },
    {
        path: '/auth/register',
        element: <AuthLayout><Register/></AuthLayout>,
    },
    {
        path: '/auth/login',
        element: <AuthLayout><Login/></AuthLayout>,
    },
])