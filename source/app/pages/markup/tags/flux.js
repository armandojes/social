import { combineReducers } from 'redux';
import initialState from '../../../initialState.js';
import createFlux from '../../../createFlux.js';
import api from '../../../api.js';

// a s y n c   a c t i o n s
export const load_tags = () => async (dispatch, getState) => {
  dispatch(set_loading(true));
  const page = getState().pages.tags.current_page;
  const response = await api.tag.get_list(page + 1);
  if (!response.error){
    dispatch(insert_items(response.items));
    dispatch(set_current_page(page + 1));
    dispatch(set_pages(response.num_pages));
  }
  dispatch(set_loading(false));
}

//i n s t a n s e s
const flux = createFlux('pages/tags');
const localState = initialState.pages.tags;

// a c t i o n s
const set_loading = flux.createActionCreator('set_loading');
const insert_items = flux.createActionCreator('insert_items');
const set_pages = flux.createActionCreator('set_pages');
const set_current_page = flux.createActionCreator('set_current_page');


// r e d u c e r s
const loading = flux.createReducer(localState.loading, 'set_loading');
const items = flux.createReducer(localState.items, 'insert_items', 'CONCAT');
const pages = flux.createReducer(localState.pages, 'set_pages');
const current_page = flux.createReducer(localState.current_page, 'set_current_page');

export default combineReducers({loading, items, pages, current_page});
