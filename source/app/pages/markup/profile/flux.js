import { combineReducers } from 'redux';
import initialState from '../../../initialState.js';
import createFlux from '../../../createFlux.js';
import api from '../../../api.js';

// a s y  n c   a c t i o n s
export const load_data = () => async (dispatch, getState) => {
  dispatch(set_loading(true));
  const username = getState().pages.profile.username;
  const response = await api.user.get_sigle_for_username(username);
  if (!response.error){
    dispatch(set_data(response.data));
    dispatch(insert_posts(response.posts));
    dispatch(set_loading(false));
  } else {
    dispatch(set_loading('error'))
  }

}


//i n t a c e s
const localState = initialState.pages.profile;
const flux = createFlux('pages/profile');

//a c t i o n s
const set_data = flux.createActionCreator('set_data');
export const set_username = flux.createActionCreator('set_username');
const set_loading = flux.createActionCreator('set_loading');
const insert_posts = flux.createActionCreator('insert_posts');


//r e d u c e r s
const data = flux.createReducer(localState.data, 'set_data');
const loading = flux.createReducer(localState.loading, 'set_loading');
const username = flux.createReducer(localState.username, 'set_username');
const posts = flux.createReducer(localState.posts, 'insert_posts');
export default combineReducers({data, loading, posts, username});
