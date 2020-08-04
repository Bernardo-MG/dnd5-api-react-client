import React from 'react';

import Grid from '@material-ui/core/Grid';

import CharClassesList from 'components/CharClassesList';

import { useCharClassList } from 'domain/hooks';

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
