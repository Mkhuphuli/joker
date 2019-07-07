import React, {Component} from 'react';
import {connect}  from 'react-redux';
import {logIn} from '../../store/actions';
import {Redirect} from 'react-router-dom';


class Login extends Component{
    state={
        email:"",
        password:""
    }
    
    handleKeyPress=(e)=>{
            
        if(e.target.id==='email'){
            this.setState({
                [e.target.id]:e.target.value
            })
            if (e.key==='Enter'){
                this.setState({
                    [e.target.id]:e.target.value
                })
                document.getElementById("password").focus()
            }
            
        } else {
            this.setState({
                [e.target.id]:e.target.value
            })
            if (e.key==='Enter'){
                this.props.logIn(this.state)}
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
    }

    render(){
        const {authError, auth} =this.props;
        if(auth.uid) return <Redirect to='/' /> 
        return(
            <div className="login-container">
                <form className='login-form' onSubmit={this.handleSubmit}>
                    <p>Login</p>
                    <input type="email" id="email" key='0' placeholder="Email Address" onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>
                    <br/>
                    <input type="password" id="password" key='1' placeholder="Password" onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>
                    <div className="authError">
                        {authError? <p className="alertMessage">Wrong Email or Password </p>: null}
                    </div>
                </form>
            </div>
        )}
}

const mapStateToProps=(state)=>{
    console.log(state)
    return{
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        logIn: (creds) => dispatch(logIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);