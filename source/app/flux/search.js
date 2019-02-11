import createFlux from '../createFlux.js';
import initialState from '../initialState.js';
import api from '../api.js';
import { combineReducers } from 'redux';

const flux = createFlux('search');
const localState = initialState.search;

// a c t i  o n s
const set_query = flux.createActionCreator('set_query');
export const set_active = flux.createActionCreator('set_active');

//r e d u c e r s
const query = flux.createReducer(localState.query, 'set_query');
const active = flux.createReducer(localState.active, 'set_active');
export default combineReducers({query, active});
