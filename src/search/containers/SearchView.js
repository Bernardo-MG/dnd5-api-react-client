import React from 'react';

import { injectIntl, intlShape } from 'react-intl';

import BaseLayout from 'layout/containers/BaseLayout';

import ComicSearchForm from 'search/components/ComicSearchForm';
import SearchResultList from 'search/components/SearchResultList';

import Grid from '@material-ui/core/Grid';

const SearchView = ({ intl }) =>
   <BaseLayout>
      <Grid container justify='center'>
         <ComicSearchForm
            id='title'
            label={ intl.formatMessage({ id: 'form.title' }) }
            buttonLabel={ intl.formatMessage({ id: 'form.search' }) }
         />
         <SearchResultList />
      </Grid>
   </BaseLayout>;

SearchView.propTypes = {
   intl: intlShape.isRequired
};

export default injectIntl(SearchView);
