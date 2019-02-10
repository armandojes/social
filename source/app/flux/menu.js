import createFlux from '../createFlux.js';
import initialState from '../initialState.js';
import { combineReducers } from 'redux';

const flux = createFlux('menu');


//sync reducers
export const set_menu = flux.createActionCreator('set_menu');

const localState = initialState.menu;

export default function menu (state = localState, action = {}){
  if (action.type === 'menu/set_menu'){
    return Object.assign({}, state, {active: action.payload });
  }
  return state;
}
