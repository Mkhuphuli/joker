import React, {Component} from 'react';


class LoggedIn extends Component{
    state={
        joke:"JOKE TEXT HERE"
    }


    render(){
        return (
            <div className="jokes-container">
                {this.state.joke}
                <img src="play-button.png" alt=""/>
            </div>
        )
    }
}

export default LoggedIn 