import React from 'react';
import ReactDOM from 'react-dom';
import axios from './utils/ajax'
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App';
import './index.scss';

React.Component.prototype.$axios = axios
ReactDOM.render(
    <React.StrictMode>
        <Router>
            <App/>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
