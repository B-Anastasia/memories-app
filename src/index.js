import React from 'react';
import ReactDom from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import App from './App.jsx';
import reducers from './redux/reducers';

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));