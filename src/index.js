import React from 'react';
import ReactDOM from 'react-dom';
import  Routes from './route'

import registerServiceWorker from './registerServiceWorker';

/* Global Style */
import './style/main.css';

/* Font Awesome */
import 'font-awesome/css/font-awesome.min.css'

ReactDOM.render(
    <Routes/>,
    document.getElementById('root')
);
