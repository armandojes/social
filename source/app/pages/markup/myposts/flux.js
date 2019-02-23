import createFlux from '../../../createFlux.js';
import initialState from '../../../initialState.js';
import api from '../../../api.js';
import {set_title, set_message, set_state, set_action } from '../../../flux/confirm.js';
import { combineReducers } from 'redux';
import { set_initialState as set_initialState_posts } from '../../../flux/posts.js';

const flux = createFlux('pages/myposts');

//async action creators
export const load_posts = () => async (dispatch, getState) => {
  dispatch(set_loading(true));
  const state = getState();
  const { current_page } = state.pages.myposts;
  const { id } = state.user;
  const response = await api.post.get_my_posts(id, current_page + 1);
  if (response.error){
    if (response.total_items > 0){
      alert(response.errorMessage);
      location.reload()
    }
  } else {
    dispatch(insert_items(response.items));
    dispatch(set_pages(response.pages));
    dispatch(set_currentpage(current_page + 1));
  }
  dispatch(set_loading(false));
}
export const set_initialState = flux.createActionInitialState();

export const confirm_delete = (id) => (dispatch) => {
  dispatch(set_title('Eliminar post'))
  dispatch(set_message('Realmente quiere eliminar este post'))
  dispatch(set_state(true));
  dispatch(set_action(delete_post(id)));
}

const delete_post = (id_post) => async (dispatch, getSTate) => {
  const state = getSTate();
  const token = state.user.token;
  const id_user = state.user.id;
  const response = await api.post.delete({id_post, token, id_user});
  if (!response.error){
    dispatch(set_initialState());
    dispatch(load_posts());
    dispatch(set_initialState_posts());
  } else {
    alert(response.errorMessage);
    location.reload();
  }
}

//sync actions
const set_loading = flux.createActionCreator('SET_LOADING');
const set_pages = flux.createActionCreator('SET_PAGES');
const set_currentpage = flux.createActionCreator('SET_CURRENTPAGE');
const insert_items = flux.createActionCreator('INSERT_ITEMS');


//reducers
const localstate = initialState.pages.myposts;

const loading = flux.createReducer(localstate.loading, 'SET_LOADING');
const items = flux.createReducer(localstate.items, 'INSERT_ITEMS', 'CONCAT');
const pages = flux.createReducer(localstate.pages, 'SET_PAGES');
const current_page = flux.createReducer(localstate.current_page, 'SET_CURRENTPAGE');

export default combineReducers({loading, items, pages, current_page});
