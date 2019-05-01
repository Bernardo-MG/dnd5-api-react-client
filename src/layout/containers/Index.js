import React from 'react';

import PropTypes from 'prop-types';

import { injectIntl } from 'react-intl';

import BaseLayout from 'layout/containers/BaseLayout';

import Typography from '@material-ui/core/Typography';

const About = () =>
   <BaseLayout>
      <Typography variant="h4" gutterBottom>
         Material-UI
      </Typography>
   </BaseLayout>;

About.propTypes = {
   intl: PropTypes.object.isRequired
};

export default injectIntl(About);
