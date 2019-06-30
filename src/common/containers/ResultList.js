import React from 'react';

import PropTypes from 'prop-types';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const ResultList = (props) => <List>
   { props.source.map(
      (item, i) => <ListItem key={i}>
         <ListItemText primary={item} />
      </ListItem>
   )}
</List>;

ResultList.propTypes = {
   source: PropTypes.array.isRequired
};

export default ResultList;
