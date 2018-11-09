import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store'
import {Provider} from 'mobx-react'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <Provider {...store}>
            <App/>
        </Provider>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
