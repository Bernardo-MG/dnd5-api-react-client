import React from 'react';

import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import { Link } from 'react-router-dom';

import { useCharClassList } from 'domain/hooks';

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

function CharClassListView() {
   const charclasslist = useCharClassList();

   return <Grid container spacing={3}>
      <Grid item xs={9}></Grid>
      <Grid item xs={3}>
         <CharClassesList values={charclasslist} />
      </Grid>
   </Grid>;
}

CharClassListView.propTypes = {};

export default CharClassListView;
