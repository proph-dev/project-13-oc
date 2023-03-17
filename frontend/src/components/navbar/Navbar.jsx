import React, { useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { useSelector} from "react-redux";
import { useProfile } from '../../hooks/useProfile';
import logo from '../../assets/img/argentBankLogo.png';
import './navbar.css';

export const Navbar = () => {
    const { profile, firstName } = useProfile();
    const token = useSelector(state => state.user.token);

    useEffect(() => {
        profile();
    }, [profile])

    return (
        <nav>
            <NavLink to="/">
                <img src={ logo } alt="Logo de ArgentBank" />
            </NavLink>

            {token && token.length > 0 ? (
                <div className="user-informations">
                    <p>
                        { firstName }
                    </p>
                    <NavLink to="sign-in" className="tab_sign-in">Sign Out</NavLink>
                </div>
            ) : (
                <NavLink to="sign-in" className="tab_sign-in">Sign In</NavLink>
            )}
        </nav>
    )
}

export default Navbar;