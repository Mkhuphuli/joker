import React from 'react';
import { NavLink } from 'react-router-dom';

const LoggedInLinks=()=>{
    return (
        <ul className="navbar-links-right">
            <li><NavLink to='/joke' className='crackJokeLink '>Crack Joke</NavLink></li> |
            <li><NavLink to='/register' className='registerLink'>Register</NavLink></li>
        </ul>
    )
}

export default LoggedInLinks;