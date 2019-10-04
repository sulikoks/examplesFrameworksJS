import React from 'react';
import ReactDOM from 'react-dom';
import {state, actions, subscribe} from './redux/state';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

let renderEnterTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} actions={actions} />
        </BrowserRouter>
    , document.getElementById('root'));
};
renderEnterTree();
subscribe(renderEnterTree);
