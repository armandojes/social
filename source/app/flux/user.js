import createFlux from '../createFlux.js';
import initialState from '../initialState.js';
import api from '../api.js';
import { combineReducers } from 'redux';

//async actions
export const login_token = (data) => async (dispatch) => {
  const response = await api.user.login_token(data);
  if (!response.error){
    dispatch(set_user({
      logged: true,
      name: response.name,
      type: response.type,
      token: response.token,
      id: response.id,
      username: response.username,
    }));
  } else {
    dispatch(set_user({
      logged: false,
      name: '',
      type: '',
      token: '',
      id: '',
      username: null,
    }));
  }
}
export const loggout = () => async (dispatch, getState) => {
  const user = getState().user;

  dispatch(set_user({
    logged: false,
    name: '',
    type: '',
    token: '',
    id: '',
    username: null,
  }));
  document.cookie = "id=; max-age=1; path=/";
  document.cookie = "passlook=; max-age=1; path=/";
  document.cookie = "token=; max-age=1; path=/";
  document.cookie = "mail=; max-age=1; path=/";
  const response = await api.user.logout(user.id, user.token);
  if (response.error){
    alert('error_interno del servidor');
    location.reload();
  }
}

//action
const flux = createFlux('user');
export const set_user = flux.createActionCreator('SET_USER');

//reducer
const user = flux.createReducer(initialState.user, 'SET_USER');

export default user;
