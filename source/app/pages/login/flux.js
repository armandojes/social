import { combineReducers } from 'redux';
import createFlux from '../../createFlux.js';
import initialState from '../../initialState.js';
import api from '../../api.js';
import { set_alert } from '../../flux/alert.js';
import { set_user } from '../../flux/user.js';


//async actions
export const login = () => async (dispatch, getState) => {
  const state = getState();
  const data = {password: state.pages.login.password, mail: state.pages.login.mail};
  dispatch(set_view('loading'));
  const response = await api.user.login(data);
  if(!response.error){
    dispatch(set_user({
      logged: true,
      name: response.name,
      type: response.type,
      token: response.token,
      id: response.id,
      username: response.username,
    }))
    return response;
  } else {
    dispatch(set_alert(response.errorMessage));
    dispatch(set_view('form'));
    return false;
  }
}


const flux = createFlux('pages/login');

//actioon creators
export const set_initialState = flux.createActionInitialState();
export const set_mail = flux.createActionCreator('SET_MAIL');
export const set_password = flux.createActionCreator('SET_PASSWORD');
export const set_view = flux.createActionCreator('SET_VIEW');

//reducers
const localState = initialState.pages.login;
const mail = flux.createReducer(localState.mail, 'SET_MAIL');
const password = flux.createReducer(localState.password, 'SET_PASSWORD');
const view = flux.createReducer(localState.view, 'SET_VIEW');

export default combineReducers({
  mail,
  password,
  view,
});
