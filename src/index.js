import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import storeConfig from './redux/storeConfig'
const preloadedState = window.__PRELOADED_STATE__
console.log(preloadedState)
delete window.__PRELOADED_STATE__

const store = createStore(storeConfig.store, preloadedState, applyMiddleware(storeConfig.middleware))
ReactDOM.hydrate(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
