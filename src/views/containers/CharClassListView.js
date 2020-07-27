import React, { Fragment } from 'react';

import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import { Link } from 'react-router-dom';

import { useCharClassList } from 'domain/hooks';

function CharClassesList({ values }) {
   return <List>
      {values.map((value) =>
         <ListItem key={value.index}>
            <Link to={`/classes/${value.index}`}>{ value.name }</Link>
         </ListItem>
      )}
   </List>;
}

CharClassesList.propTypes = {
   values: PropTypes.array
};

function CharClassListView() {
   const charclasslist = useCharClassList();

   return <Fragment>
      <Typography variant="h2" color="inherit" noWrap>
         { 'Classes' }
      </Typography>
      <CharClassesList values={charclasslist} />
   </Fragment>;
}

CharClassListView.propTypes = {};

export default CharClassListView;
