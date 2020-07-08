import React, {Component} from 'react';
import { connect } from "react-redux";
import {clearErrors} from '../actions/errorActions'
import {login} from '../actions/authActions'
import { PropTypes  } from "prop-types";

//image imports
import eSignoutblkshadow2 from '../imgs/eSignoutblkshadow2.png'
import { Redirect } from 'react-router-dom';

class SignIn extends Component {
    constructor(props){
        super(props)
            this.state = {
                email: '',
                password: '',
                msg: null,
            }
    }

    componentDidUpdate(prevProps) {
        const {error} = this.props;
        if(error !== prevProps.error) {
            //Check for login error
            if(error.id === 'LOGIN_FAIL') {
                this.setState({ msg: error.msg.msg })
            }
            else {
                this.setState({msg: null})
            }
        }
    }

    handleChange = evn => {
        const {target} = evn
        const value = target.value
        const {name} = target
        this.setState({
            [name]: value
        });

    }

    handleSubmit = evn => {
        evn.preventDefault();
        this.props.clearErrors()

        const {email, password} = this.state

        const user = {
            email,
            password
        }
        // Attempt to login
        this.props.login(user)
        
    }


    render (){
        if(this.props.isAuthenticated){
            return <Redirect to="/Dashboard"/>
        }
        return(
            <div>
                <div>
                    {this.state.msg ?             
                        <div className="alert alert-danger reg-alert text-center" role="alert">
                            {this.state.msg}
                        </div> : null}
                </div>
               <form className="form-login text-center" onSubmit={this.handleSubmit}>
                    <img src={eSignoutblkshadow2} alt="eSignOut logo" className="logo85" />
                    <h1 className="h4 mb-3 eSignOutLogin ">eSignOut Login</h1>
                    <label htmlFor="email" className="sr-only">Email address</label>
                    <input
                        type="email"
                        name='email'
                        id="email"
                        className="form-control mb-2"
                        placeholder="Email Address"
                        onChange={this.handleChange}
                        autoFocus
                    />
                    <label htmlFor="password" className="sr-only">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="form-control mb-2"
                        placeholder="Password"
                        onChange={this.handleChange}
                    />
                    <button className="okColorBtn btn-lg btn-block" type="submit">
                        Login
                    </button>
               </form> 
            </div>
        )
    }
}

SignIn.propTypes ={
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error 
})



export default connect(mapStateToProps,{login, clearErrors})(SignIn)