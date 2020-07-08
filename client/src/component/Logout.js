import React, {Component,Fragment} from 'react'
import { logout } from "../actions/authActions";
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

export class Logout extends Component {
    render(){
        return (
            <Fragment>
                <li className="nav-item">
                    <a 
                    className="nava nav-link" 
                    onClick={this.props.logout} 
                    href='/'>Logout</a>
                </li> 
            </Fragment>
        )
    }
}

Logout.propTypes = {
    logout: PropTypes.func.isRequired
}


export default connect(null ,{logout})(Logout)