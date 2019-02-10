import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';


import reducer from './reducer.js';


var store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(
      ReduxThunk,
      logger,
    ),
  )
);

// var store = createStore(
//   reducer,
//   applyMiddleware(
//     ReduxThunk,
//   ),
// );

export default store;
