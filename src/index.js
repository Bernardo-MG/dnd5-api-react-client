import React from 'react';
import { render } from 'react-dom';

import '@babel/polyfill';

import Root from 'root/containers/Root';
import { createBrowserHistory } from 'history';
import configureStore from 'store/configureStore';

// Data store
const store = configureStore();

// History for the routes
const history = createBrowserHistory();

// Root element, where the application will be loaded
const rootElement = document.getElementById('root');

// Render application into the root element
render(<Root store={store} history={history} />, rootElement);
