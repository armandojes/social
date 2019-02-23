import createFlux from '../createFlux.js';
import initialState from '../initialState.js';
import { combineReducers } from 'redux';

// i n s t a n c e s
const flux = createFlux('confirm');
const localState = initialState.confirm;

// a c t i o n s
export const set_state = flux.createActionCreator('set_state');
export const set_action = flux.createActionCreator('set_action');
export const set_title = flux.createActionCreator('set_title');
export const set_message = flux.createActionCreator('set_message');


// r e d u c e r s
const state = flux.createReducer(localState.state, 'set_state');
const action = flux.createReducer(localState.action, 'set_action');
const title = flux.createReducer(localState.title, 'set_title');
const message = flux.createReducer(localState.message, 'set_message');
export default combineReducers({state, action, title, message});
