import API from '../API'
import {GET_LOCATIONS, ADD_LOCATION, UPD_LOCATION, DEL_LOCATION, LOC_LOADING} from './types'


export const getLocations = (id) => dispatch => {
    dispatch(setLocLoading())
    API.get(`/locations/${id}`)
        .then(res => dispatch(
            {type: GET_LOCATIONS,
            payload: res.data
        }))
}

export const delLocation = id => dispatch => {
    API.delete(`/locations/${id}`)
        .then(res => dispatch({
            type: DEL_LOCATION,
            payload: id
        }))

}

export const addLocation = location => dispatch => {
    API.post('/locations/createLocation', location)
        .then(res => dispatch({
            type: ADD_LOCATION,
            payload: res.data
        }));
}

export const setLocLoading = () => {
    return{
        type: LOC_LOADING
    }
}