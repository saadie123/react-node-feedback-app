import materializeCSS from 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import App from './App';
import reducers from './store/reducers/index';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

window.axios = axios;

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

const app = (
    <Provider store={store}>
        <BrowserRouter>
                <App />
        </BrowserRouter>
    </Provider>
    
)

ReactDOM.render(app , document.getElementById('root'));
registerServiceWorker();
console.log('stripe key',process.env.REACT_APP_STRIPE_KEY);