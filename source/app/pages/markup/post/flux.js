import { combineReducers } from 'redux';
import initialState from '../../../initialState.js';
import createFlux from '../../../createFlux.js';
import api from '../../../api.js';
import { set_initialState as set_initialStateSaved } from '../mysaved/flux.js';

//async actions
export const load_post  = () => async (dispatch, getState) => {
  const id = getState().pages.post.id;
  const response = await api.post.get_single(id);
  if (response.error){
    dispatch(set_error(true))
  } else {
    dispatch(set_content(response.content));
    dispatch(set_title(response.title));
    dispatch(set_tags(response.meta.tags));
    dispatch(set_category(response.category));
    dispatch(set_meta(response.meta));
  }
  dispatch(set_loading(false));
}

export const LoadComentsForPost = () => async (dispatch, getState) => {
  const state = getState();
  const page = state.pages.post.current_page_coment;
  const id_post = state.pages.post.id;
  const pages_coments = state.pages.post.pages_coments;
  const response = await api.coments.get_list(id_post, page + 1 );
  if (!response.error){
    dispatch(set_currentpagecoment(page + 1));
    dispatch(insert_coments(response.coments));
    !pages_coments && (dispatch(set_pages_coments(response.pages_coments)));
  }
  dispatch(set_loadingcoments(false));
}


export const sed_coment = () => async (dispatch, getState) => {
  const state = getState();
  const coment = state.pages.post.content_coment;
  const id_post = state.pages.post.id;
  const id_user = state.user.id;
  const token = state.user.token;
  //new coment
  const payload = {
    id: null,
    user_id: id_user,
    post_id: id_post,
    coment: coment,
    date: 'ahora',
    meta: {username: state.user.username || null},
  };
  dispatch(new_coment([payload]));
  dispatch(set_contentcoment(''));
  const response = await api.coments.send({coment, id_post, id_user, token});
  if (response.error){
    location.reload();
  }
}

export const is_saved = () => async(dispatch, getState) => {
  const state = getState();
  const user_id = state.user.id;
  const post_id = state.pages.post.id;
  const response = await api.post.is_saved(post_id, user_id);
  dispatch(set_saved(response.saved));
}

export const save_post = () => async (dispatch, getState) => {
  dispatch(set_saved(true));
  dispatch(set_initialStateSaved());
  const state = getState();
  const id_user = state.user.id;
  const token = state.user.token;
  const id_post = state.pages.post.id;
  const response = await api.post.save(id_user, id_post, token);
  if(response.error){
    alert('error interno del servidor');
    location.reload();
  }
}

const flux = createFlux('pages/post');

//sync actions
export const set_initialState = flux.createActionInitialState();
export const set_id = flux.createActionCreator('set_id');
export const set_url = flux.createActionCreator('set_url');

const set_loading = flux.createActionCreator('set_loading');
const set_content = flux.createActionCreator('set_content');
const set_title = flux.createActionCreator('set_title');
const set_tags = flux.createActionCreator('set_tags');
const set_category = flux.createActionCreator('set_category');
const set_error = flux.createActionCreator('set_error');
const set_meta = flux.createActionCreator('set_meta');
const set_saved = flux.createActionCreator('set_saved');

export const set_contentcoment = flux.createActionCreator('set_contentcoment');
const set_loadingcoments = flux.createActionCreator('set_loadingcoments');
const set_currentpagecoment = flux.createActionCreator('set_currentpagecoment');
const insert_coments = flux.createActionCreator('insert_coments');
const new_coment = flux.createActionCreator('new_coment');
const set_pages_coments = flux.createActionCreator('set_page_coments');

//reducers
const localState = initialState.pages.post;

const loading = flux.createReducer(localState.loading, "set_loading");
const id = flux.createReducer(localState.id, "set_id");
const content = flux.createReducer(localState.content, "set_content");
const title = flux.createReducer(localState.title, "set_title");
const url = flux.createReducer(localState.url, "set_url");
const tags = flux.createReducer(localState.tags, "set_tags");
const category = flux.createReducer(localState.category, "set_category");
const meta = flux.createReducer(localState.meta, "set_meta");
const error = flux.createReducer(localState.error, "set_error");
const saved = flux.createReducer(localState.saved, "set_saved");
const current_page_coment = flux.createReducer(localState.current_page_coment, "set_currentpagecoment");
const pages_coments = flux.createReducer(localState.pages_coments, "set_page_coments");
const loading_coments = flux.createReducer(localState.loading_coments, "set_loadingcoments");
const content_coment = flux.createReducer(localState.content_coment, "set_contentcoment");


function coments (state=localState.coments, action = {}){
  const initialState = localState.coments;

  if (action.type === 'pages/post/insert_coments'){
    return state.concat(action.payload);
  }
  if (action.type === 'pages/post/new_coment'){
    return action.payload.concat(state);
  }
  if (action.type === 'pages/post/SET_INITIALSTATE'){
    return initialState;
  }
  return state;
}

export default combineReducers({
  current_page_coment,
  loading, id, content,
  title,
  coments,
  url,
  tags,
  category,
  error,
  meta,
  loading_coments,
  content_coment,
  pages_coments,
  saved,
});
