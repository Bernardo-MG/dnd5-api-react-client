import React from 'react';

import PropTypes from 'prop-types';

import { injectIntl, intlShape } from 'react-intl';

import { connect } from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

/**
 * Base layout for the application. This will frame all the views.
 * 
 * It contains a navigation bar on the left side, and the view on the rest of the screen.
 */
const BaseLayout = ({ intl, children }) => <React.Fragment>
   <AppBar position="relative">
      <Toolbar>
         <Typography variant="h6" color="inherit" noWrap>
            { intl.formatMessage({ id: 'app.title' }) }
         </Typography>
      </Toolbar>
   </AppBar>
   <main>
      <Container>
         {children}
      </Container>
   </main>
</React.Fragment>;

BaseLayout.propTypes = {
   /** Children elements, the view contents */
   children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object
   ]),
   intl: intlShape.isRequired
};

const mapStateToProps = () => {
   return {};
};

const mapDispatchToProps = () => {
   return {};
};

export default injectIntl(connect(
   mapStateToProps,
   mapDispatchToProps
)(BaseLayout));
