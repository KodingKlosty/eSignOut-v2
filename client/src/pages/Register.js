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
            <form id="regForm" onSubmit={this.handleSubmit} className="form-reg text-center">
                <h1 className="h3 mb-3 eSignoutLogin">Company Signup</h1>
                <div className="row">
                    <div className="col">
                        <label htmlFor="companyName" className="sr-only">Company Name</label>
                        <input
                            type="text"
                            id="companyName"
                            name="companyName"
                            className="form-control mb-2"
                            placeholder="Company Name"
                            onChange={this.handleChange}
                            required
                            autoFocus 
                        />
                    </div>
                </div>
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
                            required
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
                            required
                            
                        />
                    </div> 
                </div>
                <div className="row">
                    <div className="col">
                        <label htmlFor="username" className="sr-only">Username</label>
                        <input 
                            type="text"
                            id="username"
                            name="username"
                            className="form-control mb-2"
                            placeholder="username"
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="col">
                        <label htmlFor="emailInput" className="sr-only">Email</label>
                            <input 
                                type="text"
                                id="emailInput"
                                name="emailInput"
                                className="form-control mb-2"
                                placeholder="email"
                                onChange={this.handleChange}
                                required
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
                            required
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
                            required                        
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <button className="okColorBtn btn-lg btn-block" type="submit">
                            Submit
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
        )
    }
}

export default Register