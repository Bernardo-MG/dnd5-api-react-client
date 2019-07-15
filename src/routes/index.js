import React from 'react';
import { Switch } from 'react-router-dom';

import SideMenuLayoutRoute from 'routes/SideMenuLayoutRoute';

import Index from 'views/components/Index';
import SearchView from 'views/containers/SearchView';

/**
 * All the routes for the application.
 * 
 * These are composed of three parts:
 * - Path
 * - Component to show
 */
export default <Switch>
   <SideMenuLayoutRoute path='/' exact component={Index}/>
   <SideMenuLayoutRoute path='/search' exact component={SearchView}/>
</Switch>;
