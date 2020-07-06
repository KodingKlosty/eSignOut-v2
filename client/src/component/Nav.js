import React, {Component} from 'react'


class Nav extends Component {
    render(){
        return(
            <div>
                <ul className='nav justify-content-center'>
                    <li className="nav-item">
                        <a className="nava nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nava nav-link" href="/login">Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nava nav-link" href="/register">Sign Up</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Nav