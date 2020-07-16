import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {PropTypes} from 'prop-types'
import { logout } from '../actions/authActions'


class Nav extends Component {
    render(){
        const {isAuthenticated, user } = this.props.auth;

        const authLinks = (
            <Fragment>

                <li className="nav-item">
                    <a
                        className="nava nav-link"
                        href='/Dashboard'>
                            Dashboard
                        </a>
                </li>
                <li className="nav-item">
                    <a
                        className="nava nav-link"
                        onClick={this.props.logout}>                            
                        Logout
                        </a>
                </li>
            </Fragment>
        )

        const guestLinks = (
            <Fragment>
                <li className="nav-item">
                    <a className="nava nav-link" href="/login">Login</a>
                </li>
                <li className="nav-item">
                    <a className="nava nav-link" href="/register">Sign Up</a>
                </li>               
            </Fragment>
        )

        return(
            <div>
                <ul className='nav justify-content-center'>
                    <li className="nav-item">
                        <a className="nava nav-link" href="/">Home</a>
                    </li>
                    {isAuthenticated ? authLinks : guestLinks}
                </ul>
            </div>
        )
    }
}

Nav.propTypes ={
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
}

const mapStatetoProps = state => ({
    auth: state.auth
})
export default connect(mapStatetoProps, {logout})(Nav)