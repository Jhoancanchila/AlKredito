import React from 'react';
import ReactDOM from 'react-dom';
import App from './router/App';
import { Provider } from 'react-redux'
import { initialState } from './api/initialState'
import { createStore, compose } from 'redux'
import { reducer } from './reducers'


const composeEnhanCers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhanCers())
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
