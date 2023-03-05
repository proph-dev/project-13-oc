import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from '../components/navbar/Navbar';
import { Footer } from '../components/footer/Footer';

import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import User from "../pages/User";

export const RoutesPage = () => {
    return (
        <BrowserRouter>
            <header>
                <Navbar />
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sign-in" element={<SignIn />} />
                    <Route path="/user" element={<User />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    )
}