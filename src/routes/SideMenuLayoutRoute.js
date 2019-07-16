import React from 'react';

import PropTypes from 'prop-types';

import { Route } from 'react-router-dom';

import { SideMenuLayout } from 'views';

import sideLinks from 'config/links';

import { title } from 'config/app';

const SideMenuLayoutRoute = ({ component: Component, links, ...rest }) => <Route {...rest} render={(props) => (
   <SideMenuLayout links={ sideLinks } title={ title }>
      <Component {...props} />
   </SideMenuLayout>
)} />;

SideMenuLayoutRoute.propTypes = {
   component: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
   links: PropTypes.arrayOf(
      PropTypes.shape({
         text: PropTypes.string,
         link: PropTypes.string,
         id: PropTypes.string
      })
   )
};

export default SideMenuLayoutRoute;
