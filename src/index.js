import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import combinedReducer from './App/rootReducer'
import App from './App/App';
import './index.css';

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

const middlewares = [thunk];
const middlewareEnhancer = applyMiddleware(...middlewares);

const store = createStore(
	combineReducers({
      ...combinedReducer,

	  middlewareEnhancer,
      routing: routerReducer
    })
);

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
	<Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <Route path="foo" component={acute}/>
          <Route path="bar" component={Bar}/>
        </Route>
      </Router>
    </Provider>,
    document.getElementById('mount')
);




//
// import 'semantic-ui-css/semantic.min.css';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux'
// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import combinedReducer from './App/rootReducer'
// import App from './App/App';
// import './index.css';
//
// const middlewares = [thunk];
// const middlewareEnhancer = applyMiddleware(...middlewares);
//
// const store = createStore(
// 	combinedReducer,
// 	{},
// 	middlewareEnhancer
// );
//
// ReactDOM.render(
// 	<Provider store={store}>
// 		<App />
// 	</Provider>,
// 	document.getElementById('root')
// );
