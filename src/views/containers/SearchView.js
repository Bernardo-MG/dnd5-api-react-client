import React from 'react';

import { useSelector } from 'react-redux';

import { injectIntl } from 'react-intl';

import PropTypes from 'prop-types';

import { selectSearchingBooks } from 'search/selectors';

import BookSearchForm from 'search/containers/BookSearchForm';
import SearchResultList from 'search/containers/SearchResultList';

import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

function SearchView({ intl }) {
   let view = null;

   const loading = useSelector(selectSearchingBooks);

   if (loading) {
      view = <Grid container justify='center' alignItems='center' style={ { height: '70vh', overflow: 'auto' } }> <CircularProgress /> </Grid>;
   } else {
      view = <Grid style={ { height: '80vh', overflow: 'auto' } }> <SearchResultList /> </Grid>;
   }

   return (
      <Paper style={ { height: '85vh', overflow: 'auto' } }>
         <Grid container direction='column'>
            <Grid container justify='center'>
               <BookSearchForm
                  id='title'
                  label={ intl.formatMessage({ id: 'form.title' }) }
                  buttonLabel={ intl.formatMessage({ id: 'form.search' }) }
               />
            </Grid>
            { view }
         </Grid>
      </Paper>
   );

}

SearchView.propTypes = {
   intl: PropTypes.object.isRequired
};

export default injectIntl(SearchView);
