import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './main.scss';

import './fonts/fonts.scss';
import { Provider } from 'react-redux';

import { createRoot } from 'react-dom/client';
import { store } from './store/configureStore';
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Provider store = {store}>
        <App />
    </Provider>
);