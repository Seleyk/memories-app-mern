import React from 'react';
import ReactDOM from 'react-dom';
// redux global store
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';

// reducers import
import reducers from './reducers';

import App from './App';

// redux setup
const store = createStore(reducers, compose(applyMiddleware(thunk)))


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
