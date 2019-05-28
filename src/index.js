import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// 引用redux所要引用的
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'

// 引入reducer
import reducer from './reducers/index.js';

import * as serviceWorker from './serviceWorker';//create-react-app 创建好带的缓存

// 传入reducer，传入中间键管理，然后传入中间键
const store = createStore(reducer, applyMiddleware(thunk));
ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
    , document.getElementById('root'));

serviceWorker.unregister();
