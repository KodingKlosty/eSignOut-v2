import React,{Component} from 'react'

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {

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
        
    }


    render(){
        return(
            <form id="regForm" onSubmit={this.handleSubmit} class="form-reg text-center">
                <h1 class="h3 mb-3 eSignoutLogin">New User Registration</h1>
                <div class="row">
                    <div class="col">
                        <label for="firstName" class="sr-only">First Name</label>
                        <input 
                            type="text"
                            id="firstName"
                            name="firstName"
                            class="form-control mb-2"
                            placeholder="First Name"
                            onChange={this.handleChange}
                            required
                            autoFocus
                        /> 
                    </div> 
                    <div class="col">             
                        <label for="lastName" class="sr-only">Last Name</label>
                        <input 
                            type="text"
                            id="lastName"
                            name="lastName"
                            class="form-control mb-2"
                            placeholder="Last Name"
                            onChange={this.handleChange}
                            required
                            
                        />
                    </div> 
                </div>
                <div class="row">
                    <div class="col">
                        <label for="username" class="sr-only">Username</label>
                        <input 
                            type="text"
                            id="username"
                            name="username"
                            class="form-control mb-2"
                            placeholder="username"
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div class="col">
                        <label for="password" class="sr-only">Password</label>
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            class="form-control mb-2"
                            placeholder="password"
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div class="col">
                        <label for="passwordVerification" class="sr-only">Password Check</label>
                        <input
                            type="password"
                            id="passwordVerification"
                            name="passwordVerification"
                            class="form-control mb-2"
                            placeholder="verify password"
                            onChange={this.handleChange}
                            required                        
                        />
                    </div>
                </div>
                <label for="emailInput" class="sr-only">Email</label>
                <input 
                    type="text"
                    id="emailInput"
                    name="emailInput"
                    class="form-control mb-2"
                    placeholder="email"
                    onChange={this.handleChange}
                    required
                />
                <div class="row">
                    <div class="col">
                        <button class="okColorBtn btn-lg btn-block" type="submit">
                            Submit
                        </button>
                    </div>
                    <div class="col">
                        <button class="cancelColorBtn btn-lg btn-block" >
                            Cancel
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}

export default Register