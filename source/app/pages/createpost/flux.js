import InitialState from '../../initialState.js';
import createFlux from '../../createFlux.js';
import { combineReducers } from 'redux';
import api from '../../api.js';
import { set_alert } from '../../flux/alert.js';


const flux = createFlux('pages/createpost');

//acton creators
export const set_initial_state = flux.createActionInitialState();

export const set_title = flux.createActionCreator('SET_TITLE');
export const set_view = flux.createActionCreator('SET_VIEW');
export const set_content = flux.createActionCreator('SET_CONTENT');
export const set_category = flux.createActionCreator('SET_CATEGORY');
export const set_tagtext = flux.createActionCreator('SET_TAGTEXT');
export const insert_tag = flux.createActionCreator('INSERT_TAG');
export const set_delete = flux.createActionCreator('DELETE_TAG');
export const set_picture = flux.createActionCreator('SET_PICTURE');
export const set_images = flux.createActionCreator('SET_IMAGES');
export const set_url = flux.createActionCreator('SET_URL');

//async actions
export const upload_miniature = (formData) => async (dispatch) => {
  dispatch(set_picture('loading'));
  const response = await api.picture.upload_miniature(formData);
  if (response.error){
    dispatch(set_alert(response.errorMessage));
    dispatch(set_picture('form'));
  } else {
    dispatch(set_picture(response.url));
  }
}

export const picture_upload = (formData) => async (dispatch) => {
  dispatch(set_images('loading'));
  const response = await api.picture.upload(formData);
  dispatch(set_images('button'));
  if (response.error){
    dispatch(set_alert(response.errorMessage))
    return false;
  } else {
    return response.url
  }
}

export const create = (data) => async (dispatch, getState) => {
  dispatch(set_view('loading'));
  const state = getState();
  let data = state.pages.create_post;
  data = {
    content: data.content,
    title: data.title,
    tags: data.tags,
    category: data.category,
    picture: data.picture,
    id_user: state.user.id,
    token: state.user.token,
  }
  const response = await api.post.create(data);
  if (!response.error){
    dispatch(set_view('success'));
    dispatch(set_url(response.url));
  } else {
    alert('Error interno del servidor');
    location.reload();
  }
}

//reducers
const localState = InitialState.pages.create_post;
const view = flux.createReducer(localState.view, 'SET_VIEW');
const title = flux.createReducer(localState.title, 'SET_TITLE');
const content = flux.createReducer(localState.content, 'SET_CONTENT');
const category = flux.createReducer(localState.category, 'SET_CATEGORY');
const tag_text = flux.createReducer(localState.tag_text, 'SET_TAGTEXT');
const picture = flux.createReducer(localState.picture, 'SET_PICTURE');
const images = flux.createReducer(localState.images, 'SET_IMAGES');
const url = flux.createReducer(localState.url, 'SET_URL');

function tags (state = localState.tags, action = {}){
  const localtagState = localState.tags;
  if (action.type === 'pages/createpost/INSERT_TAG'){
    return state.includes(action.payload)
    ? state
    : state.concat([action.payload]);
  }
  if (action.type === 'pages/createpost/DELETE_TAG'){
    return state.filter(tag => tag != action.payload); // eliminar elemento
  }
  if(action.type === 'pages/createpost/SET_INITIALSTATE'){
    return localtagState
  }
  return state
}


// view
// title
// content
// category
// tags

export default combineReducers({ view, title, content, category, tags, tag_text, picture, images, url});
