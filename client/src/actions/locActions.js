import API from '../API'
import {
    GET_LOCATIONS, 
    ADD_LOCATION, 
 //   UPD_LOCATION, 
    DEL_LOCATION, 
    LOC_LOADING
} from './types'
import { tokenConfig } from './authActions'
import { returnError, returnErrors } from './errorActions'


export const getLocations = (id) => dispatch => {
    dispatch(setLocLoading())
    API.get(`/api/locations/${id}`)
        .then(res => dispatch({
            type: GET_LOCATIONS,
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

export const delLocation = id => (dispatch, getState) => {
    API.delete(`/api/locations/${id}`, tokenConfig(getState))
        .then(res => dispatch({
            type: DEL_LOCATION,
            payload: id
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))

}

export const addLocation = location => (dispatch, getState) => {
    API.post('/api/locations/createLocation', location, tokenConfig(getState))
        .then(res => dispatch({
            type: ADD_LOCATION,
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))

}

export const setLocLoading = () => {
    return{
        type: LOC_LOADING
    }
}