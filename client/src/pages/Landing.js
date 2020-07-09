import React, {Component} from 'react'


class Landing extends Component {
    render(){
        return(
            <div className="text-center">
                <h1 className="h2">ESignout Version 2.0</h1>
                <h2 className="h3">WELCOME</h2>
                <div className="form-reg">
                    <p >
                        Welcome to eSignout! Please fill free to look around. If you would
                        like to take a look at the app you can sign in with the cridentials 
                        below. This will get you to the Locations list and will allow you 
                        to delete and add locations. Edit and View are coming soon but are
                        currently disabled. If you would like to sign up you can. Please note
                        that this website is still in Beta testing. Data could be lost at
                        any time. <br/>
                        <br/>
                        Esignout was built on the MERN stack and uses Bootstrap 5 alpha 1 and Sass
                        for the UI components. The updated code is avaliable on my 
                        <a className="aLink"href="https://github.com/KodingKlosty/eSignOut-v2">GitHub.</a>
                        This website and api are hosted on Heroku and the database is hosted with 
                        MongoDB.<br/> If you would like to contact me do so via my 
                        <a className="aLink" href="http://www.mangorainwebdesign.com">website</a>
                        <br/>
                        <br/>
                        Login Creds: <br/>
                        demo@demo.com <br/>
                        demo <br/>
                    </p>
                </div>
            </div>
        )
    }
}

export default Landing