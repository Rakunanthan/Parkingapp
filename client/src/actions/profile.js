import axios from "axios";
import { setAlert } from "./alert";
import { GET_PROFILE,PROFILE_ERR } from "./types";


export const getCurrentProfile=()=>async dispatch=>
{
  try {
      const res=await axios.get('http://localhost:4000/api/profile/me');
      dispatch ({
          type:GET_PROFILE,
          payload:res.data
      });
  } catch (err) {
      dispatch ({
          type:PROFILE_ERR,
          payload:{msg:err.response.statusText,status:err.response.status}
      }); 
  }
}

// Create profile


export const createProfile=(formData,history,edit=false)=>async dispatch=>
{
    try {
        const config=
        {
            headers:{
                'Content-Type':'application/json'
            }

        }
        const res= await axios.post('http://localhost:4000/api/profile',formData,config);
        dispatch ({
            type:GET_PROFILE,
            payload:res.data
        });
        dispatch(setAlert(edit ? 'profile updated':'profile created','sucess'));
        if(!edit){
            history.push('/Dashboard');
        }
    } catch (err) {
        const errors=err.response.data.errors;

    if(errors){
        errors.forEach(error=>dispatch(setAlert(error.msg,'danger')))
    }
        dispatch ({
            type:PROFILE_ERR,
            payload:{msg:err.response.statusText,status:err.response.status}
        }); 
    }
}