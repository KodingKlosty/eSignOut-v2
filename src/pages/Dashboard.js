import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getLocations, addLocation, delLocation} from '../actions/locActions'
import LocModal from '../component/LocModal'
import PropTypes from 'prop-types'

class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state={
            companyName: "ACME WebDesign",
            orgId: "5f0156dea5abbe0fac1cea71"
        }
    }

    componentDidMount(){
        this.props.getLocations(this.state.orgId);
    }

    onDeleteClick =(id) => {
        this.props.delLocation(id);
    }

    render(){
        const {locations} = this.props.location
        const stateData = this.state
        return(
            <div>
                <div className="divTopSpacing text-center">
                    <h1>{stateData.companyName}</h1>
                </div>
                <div>
                    <div className="divTopSpacing text-center">
                        <h2>Locations</h2>
                        <LocModal 
                            orgId={this.state.orgId}
                        />
                    </div>
                    <div className="tableBotSpacing">
                    <table className="table table-dash table-striped text-center">
                        <thead >
                            <tr>
                                <th scope="col">Location Name</th>
                                <th scope="col">Emp. In</th>
                                <th scope="col">Emp. Out</th>
                                <th scope="col">Total Emp.</th>
                                <th scope="col">Options</th>
                            </tr>
                        </thead>
                        <tbody className="text-center align-middle">
                            {locations.map(({_id, locationName}) => (
                                <tr key = {_id}>
                                    <td>{locationName}</td>
                                    <td></td>
                                    <td>##</td>
                                    <td>##</td>
                                    <td>
                                        <button 
                                            className="infoColorBtn btn-sm"
                                            tabindex="-1"
                                            disabled
                                            >
                                                View
                                        </button>
                                        <button 
                                            className="okColorBtn btn-sm"
                                            tabindex="-1"
                                            disabled
                                        >
                                            Edit
                                        </button>
                                        <button 
                                            className="cancelColorBtn btn-sm" 
                                            onClick={this.onDeleteClick.bind(this, _id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        )
    }
}

Dashboard.propTypes = {
    getLocations: PropTypes.func.isRequired,
    delLocation: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired
}

const mapStateToProps = (state) =>({
    location: state.location
})
export default connect(mapStateToProps, { getLocations, delLocation })(Dashboard)