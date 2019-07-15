import React from 'react';

import PropTypes from 'prop-types';

import { Route } from 'react-router-dom';

import SideMenuLayout from 'views/components/SideMenuLayout';

const SideMenuLayoutRoute = ({ component: Component, ...rest }) => <Route {...rest} render={(props) => (
   <SideMenuLayout>
      <Component {...props} />
   </SideMenuLayout>
)} />;

SideMenuLayoutRoute.propTypes = {
   component: PropTypes.element.isRequired
};

export default SideMenuLayoutRoute;
