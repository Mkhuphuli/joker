import React from 'react';
import LoggedInLinks from './LoggedInLinks';
import LoggedOutLinks from './LoggedOutLinks';
import {connect} from 'react-redux';

const Navbar = ({auth}) => {
    const links = auth.uid? <LoggedInLinks/> : <LoggedOutLinks/>
    return (
        <div className="nav-container">
            {links}
        </div>
    )
}

const mapStateToProps =(state)=>{
    return{
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar);
