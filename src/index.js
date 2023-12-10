import ReactDOM from 'react-dom';
import React from 'react';

import App from './App';
import "./global.css";

const RootDom = document.getElementById('root');

ReactDOM.render(
    <React.StrictMode>
        {/* 严格模式 */}
        <App />
    </React.StrictMode>, RootDom
)
