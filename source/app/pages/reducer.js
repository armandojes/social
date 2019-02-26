import { combineReducers } from 'redux';

//pages Reducers
import reducerLogin from './login/flux.js';
import reducerRegister from './register/flux.js';
import reducerActivate from './activate/flux.js';

//admin pages
import createPostReducer from './createpost/flux.js';
import editPostReducer from './editpost/flux.js';

//public pages
import PostReducer from './markup/post/flux.js';
import myPostsReducer from './markup/myposts/flux.js';
import mySavedReducer from './markup/mysaved/flux.js';
import categoryPosts from './markup/category_posts/flux.js';
import tagsReducer from './markup/tags/flux.js';
import tagsPostsReducer from './markup/tag_posts/flux.js';

const reducer = combineReducers({
  login: reducerLogin,
  register: reducerRegister,
  create_post: createPostReducer,
  edit_post: editPostReducer,
  post:PostReducer,
  myposts: myPostsReducer,
  mysaved: mySavedReducer,
  category: categoryPosts,
  tags: tagsReducer,
  tag: tagsPostsReducer,
  activate: reducerActivate,
});

export default reducer;
