import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './main.scss';

import './fonts/fonts.scss';
import { Provider } from 'react-redux';

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Provider><App tab="home" /></Provider>);