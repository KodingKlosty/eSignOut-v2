import {combineReducers} from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import orgReducer from './orgReducer';
import locReducer from './locReducer';
import teamReducer from './teamReducer';
import userReducer from './userReducer';


export default combineReducers({
    auth: authReducer,
    error: errorReducer,
    org: orgReducer,
    location: locReducer,
    team: teamReducer,
    user: userReducer,
})