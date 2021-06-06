import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import sushiReducer from './reducers/sushiReducer';
import sashimiReducer from './reducers/sashimiReducer';

const rootReducer = combineReducers({
  sushiReducer: sushiReducer,
  sashimiReducer: sashimiReducer
});

const store = createStore(rootReducer, 
  composeWithDevTools(applyMiddleware(thunk))
);
// console.log(store)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


