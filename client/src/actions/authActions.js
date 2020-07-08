import { 
    USER_LOADED, 
    USER_LOADING, 
    AUTH_ERROR, 
    LOGIN_SUCCESS, 
    LOGIN_FAIL, 
    LOGOUT_SUCCESS, 
    REGISTER_SUCCESS, 
    REGISTER_FAIL 
} from "../actions/types";
import API from '../API'
import { returnErrors } from "./errorActions";

export const loadUser = () => (dispatch, getState) => {
    //User Loading
    dispatch({type: USER_LOADING});
  
    API.get('/api/authCheck' , tokenConfig(getState))
        .then(res => dispatch({
            type: USER_LOADED,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
            type: AUTH_ERROR
        });
    });
    
} 

//Login User
export const login = ({email, password}) => dispatch =>{
    //Headers
    const config ={
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({email,password})
    API.post('/api/login', body, config)
        .then(res => dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.data, 'LOGIN_FAIL'))
            dispatch({
                type: LOGIN_FAIL
            });
        });
};
// Register User
export const register = ({firstName, lastName, email, password}) => dispatch => {
    //Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({firstName,lastName,email,password})
    API.post('/api/register', body, config)
        .then(res => dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'));
            dispatch({
            type: REGISTER_FAIL
            });
        });
};

//Logout User
 export const logout = () => {
     return {
         type: LOGOUT_SUCCESS
     };
 };


// Setup Config/Check 

export const tokenConfig = getState => {
      //Get Token from LocalStorage
      const token = getState().auth.token;

      // Header Setup
      const config = { 
          headers:{
              "Content-type" : "application/json"
          }
      }
      // If there is a Token Add to header
      if(token) {
          config.headers['x-auth-token'] = token;
      }

      return config
  
}