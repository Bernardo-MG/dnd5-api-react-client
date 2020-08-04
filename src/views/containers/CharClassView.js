import React, { Fragment } from 'react';

import Grid from '@material-ui/core/Grid';

import CharClassesList from 'components/CharClassesList';
import CharClassInfo from 'components/CharClassInfo';

import { useParams } from 'react-router-dom';

import { useCharClass, useCharClassList } from 'domain/hooks';

function CharClassView() {
   const { id } = useParams();
   const charclass = useCharClass(id);
   const charclasslist = useCharClassList();

   let data;

   if (charclass) {
      data = <CharClassInfo charclass={charclass} />;
   } else {
      data = <Fragment />;
   }

   return <Grid container spacing={3}>
      <Grid item xs={9}>
         {data}
      </Grid>
      <Grid item xs={3}>
         <CharClassesList values={charclasslist} />
      </Grid>
   </Grid>;
}

CharClassView.propTypes = {};

export default CharClassView;
