import React from 'react'
import { Routes as MyAppRoutes, Route, Link } from "react-router-dom";
import HomeStart from '../pages/HomeStart';
import SignInPage from '../pages/SignInPage';

const AppRoutes = () => {
    return (
        <div>
            <MyAppRoutes>
                <Route path="/" element={<SignInPage />} />
                <Route path="/home" element={<HomeStart />} />

            </MyAppRoutes>
        </div>
    )
}

export default AppRoutes
