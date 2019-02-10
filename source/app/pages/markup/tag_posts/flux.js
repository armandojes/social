import { combineReducers } from 'redux';
import initialState from '../../../initialState.js';
import createFlux from '../../../createFlux.js';
import api from '../../../api.js';

// i n s t a n c i a s
const localState = initialState.pages.tag;
const flux = createFlux('pages/tag');

// a s y n c   a c t i o n s
export const load_posts = () => async (dispatch, getState) => {
  dispatch(set_loading(true));
  const state = getState();
  const {current_page, name} = state.pages.tag;
  const response = await api.tag.get_posts(name, current_page + 1);
  if (!response.error){
    dispatch(insert_items(response.items));
    dispatch(set_pages(response.pages));
    dispatch(set_current_page(current_page + 1));
  }
  dispatch(set_loading(false));
}

// a c t i o ns
export const set_initialState = flux.createActionInitialState();
const set_loading = flux.createActionCreator('set_loading');
const insert_items = flux.createActionCreator('insert_items');
const set_pages = flux.createActionCreator('set_pages');
const set_current_page = flux.createActionCreator('set_current_page');
export const set_name = flux.createActionCreator('set_name');


// r e d u c e r s
const loading = flux.createReducer(localState.loading, 'set_loading');
const items = flux.createReducer(localState.items, 'insert_items', 'CONCAT');
const pages = flux.createReducer(localState.pages, 'set_pages');
const current_page = flux.createReducer(localState.current_page, 'set_current_page');
const name = flux.createReducer(localState.name, 'set_name');

//r e d u c e r   c o m b i n e d
export default combineReducers({loading, items, pages, current_page, name});
