import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from '../components/navbar/Navbar';
import { Footer } from '../components/footer/Footer';

import Home from "../pages/Home";

export const RoutesPage = () => {
    return (
        <BrowserRouter>
            <header>
                <Navbar />
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    )
}