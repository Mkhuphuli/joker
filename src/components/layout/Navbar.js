import React from 'react';
import LoggedInLinks from './LoggedInLinks';
import LoggedOutLinks from './LoggedOutLinks';

const Navbar = (props) => {

    const userIsAuthenticated=true;
    const links = userIsAuthenticated? <LoggedInLinks/> : <LoggedOutLinks/>

    return (
        <div className="nav-container">
            {links}
        </div>
    )
}

export default Navbar;
