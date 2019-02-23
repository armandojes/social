import createFlux from '../createFlux.js';
import initialState from '../initialState.js';
import api from '../api.js';
import { combineReducers } from 'redux';

const flux = createFlux('posts');

//async action creators
export const load_post = () => async ( dispatch, getState) => {
  const posts = getState().posts;
  dispatch(set_loading(true));
  const response = await api.post.get_list(posts.current_page + 1);
  if (response.error){
    alert(response.errorMessage);
    location.reload();
  } else {
    dispatch(insert_items(response.items));
    dispatch(set_pages(response.pages));
    dispatch(set_currentpage(posts.current_page + 1));
  }
  dispatch(set_loading(false));
}


//sync actions
export const set_initialState = flux.createActionInitialState();
const set_loading = flux.createActionCreator('SET_LOADING');
const set_pages = flux.createActionCreator('SET_PAGES');
const set_currentpage = flux.createActionCreator('SET_CURRENTPAGE');
const insert_items = flux.createActionCreator('INSERT_ITEMS');


//reducers
const localstate = initialState.posts;

const loading = flux.createReducer(localstate.loading, 'SET_LOADING');
const items = flux.createReducer(localstate.items, 'INSERT_ITEMS', 'CONCAT');
const pages = flux.createReducer(localstate.pages, 'SET_PAGES');
const current_page = flux.createReducer(localstate.current_page, 'SET_CURRENTPAGE');

export default combineReducers({loading, items, pages, current_page});
