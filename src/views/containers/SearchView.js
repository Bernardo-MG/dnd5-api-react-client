import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { injectIntl, intlShape } from 'react-intl';

import { selectSearchingBooks } from 'search/selectors';

import BaseLayout from 'views/containers/BaseLayout';

import BookSearchForm from 'search/components/BookSearchForm';
import SearchResultList from 'search/components/SearchResultList';

import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

class SearchView extends Component {

   render() {
      let view = null;

      if (this.props.loading) {
         console.log('loading');
         view = <Grid container justify='center' alignItems='center'> <CircularProgress /> </Grid>;
      } else {
         view = <Grid style={ { height: '80vh', overflow: 'auto' } }> <SearchResultList /> </Grid>;
      }

      return (
         <BaseLayout>
            <Paper style={ { height: '85vh', overflow: 'auto' } }>
               <Grid container direction='column'>
                  <Grid container justify='center'>
                     <BookSearchForm
                        id='title'
                        label={ this.props.intl.formatMessage({ id: 'form.title' }) }
                        buttonLabel={ this.props.intl.formatMessage({ id: 'form.search' }) }
                     />
                  </Grid>
                  { view }
               </Grid>
            </Paper>
         </BaseLayout>
      );
   }

}

SearchView.propTypes = {
   loading: PropTypes.bool.isRequired,
   intl: intlShape.isRequired
};

const mapStateToProps = (state) => {
   return {
      loading: selectSearchingBooks(state)
   };
};

const mapDispatchToProps = () => {
   return {};
};

export default injectIntl(connect(
   mapStateToProps,
   mapDispatchToProps
)(SearchView));
