import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './App'

import configStore from './store/configStore';
import * as actions from './actions'

const store = configStore();
store.dispatch(actions.setTracks(tracks));

const tracks = [
    {
        title: 'Some track'
    },
    {
        title: 'Some other track'
    }
];
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
module.hot.accept();
