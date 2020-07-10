import API from "../API";
import { 
   // GET_ORGS,
    GET_ORG,
    ADD_ORG,
   // UPD_ORG,
    DEL_ORG,
    ORG_LOADING
} from "../actions/types";

export const getOrg = id => dispatch => {
    dispatch(setOrgLoading)
    API.get(`/api/orgs/${id}`)
        .then(res => dispatch({
            type: GET_ORG,
            payload: res.data
        }))
}

export const delOrg = id => dispatch => {
    API.delete(`/api/orgs/${id}`)
        .then(res => dispatch({
            type: DEL_ORG,
            payload: id
        }))

}

export const addOrg = org => dispatch => {
    API.post('/api/orgs/createCompany', org)
        .then(res => dispatch({
            type: ADD_ORG,
            payload: res.data
        }));
}

export const setOrgLoading = () => {
    return{
        type: ORG_LOADING
    }
}