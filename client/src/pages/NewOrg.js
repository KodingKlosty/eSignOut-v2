import React,{Component} from 'react'
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { addOrg } from "../actions/orgActions";
import { logout } from '../actions/authActions' 
import { clearErrors, returnErrors } from "../actions/errorActions";
import { Redirect } from 'react-router-dom'

class RegisterOrg extends Component {
    constructor(props){
        super(props);
        this.state = {
            companyName: '',
            msg: null,
            redirectToLogin: false
        }

    }

    setUserId = uid => {
        this.setState({userId: uid})
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
        
        const {companyName} = this.state;
        const userId = this.props.auth.user.id
        console.log("userid in newOrg: ", userId)
        const newOrg = {
            companyName,
            userId
        }
        
        this.props.addOrg(newOrg)


        this.setState({redirectToLogin: true})


    }


    render(){
        if(this.state.redirectToLogin === true){
            this.props.logout();
            return <Redirect to='/Success'/>
        }
        return(
            <div>
                <div>
                    {this.state.msg ?             
                        <div class="alert alert-danger reg-alert text-center" role="alert">
                            {this.state.msg}
                        </div> : null}
                </div>
                <form id="regForm" onSubmit={this.handleSubmit} className="form-reg text-center">
                    <h1 className="h3 mb-3 eSignoutLogin">Register Company</h1>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="companyName" className="sr-only">First Name</label>
                            <input 
                                type="text"
                                id="companyName"
                                name="companyName"
                                className="form-control mb-2"
                                placeholder="Company Name"
                                onChange={this.handleChange}
                            /> 
                        </div> 
                    </div>
                    <div className="row">
                        <div className="col">
                            <button className="okColorBtn btn-lg btn-block" type="submit">
                                Create Org
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

RegisterOrg.propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    addOrg: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired

}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error,
    auth: state.auth
});

export default connect(mapStateToProps, {addOrg, logout,clearErrors})(RegisterOrg)