import React from 'react';
import { NavLink } from 'react-router-dom';

const LoggedOutLinks=()=>{
    return (
        <ul className="navbar-links-right">
            <li><NavLink to='/login' className='loginLink'>Login</NavLink></li>
            <li><NavLink to='/register' className='registerLink'>Register</NavLink></li>
        </ul>
    )
}

export default LoggedOutLinks;