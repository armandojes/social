import createFlux from '../../../createFlux.js';
import initialState from '../../../initialState.js';
import api from '../../../api.js';
import { combineReducers } from 'redux';

const flux = createFlux('pages/category');

//async action creators
export const load_data = () => async (dispatch, getState) => {
  dispatch(set_loading(true));
  const url_category = getState().pages.category.url;
  const response = await api.category.get_data(url_category);
  if (!response.error){
    dispatch(set_name(response.name))
    dispatch(set_id(response.id))
  }
  return response;
}

export const load_posts = () => async (dispatch, getState) => {
  dispatch(set_loading(true));
  const state = getState();
  const { current_page, id } = state.pages.category;
  const response = await api.category.get_posts(id, current_page + 1);
  if (!response.error){
    dispatch(set_pages(response.pages));
    dispatch(set_currentpage(current_page + 1));
    dispatch(insert_items(response.items));
  }
  dispatch(set_loading(false));
}

//sync actions
export const set_initialState = flux.createActionInitialState();
const set_loading = flux.createActionCreator('set_loading');
const set_pages = flux.createActionCreator('set_pages');
const set_currentpage = flux.createActionCreator('set_currentpage');
const insert_items = flux.createActionCreator('insert_items');
const set_name = flux.createActionCreator('set_name');
const set_id = flux.createActionCreator('set_id');
export const set_url = flux.createActionCreator('set_url');


//reducers
const localstate = initialState.pages.category;
const loading = flux.createReducer(localstate.loading, 'set_loading');
const pages = flux.createReducer(localstate.pages, 'set_pages');
const current_page = flux.createReducer(localstate.current_page, 'set_currentpage');
const items = flux.createReducer(localstate.items, 'insert_items', 'CONCAT');
const name = flux.createReducer(localstate.name, 'set_name');
const id = flux.createReducer(localstate.id, 'set_id');
const url = flux.createReducer(localstate.url, 'set_url');

export default combineReducers({
  loading,
  pages,
  current_page,
  items,
  name,
  url,
  id,
});
