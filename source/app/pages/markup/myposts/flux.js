import createFlux from '../../../createFlux.js';
import initialState from '../../../initialState.js';
import api from '../../../api.js';
import { combineReducers } from 'redux';

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
