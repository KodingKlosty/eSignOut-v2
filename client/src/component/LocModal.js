import React, {Component} from 'react'
import {connect} from 'react-redux'
import { addLocation } from '../actions/locActions'

class LocModal extends Component {
    constructor(props){
        super(props)
        this.state = {
            modal: false,
            locationName: '',
        }
    }


    show = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    handleChange = evn => {
        const {target} = evn
        const value = target.value
        const {name} = target
        this.setState({
            [name]: value
        });
    }

    closeModal = () => {
        const modal = document.getElementById('locModal')[0]

        modal.hide()
        return false
    }

    onSubmit = evn => {
        evn.preventDefault();
        const{locationName } = this.state
        const orgId = this.props.auth.orgId
        const newLocation = {
            locationName: locationName,
            orgId: orgId
        }
        
        this.props.addLocation(newLocation) 


    }

    render(){
        return(
            <div>            
                <button 
                    type="button"
                    className="primaryColorBtn btn-sm"
                    data-toggle="modal"
                    data-target="#locModal"

                >
                    Add Location
                </button>


            <div className="modal fade"  id="locModal" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Add Location</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className ="modal-body">
                        <form onSubmit={this.onSubmit}>
                            <label htmlFor="locationName" className="sr-only">Location Name</label>
                            <input 
                                type="text"
                                id="locationName"
                                name="locationName"
                                className="form-control mb-2"
                                placeholder="Location Name"
                                onChange={this.handleChange}
                            />
                         <div className="modal-footer">
                            <button type="button" className="cancelColorBtn btn-sm" data-dismiss="modal">Close</button>
                            <button type="submit" className="okColorBtn btn-sm" >Add Location</button>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
</div>
        )
    }
}

const mapStateToProps = state => ({
    location: state.location,
    auth: state.auth.user
})

export default connect(mapStateToProps, {addLocation})(LocModal)