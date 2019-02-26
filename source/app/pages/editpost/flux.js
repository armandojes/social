import initialState from '../../initialState.js';
import createFlux from '../../createFlux.js';
import { combineReducers } from 'redux';
import api from '../../api.js';
import { set_alert } from '../../flux/alert.js';


//i n s t a n c e s
const flux = createFlux('pages/editpost');
const localState = initialState.pages.edit_post;

//a s y n c   a c t i o n s
export const create = () => async (dispatch, getState) => {
  dispatch(set_view('updating'));
  const state = getState();
  let data = state.pages.edit_post;
  data = {
    content: data.content,
    id_post: data.id,
    title: data.title,
    tags: data.tags,
    category: data.category,
    picture: data.picture,
    id_user: state.user.id,
    token: state.user.token,
  }
  const response = await api.post.update(data);
  response.error
  ? dispatch(set_view('update_error'))
  : dispatch(set_view('updated'));
}

//a c t o n
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
export const set_id = flux.createActionCreator('SET_ID');

//async actions

export const load_post = () => async (dispatch, getState) => {
  const idpost = getState().pages.edit_post.id;
  const response = await api.post.get_single(idpost);
  if (!response.error){
    dispatch(set_title(response.title));
    dispatch(set_content(response.content));
    dispatch(set_category(response.category));
    dispatch(insert_tag(response.meta.tags));
    dispatch(set_picture(response.picture));
    dispatch(set_view('form'))
  } else {
    dispatch(set_view('error'))
  }

}


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



//reducers
const view = flux.createReducer(localState.view, 'SET_VIEW');
const title = flux.createReducer(localState.title, 'SET_TITLE');
const content = flux.createReducer(localState.content, 'SET_CONTENT');
const category = flux.createReducer(localState.category, 'SET_CATEGORY');
const tag_text = flux.createReducer(localState.tag_text, 'SET_TAGTEXT');
const picture = flux.createReducer(localState.picture, 'SET_PICTURE');
const images = flux.createReducer(localState.images, 'SET_IMAGES');
const url = flux.createReducer(localState.url, 'SET_URL');
const id = flux.createReducer(localState.id, 'SET_ID');

function tags (state = localState.tags, action = {}){
  const defaultState = localState.tags;
  if (action.type === 'pages/editpost/INSERT_TAG'){
    return state.includes(action.payload)
    ? state
    : state.concat(action.payload);
  }
  if (action.type === 'pages/editpost/DELETE_TAG'){
    return state.filter(tag => tag != action.payload); // eliminar elemento
  }
  if(action.type === 'pages/editpost/SET_INITIALSTATE'){
    return defaultState
  }
  return state
}

export default combineReducers({ id, view, title, content, category, tags, tag_text, picture, images, url});
