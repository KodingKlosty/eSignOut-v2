import React, {Component} from 'react'

//image imports
import eSignoutblkshadow2 from '../imgs/eSignoutblkshadow2.png'

class SignIn extends Component {
    render (){
        return(
               <form className="form-login text-center">
                    <img src={eSignoutblkshadow2} alt="eSignOut logo" className="logo85" />
                    <h1 className="h4 mb-3 eSignOutLogin ">eSignOut Login</h1>
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input
                        type="email"
                        id="inputEmail"
                        className="form-control mb-2"
                        placeholder="Email Address"
                        required
                        autoFocus
                    />
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input
                        type="password"
                        id="inputPassword"
                        className="form-control mb-2"
                        placeholder="Password"
                        required
                    />
                    <button className="okColorBtn btn-lg btn-block" type="submit">
                        Login
                    </button>
               </form> 
        )
    }
}

export default SignIn