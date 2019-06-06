import React, { Component } from 'react';

import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';

class ButtonTextField extends Component {

   state = { query: '' };

   /**
    * Handles the value change event.
    *
    * @param event value change event
    */
   _onHandleChange = (event) => {
      this.setState({ query: event.target.value });
   };

   /**
    * Handles the button click event.
    *
    * @param event button click event
    */
   _onHandleClick = () => {
      if (this.state.query) {
         this.props.onClick(this.state.query);
      }
   };

   render() {
      return (
         <React.Fragment>
            <TextField
               id={this.props.id}
               label={this.props.label}
               value={this.state.query}
               onChange={::this._onHandleChange}
            />
            <Button variant='contained' onClick={::this._onHandleClick}>
               {this.props.buttonLabel}
            </Button>
         </React.Fragment>
      );
   }

}

ButtonTextField.propTypes = {
   id: PropTypes.string.isRequired,
   label: PropTypes.string.isRequired,
   buttonLabel: PropTypes.string.isRequired,
   onClick: PropTypes.func.isRequired
};

export default ButtonTextField;
