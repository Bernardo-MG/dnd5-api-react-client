import React, { Fragment } from 'react';

import { useParams } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

import { useCharClass } from 'domain/hooks';

function CharClassView() {
   const { id } = useParams();
   const charclass = useCharClass(id);

   console.log(charclass);
   let data;

   if (charclass) {
      data = <Fragment>
         <Typography variant="h2" noWrap>
            { charclass.name }
         </Typography>
         <Typography variant="subtitle1" noWrap>
            { `hit_die: ${charclass.hit_die}` }
         </Typography>
         <Typography variant="subtitle1" noWrap>
            { 'saving_throws' }
         </Typography>
         <List>
            {charclass.saving_throws.map((value) =>
               <ListItem key={value.index}>{ value.name }</ListItem>
            )}
         </List>
         <Typography variant="subtitle1" noWrap>
            { 'proficiencies' }
         </Typography>
         <List>
            {charclass.proficiencies.map((value) =>
               <ListItem key={value.index}>{ value.name }</ListItem>
            )}
         </List>
         <Typography variant="subtitle1" noWrap>
            { 'sub_classes' }
         </Typography>
         <List>
            {charclass.subclasses.map((value) =>
               <ListItem key={value.index}>{ value.name }</ListItem>
            )}
         </List>
      </Fragment>;
   } else {
      data = <Fragment />;
   }

   return data;
}

CharClassView.propTypes = {};

export default CharClassView;
