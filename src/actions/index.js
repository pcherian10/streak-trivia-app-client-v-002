import { FETCH_USER, LOGOUT, FETCH_QUESTION } from "./types"
import URL_ROOT from './URL'

export const token = localStorage.getItem('token');

export const headers = {
    'Content-Type': 'application/json',
    Accepts: 'application/json',
    Authorization: token
  };


//=================================================USER FUNCTIONS

export const handleErrors = (response) => {
  console.log(response)
  if (!response.ok) throw Error(response.statusText);
  return response
}

export const getCurrentUser = (email, password) => {
  return dispatch => fetch(`${URL_ROOT}current_user`, 
    { headers })
    .then(handleErrors)
    .then(res => res.json())
    .then(res => { dispatch({type: FETCH_USER, payload: res}) })
    .catch(function(error) {
      console.log(error);
    })
}

export function addUser (user) {
    return dispatch => {
      fetch(`${URL_ROOT}users`, {
        method: 'POST',
        headers: headers,
        data: {},
        dataType: "JSON",
        body: JSON.stringify({ user })
      }).then(handleErrors)
      .then(res => res.json())
      .then(res => {
        dispatch({type: FETCH_USER, payload: res})
      })
    }
  };

   export const logout = () => {
     return dispatch => {
       dispatch({type: LOGOUT })
     }
   }

  //=================================================QUESTION FUNCTIONS

  export const fetchQuestion = user => {
    return dispatch => {
      fetch(`${URL_ROOT}users/${user}/question`, {
        method: 'GET',
        headers: headers,
      })
      .then(res => res.json())
      .then(res => {
          dispatch({type: FETCH_QUESTION, payload: res})
      })
      }

  }









