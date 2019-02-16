import InitialState from '../../initialState.js';
import createFlux from '../../createFlux.js';
import { combineReducers } from 'redux';
import api from '../../api.js';
import { set_alert } from '../../flux/alert.js';

// i n s t a n c i a s
const localState = InitialState.pages.activate;
const flux = createFlux('pages/activate');

// a s y n c    a c t i o n s
export const activate = () => async (dispatch, getState) => {
  const {id_user, code } = getState().pages.activate;
  const response = await api.user.activate({id_user, code});
  if (!response.error){
    dispatch(set_status('success'))
  } else {
    if (response.errorCode == 401) dispatch(set_status('activated'));
    if (response.errorCode == 404) dispatch(set_status('error'));
    if (response.errorCode == 403) dispatch(set_status('error'));
  }
}


//a c t i o n s
const set_status = flux.createActionCreator('set_status');
export const set_code = flux.createActionCreator('set_code');
export const set_id_user = flux.createActionCreator('set_iduser');
export const set_initialState = flux.createActionInitialState();

// r e d u c e r s
const status = flux.createReducer(localState.status, 'set_status');
const code = flux.createReducer(localState.code, 'set_code');
const id_user = flux.createReducer(localState.id_user, 'set_iduser');
export default combineReducers({status, code, id_user});
