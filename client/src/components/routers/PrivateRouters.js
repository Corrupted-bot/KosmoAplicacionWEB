import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from "../../auth/useAuth";

export default function PrivateRouters() {
const auth = useAuth();
    return (
            auth.isLogged() ?<Outlet />:<Navigate to="/login" />
    )
}
