import React from 'react';
import { Route } from 'react-router-dom';

import BaseLayout from 'layout/containers/BaseLayout';
import Index from 'layout/containers/Index';

/**
 * All the routes for the application.
 * 
 * These are composed of three parts:
 * - Path
 * - Class name to mark links as active
 * - Component to show
 */
export default <Route path='/' component={BaseLayout}>
   <Route path='/' exact component={Index}/>
</Route>;
