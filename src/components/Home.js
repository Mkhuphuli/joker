import React from 'react';
import LoggedIn from './LoggedIn.js';
import LoggedOut from './LoggedOut.js';
import {connect} from 'react-redux';

const Home = ({auth})  => {
    const dashboard = auth.uid? <LoggedIn/> : <LoggedOut/>

    return (
        <div className="dashboard">
            {dashboard}
        </div>
    )
}


const mapStateToProps =(state)=>{
    return{
        auth: state.firebase.auth
    }
}
export default connect(mapStateToProps)(Home);