import React, { Fragment } from 'react';

import CharClassInfo from 'components/CharClassInfo';

import { useParams } from 'react-router-dom';

import { useCharClass } from 'domain/hooks';

function CharClassView() {
   const { id } = useParams();
   const charclass = useCharClass(id);

   let data;

   if (charclass) {
      data = <CharClassInfo charclass={charclass} />;
   } else {
      data = <Fragment />;
   }

   return data;
}

CharClassView.propTypes = {};

export default CharClassView;
