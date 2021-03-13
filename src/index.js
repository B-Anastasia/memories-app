import React from 'react';
import ReactDom from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './App.jsx';
import reducers from './redux/reducers';
import './index.css';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#ff6a67',
        },
        secondary: {
            main: '#556271',
        },
    },
    status: {
        danger: 'orange',
    },
});

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDom.render(
    <MuiThemeProvider theme={theme}>
        <Provider store={store}>
            <App />
        </Provider>
    </MuiThemeProvider>
    , document.getElementById('root'));