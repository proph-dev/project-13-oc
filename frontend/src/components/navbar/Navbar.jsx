import React, { useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { useProfile } from '../../hooks/useProfile';
import { logout } from "../../redux/reducer";
import logo from '../../assets/img/argentBankLogo.png';
import './navbar.css';

export const Navbar = () => {
    const dispatch = useDispatch();
    const { profile, firstName } = useProfile();
    const token = useSelector(state => state.user.token);

    useEffect(() => {
        profile();
    }, [profile])

    const handleSignOut = () => {
        dispatch(logout());
    }

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
                    <button onClick={ handleSignOut } to="sign-in" className="tab_sign-out">Sign Out</button>
                </div>
            ) : (
                <NavLink to="sign-in" className="tab_sign-in">Sign In</NavLink>
            )}
        </nav>
    )
}

export default Navbar;