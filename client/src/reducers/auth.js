<<<<<<< HEAD
/* eslint-disable import/no-anonymous-default-export */
import{
    REGISTER_SUCESS,REGISTER_FAIL,USER_LOAD,AUTH_ERR,LOGIN_FAIL,LOGIN_SUCCESS,LOGOUT
}from '../actions/types';

const initialState={
    token:localStorage.getItem('token'),
    isAuthenticated:null,
    loading: true,
    user:null
}

export default function(state=initialState,action){
const{type,payload}=action;
    switch(type)
{
case USER_LOAD:{
    return{
        ...state,
        isAuthenticated:true,
        loading:false,
        user:payload
    }
}

case REGISTER_SUCESS:
case LOGIN_SUCCESS:
    localStorage.setItem('token',payload.token);
    return{
        ...state,
        ...payload,
        isAuthenticated:true,
        loading:false
    } 
    case REGISTER_FAIL:
    case AUTH_ERR:
    case LOGIN_FAIL:
    case LOGOUT:
        localStorage.removeItem('token');
        return{
            ...state,
            token:null,
            isAuthenticated:false,
            loading:false
        }
        default:
            return state;
}
=======
/* eslint-disable import/no-anonymous-default-export */
import{
    REGISTER_SUCESS,REGISTER_FAIL,USER_LOAD,AUTH_ERR,LOGIN_FAIL,LOGIN_SUCESS,LOGOUT
}from '../actions/types';

const initialState={
    token:localStorage.getItem('token'),
    isAuthenticated:null,
    loading: true,
    user:null
}

export default function(state=initialState,action){
const{type,payload}=action;
    switch(type)
{
case USER_LOAD:{
    return{
        ...state,
        isAuthenticated:true,
        loading:false,
        user:payload
    }
}

case REGISTER_SUCESS:
case LOGIN_SUCESS:
    localStorage.setItem('token',payload.token);
    return{
        ...state,
        ...payload,
        isAuthenticated:true,
        loading:false
    }
    case REGISTER_FAIL:
    case AUTH_ERR:
    case LOGIN_FAIL:
    case LOGOUT:
        localStorage.removeItem('token');
        return{
            ...state,
            token:null,
            isAuthenticated:false,
            loading:false
        }
        default:
            return state;
}
>>>>>>> bb42394725417005e497b9e5cf62b95c5b2ba248
}