import React from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

/**
 * Base layout for the application. This will frame all the views.
 * 
 * It contains a navigation bar on the left side, and the view on the rest of the screen.
 */
const BaseLayout = (props) =>
   <React.Fragment>
      <AppBar position="relative">
         <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
               Title
            </Typography>
         </Toolbar>
      </AppBar>
      <main>
         {props.children}
      </main>
   </React.Fragment>;

BaseLayout.propTypes = {
   /** Children elements, the view contents */
   children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object
   ])
};

const mapStateToProps = () => {
   return {};
};

const mapDispatchToProps = () => {
   return {};
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(BaseLayout);
