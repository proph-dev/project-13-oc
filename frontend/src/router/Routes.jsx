import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";

export const RoutesPage = () => {
    return (
        <BrowserRouter>
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </main>
        </BrowserRouter>
    )
}