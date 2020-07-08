import {  ADD_ORG, UPD_ORG, DEL_ORG, GET_ORG, ORG_LOADING } from "../actions/types";

const initialState = {
    orgs: [],
    loading: false
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ORG:
            return {
                ...state,
                orgs: action.payload,
                loading: false
            };
        case ADD_ORG:
            return{
                ...state,
                orgs: [action.payload, ...state.orgs]
            };
        case DEL_ORG: 
            return{
                ...state,
                orgs: state.locations.filter(
                    org => org._id !== action.payload
                )
            };
        case ORG_LOADING:
            return{
                ...state,
                loading: true
            };
        default: return state;
    }
}