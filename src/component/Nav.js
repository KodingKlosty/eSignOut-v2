import React, {Component} from 'react'


class Nav extends Component {
    render(){
        return(
            <div>
                <ul class='nav justify-content-center'>
                    <li class="nav-item">
                        <a class="nav-link" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/signIn">Sign In</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Nav