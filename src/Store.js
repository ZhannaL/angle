import { createBrowserHistory } from 'history';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';
import combinedReducer from './App/rootReducer';



const middlewares = [thunk];
const middlewareEnhancer = applyMiddleware(...middlewares);

export const store = createStore(
  combinedReducer,
  {},
  middlewareEnhancer,
);

console.log('store=', store);

// export const history = syncHistoryWithStore(browserHistory, store)
export const history = syncHistoryWithStore(createBrowserHistory(), store);
