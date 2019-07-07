import React, {Component} from 'react';
import axios from 'axios'; 


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
        return (
            <div className="jokes-container">
                {this.state.joke}
                <br/>
                <img className='play-button' src={require("../play-button.png")} alt="Play" onClick={this.getJoke}/>
            </div>
            
        )
    }
}

export default LoggedIn 