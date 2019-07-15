import React from 'react';

import PropTypes from 'prop-types';

import { injectIntl, intlShape } from 'react-intl';

import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';

/**
 * Base layout for the application. This will frame all the views.
 * 
 * It contains a navigation bar on the left side, and the view on the rest of the screen.
 */
function BaseLayout({ intl, children }) {

   const [open, setOpen] = React.useState(false);

   function handleDrawerOpen() {
      setOpen(true);
   }

   function handleDrawerClose() {
      setOpen(false);
   }

   return <React.Fragment>
      <AppBar position="relative">
         <Toolbar>
            <IconButton color="inherit" aria-label="Open drawer" onClick={handleDrawerOpen} edge="start">
               <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
               { intl.formatMessage({ id: 'app.title' }) }
            </Typography>
         </Toolbar>
      </AppBar>
      <Drawer variant="persistent" anchor="left" open={open}>
         <div>
            <IconButton onClick={handleDrawerClose}>
               <ChevronLeftIcon />
            </IconButton>
         </div>
         <Divider />
         <List>
            <ListItem button key={'text'}>
               <Link to="/"><ListItemText primary={ intl.formatMessage({ id: 'link.index' }) } /></Link>
            </ListItem>
            <ListItem button key={'text'}>
               <Link to="/search"><ListItemText primary={ intl.formatMessage({ id: 'link.search' }) } /></Link>
            </ListItem>
         </List>
      </Drawer>
      <main>
         <Container>
            <Box pt={2}>
               {children}
            </Box>
         </Container>
      </main>
   </React.Fragment>;
}

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
