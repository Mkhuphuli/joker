import React, {Component} from 'react';
import axios from 'axios'; 
import {connect}  from 'react-redux';
import {Redirect} from 'react-router-dom';


class LoggedIn extends Component{
    state={
        joke:"JOKE TEXT HERE"
    }
    getJoke=()=>{
        axios({
            url:"https://icanhazdadjoke.com/",
            method:'get',
	    	headers: {
                'accept': 'text/plain'
            }
        }).then(response =>{
            if(response.status===200){
                this.setState({
                    joke:response.data
                })
            } else {
                this.setState({
                    joke:'Oops try again'
                })
            }
        })
    }
    render(){
        const {auth} =this.props
        if(!auth.uid) return <Redirect to='/login' /> 
        return (
            <div className="jokes-container">
                {this.state.joke}
                <br/>
                <img className='play-button' src={require("../img/play-button.png")} alt="Play" onClick={this.getJoke}/>
            </div>
            
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        auth: state.firebase.auth
    }
}


export default connect(mapStateToProps)(LoggedIn);