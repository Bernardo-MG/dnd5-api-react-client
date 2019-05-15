import React from 'react';

import PropTypes from 'prop-types';

import { injectIntl } from 'react-intl';

import BaseLayout from 'layout/containers/BaseLayout';

import SearchForm from 'forms/components/SearchForm';

import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';

const About = () =>
   <BaseLayout>
      <Grid container justify='center'>
         <Typography variant='h4' gutterBottom>
            Material-UI
         </Typography>
         <SearchForm
            id='standard-name'
            label='Name'
         />
      </Grid>
   </BaseLayout>;

About.propTypes = {
   intl: PropTypes.object.isRequired
};

export default injectIntl(About);
