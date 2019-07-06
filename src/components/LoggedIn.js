import React, {Component} from 'react';


class LoggedIn extends Component{
    state={
        joke:"JOKE TEXT HERE"
    }
    render(){
        return (
            <div className="jokes-container">
                {this.state.joke}
                <br/>
                <img className='play-button' src={require("../play-button.png")} alt="Play"/>
            </div>
            
        )
    }
}

export default LoggedIn 