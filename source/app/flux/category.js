import createFlux from '../createFlux.js';
import initialState from '../initialState.js';
import { combineReducers } from 'redux';
import api from '../api.js';

const flux = createFlux('/category');

//async actions
export const load_category = () => async (dispatch) => {
  dispatch(set_loading(true));
  const response = await api.category.get_list();
  dispatch(set_items(response.items));
  dispatch(set_loading(false));
}

//actions
const set_loading = flux.createActionCreator('set_loading');
const set_items = flux.createActionCreator('set_items');


//reducers
const localState = initialState.category;
const loading = flux.createReducer(localState.loading, 'set_loading');
const items = flux.createReducer(localState.items, 'set_items', 'CONCAT');

export default combineReducers({loading, items});
