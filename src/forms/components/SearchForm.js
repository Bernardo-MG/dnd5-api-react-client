import React, { Component } from 'react';

import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';

import TextField from '@material-ui/core/TextField';

class SearchForm extends Component {

   state = { query: '' };

   handleChange = (event) => {
      this.setState({ query: event.target.value });
   };

   render() {
      return (
         <Grid container>
            <TextField
               id={this.props.id}
               label={this.props.label}
               value={this.state.query}
               onChange={this.handleChange}
            />
         </Grid>
      );
   }

}

SearchForm.propTypes = {
   id: PropTypes.string.isRequired,
   label: PropTypes.string.isRequired
};

export default SearchForm;
