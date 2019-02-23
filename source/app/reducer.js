import { combineReducers } from 'redux';
import pagesReducer from './pages/reducer.js';
import alertReducer from './flux/alert.js';
import userReducer from './flux/user.js';
import menuReducer from './flux/menu.js';
import searchReducer from './flux/search.js';
import postsReducer from './flux/posts.js';
import categoryReducer from './flux/category.js';
import confirmReducer from './flux/confirm.js';


const reducer = combineReducers({
  pages: pagesReducer,
  alert: alertReducer,
  user: userReducer,
  posts: postsReducer,
  menu: menuReducer,
  category: categoryReducer,
  search: searchReducer,
  confirm: confirmReducer,
});

export default reducer;
