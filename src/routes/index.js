import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Index, CharClassView, CharClassListView } from 'views';

/**
 * All the routes for the application.
 * 
 * These are composed of three parts:
 * - Path
 * - Component to show
 */
export default <Switch>
   <Route path='/' exact component={Index} />
   <Route path='/classes' exact component={CharClassListView} />
   <Route path='/classes/:id' exact render={(props) => {
      const {
         match: {
            params: { id }
         }
      } = props;
      return (
         <CharClassView
            key={id}
            {...props}
         />
      );
   }} />
</Switch>;
