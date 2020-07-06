import {GET_LOCATIONS, ADD_LOCATION, UPD_LOCATION, DEL_LOCATION, LOC_LOADING} from '../actions/types'

const initialState = {
    locations: [],
    loading: false,

};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_LOCATIONS:
            return {
                ...state,
                locations: action.payload,
                loading: false
            };
        case DEL_LOCATION:
            return{
                ...state,
                locations: state.locations.filter(
                    location => location._id !== action.payload)
            };
        case ADD_LOCATION:
            return{
                ...state,
                locations: [action.payload, ...state.locations]
                };
        case LOC_LOADING:
            return{
                ...state,
                loading: true
            }
        default: return state;
    }
}