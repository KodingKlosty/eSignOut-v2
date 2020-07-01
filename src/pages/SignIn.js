import React, {Component} from 'react'

//image imports
import eSignoutblkshadow2 from '../imgs/eSignoutblkshadow2.png'

class SignIn extends Component {
    render (){
        return(
               <form class="form-login text-center">
                    <img src={eSignoutblkshadow2} alt="eSignOut logo" class="logo85" />
                    <h1 class="h4 mb-3 eSignOutLogin ">eSignOut Login</h1>
                    <label for="inputEmail" class="sr-only">Email address</label>
                    <input
                        type="email"
                        id="inputEmail"
                        class="form-control mb-2"
                        placeholder="Email Address"
                        required
                        autoFocus
                    />
                    <label for="inputPassword" class="sr-only">Password</label>
                    <input
                        type="password"
                        id="inputPassword"
                        class="form-control mb-2"
                        placeholder="Password"
                        required
                    />
                    <button class="okColorBtn btn-lg btn-block" type="submit">
                        Login
                    </button>
               </form> 
        )
    }
}

export default SignIn