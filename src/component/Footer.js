import React, {Component} from 'react'

//imgs import
import MangoRainFooterLogo from '../imgs/MangoRainFooterLogo.png'


class Footer extends Component {
    render(){
        return(
            <div className="footer text-center" >
                <img src={MangoRainFooterLogo} alt='Mango Rain Logo' />
            </div>
        )
    }
}

export default Footer