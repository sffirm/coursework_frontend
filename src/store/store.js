import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';

import {
  crossword,
  formPage,
  datePage,
} from './reducers';

const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;;

const rootReducer = combineReducers({
  crossword,
  formPage,
  datePage,
});

export const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(...middleware),
  )
);

