import React, { Component } from 'react';

import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';

class SearchForm extends Component {

   state = { query: '' };

   handleChange = (event) => {
      this.setState({ query: event.target.value });
   };

   render() {
      return (
         <React.Fragment>
            <TextField
               id={this.props.id}
               label={this.props.label}
               value={this.state.query}
               onChange={this.handleChange}
            />
            <Button variant="contained">
               {this.props.buttonLabel}
            </Button>
         </React.Fragment>
      );
   }

}

SearchForm.propTypes = {
   intl: PropTypes.object.isRequired,
   id: PropTypes.string.isRequired,
   label: PropTypes.string.isRequired,
   buttonLabel: PropTypes.string.isRequired
};

export default SearchForm;
