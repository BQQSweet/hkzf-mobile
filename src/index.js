import React from 'react';
import ReactDOM from 'react-dom';
import axios from './utils/ajax'
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import './style/color.scss'
import App from './App';
import store from './store'
import './index.scss';


React.Component.prototype.$axios = axios
React.Component.prototype.baseUrl="http://localhost:8080"
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <App/>
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
