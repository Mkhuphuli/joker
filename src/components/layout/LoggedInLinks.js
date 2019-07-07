import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {logOut} from '../../store/actions';

const LoggedInLinks=(props)=>{
    return (
        <ul className="navbar-links-right">
            <li><NavLink to='/' className='crackJokeLink '>Crack Joke</NavLink></li> |
            <li><a onClick={props.logOut} className='logOutLink'>Logout</a></li>
        </ul>
    )
};

const mapDispatchToProps = (dispatch)=>{
    return{
        logOut: ()=> dispatch(logOut())
    }
}

export default connect(null,mapDispatchToProps)(LoggedInLinks);