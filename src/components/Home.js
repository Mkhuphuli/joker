import React from 'react';
import LoggedIn from './LoggedIn.js';
import LoggedOut from './LoggedOut.js';

const Home = (props) => {

    const userIsAuthenticated=false;
    const dashboard = userIsAuthenticated? <LoggedIn/> : <LoggedOut/>

    return (
        <div className="dashboard">
            {dashboard}
        </div>
    )
}

export default Home;