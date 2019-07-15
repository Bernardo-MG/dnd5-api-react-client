import React from 'react';

import PropTypes from 'prop-types';

import { Route } from 'react-router-dom';

import BaseLayout from 'views/containers/BaseLayout';

const SideMenuLayoutRoute = ({ component: Component, ...rest }) => <Route {...rest} render={(props) => (
   <BaseLayout>
      <Component {...props} />
   </BaseLayout>
)} />;

SideMenuLayoutRoute.propTypes = {
   component: PropTypes.element.isRequired
};

export default SideMenuLayoutRoute;
