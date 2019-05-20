import React from 'react';

import { injectIntl, intlShape } from 'react-intl';

import BaseLayout from 'layout/containers/BaseLayout';

import SearchForm from 'search/components/SearchForm';

import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';

const About = ({ intl }) =>
   <BaseLayout>
      <Grid container justify='center'>
         <Typography variant='h4' gutterBottom>
            Material-UI
         </Typography>
         <SearchForm
            id='title'
            label={ intl.formatMessage({ id: 'form.title' }) }
            buttonLabel={ intl.formatMessage({ id: 'form.search' }) }
         />
      </Grid>
   </BaseLayout>;

About.propTypes = {
   intl: intlShape.isRequired
};

export default injectIntl(About);
