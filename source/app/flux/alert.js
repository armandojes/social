import createFlux from '../createFlux.js';
import initialState from '../initialState.js';
import { combineReducers } from 'redux';



const flux = createFlux('alert');

//actions
export const set_alert = flux.createActionCreator('SET_MESSAGE');

//reducers
const localState = initialState.alert;
const message = flux.createReducer(localState.message, 'SET_MESSAGE');


//xport reducers
export default combineReducers({message});
