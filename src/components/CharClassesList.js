import React from 'react';

import PropTypes from 'prop-types';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import { Link } from 'react-router-dom';

function CharClassesList({ values }) {
   return <List className="selectionList">
      {values.map((value) =>
         <ListItem key={value.index}>
            <Link to={`/classes/${value.index}`}>{value.name}</Link>
         </ListItem>
      )}
   </List>;
}

CharClassesList.propTypes = {
   values: PropTypes.array
};

export default CharClassesList;
