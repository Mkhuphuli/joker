import React from 'react';
import LoggedIn from './LoggedIn.js';
import LoggedOut from './LoggedOut.js';
import {connect} from 'react-redux';

const Home = ({auth})  => {
    console.log(auth.uid)
    const dashboard = auth.uid? <LoggedIn/> : <LoggedOut/>

    return (
        <div className="dashboard">
            {dashboard}
        </div>
    )
}


const mapStateToProps =(state)=>{
    console.log(state)
    return{
        auth: state.firebase.auth
    }
}
export default connect(mapStateToProps)(Home);