import React from 'react'
import { Route, Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'

export default function SecureRoute(){ //{ component: Component, ...rest}
    const { currentUser } = useAuth();

    return (
        <Route>
                {currentUser?<Outlet />:<Navigate to="/" replace={true}/>}
        </Route>
    )
}