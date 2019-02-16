import { combineReducers } from 'redux';
import createFlux from '../../createFlux.js';
import initialState from '../../initialState.js';
import {set_alert} from '../../flux/alert.js';
import api from '../../api.js';

//assyc actions
export const create_user = () => async (dispatch, getState) => {
  const state = getState();
  dispatch(set_view('loading'));
  const response = await api.user.create(state.pages.register);
  if (response.error){
    dispatch(set_view('form'));
    dispatch(set_alert(response.errorDescript))
  } else {
    dispatch(set_view('success'));
  }
}


const flux = createFlux('pages/register');

//actioon creators
export const set_mail = flux.createActionCreator('SET_MAIL');
export const set_password = flux.createActionCreator('SET_PASSWORD');
export const set_repassword = flux.createActionCreator('SET_REPASSWORD');
export const set_view = flux.createActionCreator('SET_VIEW');
export const set_name = flux.createActionCreator('SET_NAME');
export const set_username = flux.createActionCreator('SET_USERNAME');
export const set_sexo = flux.createActionCreator('SET_SEXO');
export const set_initialState = flux.createActionInitialState();

//reducers
const localState = initialState.pages.register;
const mail = flux.createReducer(localState.mail, 'SET_MAIL');
const password = flux.createReducer(localState.password, 'SET_PASSWORD');
const re_password = flux.createReducer(localState.re_password, 'SET_REPASSWORD');
const view = flux.createReducer(localState.view, 'SET_VIEW');
const name = flux.createReducer(localState.name, 'SET_NAME');
const username = flux.createReducer(localState.username, 'SET_USERNAME');
const sexo = flux.createReducer(localState.sexo, 'SET_SEXO');

export default combineReducers({
  mail,
  password,
  re_password,
  view,
  name,
  username,
  sexo,
});
