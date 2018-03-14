import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import './index.css';
import App from './App';
import reducers from './store/reducers/index';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers, {}, applyMiddleware());

const app = (
    <Provider store={store}>
        <BrowserRouter>
                <App />
        </BrowserRouter>
    </Provider>
    
)

ReactDOM.render(app , document.getElementById('root'));
registerServiceWorker();
