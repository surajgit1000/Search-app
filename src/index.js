import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Exp from './components/Exp';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(<BrowserRouter>
    <App/>
</BrowserRouter>, document.getElementById('root'));