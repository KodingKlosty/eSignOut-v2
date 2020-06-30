import React, {Component} from 'react'

import eSignout from '../imgs/eSignout.png'

class Header extends Component {
    render(){
        return(
            <div class="text-center header" >
                <img src={eSignout} alt="eSignout Logo" />
            </div>
        )
    }
}

export default Header