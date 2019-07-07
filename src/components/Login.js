import React, {Component} from 'react';


class Login extends Component{
    state={
        email:" ",
        password:" "
    }

    handleSubmit=(e)=>{
        if(e.key==="Enter"){
            const element0=document.getElementsByTagName("form")[0].getElementsByTagName('input')[0]
            const element1=document.getElementsByTagName("form")[0].getElementsByTagName('input')[1]
            this.setState({
                [element0.type]: element0.value,
                [element1.type]: element1.value
            })
        }
    } 
    
    goToNextField=(e)=>{
        if(e.key==="Enter"){
            document.getElementById("use-password").focus()
        }
    }

    render(){
        return(
            <div className="login-container">
                <form onSubmit={this.handleSubmit}>
                    <label>Login</label>
                    <br/>
                    <input type="email" id="use-email" key='0' placeholder="Email Address" onKeyPress={this.goToNextField}/>
                    <br/>
                    <input type="password" id="use-password" key='1' placeholder="Password" onKeyPress={this.handleSubmit}/>
                </form>
            </div>
        )
    }
}


export default Login;