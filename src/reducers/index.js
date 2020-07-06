import {combineReducers} from 'redux';
import authReducer from './authReducer'
import orgReducer from './orgReducer';
import locReducer from './locReducer';
import teamReducer from './teamReducer';
import userReducer from './userReducer';


export default combineReducers({
    auth: authReducer,
    org: orgReducer,
    location: locReducer,
    team: teamReducer,
    user: userReducer,
})