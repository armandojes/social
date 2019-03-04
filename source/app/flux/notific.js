import createFlux from '../createFlux.js';
import initialState from '../initialState.js';
import api from '../api.js';
import { combineReducers } from 'redux';


// i n t a n  c e s
const flux = createFlux('notific');
const localState = initialState.notific;

// a s y n c   a c t i o n s
export const load_items = () => async (dispatch, getState) => {
  dispatch(set_loading(true));
  const state = getState();
  const id_user = state.user.id;
  const token = state.user.token;
  const current_page = state.notific.current_page;
  const response = await api.notific.get_list({id_user, token, page: current_page + 1});
  if (!response.error){
    dispatch(set_current_page(current_page + 1));
    dispatch(insert_items(response.items));
    dispatch(set_num_pages(response.num_pages));
    dispatch(set_pending(false));
  }
  dispatch(set_loading(false));
}

export const load_pending = () => async (dispatch, getState) => {
  const state = getState();
  const {id, token} = state.user;
  const response = await api.notific.load_pending({id_user: id, token});
  dispatch(set_pending(response.pending));
}

// a c t i o  n s
const set_loading = flux.createActionCreator('set_loading');
export const set_active = flux.createActionCreator('set_active');
const insert_items = flux.createActionCreator('insert_items');
const set_pending = flux.createActionCreator('set_pending');
const set_num_pages = flux.createActionCreator('set_num_pages');
const set_current_page = flux.createActionCreator('set_current_page');

// r e d u c e r s
const items = flux.createReducer(localState.items, 'insert_items', 'CONCAT');
const active = flux.createReducer(localState.active, 'set_active');
const loading = flux.createReducer(localState.loading, 'set_loading');
const pending = flux.createReducer(localState.pending, 'set_pending');
const num_pages = flux.createReducer(localState.num_pages, 'set_num_pages');
const current_page = flux.createReducer(localState.current_page, 'set_current_page');
export default combineReducers({items,loading,pending,num_pages,current_page, active});
