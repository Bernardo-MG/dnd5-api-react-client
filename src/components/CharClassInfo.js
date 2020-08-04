import React, { Fragment } from 'react';

import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

function CharClassInfo({ charclass }) {
   return <Fragment>
      <Typography variant="h2" noWrap>
         {charclass.name}
      </Typography>
      <Typography variant="subtitle1" noWrap>
         {`hit_die: ${charclass.hit_die}`}
      </Typography>
      <Typography variant="subtitle1" noWrap>
         {`sub_classes: ${charclass.subclasses.map((value) => value.name).join(', ')}`}
      </Typography>
      <Typography variant="h2" noWrap>
         {'proficiencies'}
      </Typography>
      <Typography variant="subtitle1" noWrap>
         {`saving_throws: ${charclass.saving_throws.map((value) => value.name).join(', ')}`}
      </Typography>
      <Typography variant="subtitle1" noWrap>
         {`proficiencies: ${charclass.proficiencies.map((value) => value.name).join(', ')}`}
      </Typography>
   </Fragment>;
}

CharClassInfo.propTypes = {
   charclass: PropTypes.object
};

export default CharClassInfo;
