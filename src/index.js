import React from 'react';
import { render } from 'react-dom';

import '@babel/polyfill';
import '@babel/register';

import Root from 'root/containers/Root';
import configureStore from 'store/configureStore';

// Data store
const store = configureStore();

// Root element, where the application will be loaded
const rootElement = document.getElementById('root');

// Render application into the root element
render(<Root store={store} />, rootElement);
