import React, { useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { useProfile } from '../../hooks/useProfile';
import { logout } from "../../redux/reducer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
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
                        <FontAwesomeIcon icon={faCircleUser} className="icon" />
                        { firstName }
                    </p>
                    <button onClick={ handleSignOut } to="sign-in" className="tab_sign-out">
                        <FontAwesomeIcon icon={faRightFromBracket} className="icon" />
                        Sign Out
                    </button>
                </div>
            ) : (
                <NavLink to="sign-in" className="tab_sign-in"><FontAwesomeIcon icon={faCircleUser} className="icon" />Sign In</NavLink>
            )}
        </nav>
    )
}

export default Navbar;