import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router } from 'react-router-dom'
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux'; 
import sushiReducer from './reducers/sushiReducer';
import sashimiReducer from './reducers/sashimiReducer';

const rootReducer = combineReducers({
  sushiReducer: sushiReducer,
  sashimiReducer: sashimiReducer
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

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


