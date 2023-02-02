import React from "react";
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/argentBankLogo.png';
import './navbar.css';

export const Navbar = () => {
    return (
        <nav>
            <NavLink to="/">
                <img src={ logo } alt="Logo de ArgentBank" />
            </NavLink>

            <NavLink to="/" className="sign-in">Sign in</NavLink>
        </nav>
    )
}

export default Navbar;