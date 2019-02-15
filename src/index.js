import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App.sc.js';

import { Provider } from 'react-redux'
import configureStore from './Redux/store';

import XpBar from './Components/Bar/XpBar';
import * as serviceWorker from './serviceWorker';

function AppContainer() {
    return (
        <Provider store={configureStore()} >
        <App>
             <XpBar />
        </App>
        </Provider>
    );
}

ReactDOM.render(<AppContainer />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
