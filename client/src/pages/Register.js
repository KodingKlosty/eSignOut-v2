import React,{Component} from 'react'
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { register } from '../actions/authActions'
import { clearErrors } from "../actions/errorActions";
import { Redirect } from 'react-router-dom';


class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            passwordVerification: '',
            msg: null
        }

    }

    componentDidUpdate(prevProps) {
        const {error} = this.props;
        if(error !== prevProps.error) {
            //Check for register error
            if(error.id === 'REGISTER_FAIL') {
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
        
        const {firstName, lastName, email, password, passwordVerification} = this.state;

        if(passwordVerification !== password){
            alert("Passwords do not match")
        }
        else{        
            const  newUser={
                firstName,
                lastName,
                email,
                password
            }
            //Attempt to Register User
            this.props.register(newUser)

            // Redirect to Create Company
            this.setState({redirectToCreateCompany: true})
        }
    }


    render(){
        if(this.state.redirectToCreateCompany === true){
           return <Redirect to='/createCompany'/>
        }
        return(
            <div>
                <div>
                    {this.state.msg ?             
                        <div className="alert alert-danger reg-alert text-center" role="alert">
                            {this.state.msg}
                        </div> : null}
                </div>
                <form id="regForm" onSubmit={this.handleSubmit} className="form-reg text-center">
                    <h1 className="h3 mb-3 eSignoutLogin">Company Sign Up</h1>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="firstName" className="sr-only">First Name</label>
                            <input 
                                type="text"
                                id="firstName"
                                name="firstName"
                                className="form-control mb-2"
                                placeholder="First Name"
                                onChange={this.handleChange}
                            /> 
                        </div> 
                        <div className="col">             
                            <label htmlFor="lastName" className="sr-only">Last Name</label>
                            <input 
                                type="text"
                                id="lastName"
                                name="lastName"
                                className="form-control mb-2"
                                placeholder="Last Name"
                                onChange={this.handleChange}
                                
                            />
                        </div> 
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="email" className="sr-only">Email</label>
                                <input 
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="form-control mb-2"
                                    placeholder="email"
                                    onChange={this.handleChange}
                                />
                        </div>
                    </div>   
                    <div className="row">
                        <div className="col">
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input 
                                type="password"
                                id="password"
                                name="password"
                                className="form-control mb-2"
                                placeholder="password"
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="passwordVerification" className="sr-only">Password Check</label>
                            <input
                                type="password"
                                id="passwordVerification"
                                name="passwordVerification"
                                className="form-control mb-2"
                                placeholder="verify password"
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <button className="okColorBtn btn-lg btn-block" type="submit">
                                Register
                            </button>
                        </div>
                        <div className="col">
                            <a 
                            href="/" 
                            className="cancelColorBtn btn-lg btn-block" 
                            role="button"
                            value="Cancel"  
                            formNoValidate>
                                Cancel
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

Register.propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

export default connect(mapStateToProps, {register, clearErrors})(Register)