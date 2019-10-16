import React, { useState } from 'react';

import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';

function ButtonInput({ id, label, buttonLabel, action }) {

   const [query, setQuery] = useState('');

   /**
    * Handles the value change event.
    *
    * @param event value change event
    */
   function handleChange(event) {
      setQuery(event.target.value);
   }

   /**
    * Handles the button click event.
    */
   function handleClick(event) {
      if ((event) && (event.type === 'click')) {
         action(query);
      }
   }

   /**
    * Handles the key event.
    *
    * @param event key press event
    */
   function handleKeyPress(event) {
      if ((event) && (event.key === 'Enter')) {
         action(query);
      }
   }

   return (
      <form noValidate autoComplete="off">
         <TextField
            id={id}
            label={label}
            value={query}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
         />
         <Button variant='contained' onClick={handleClick}>
            {buttonLabel}
         </Button>
      </form>
   );
}

ButtonInput.propTypes = {
   id: PropTypes.string.isRequired,
   label: PropTypes.string.isRequired,
   buttonLabel: PropTypes.string.isRequired,
   action: PropTypes.func.isRequired
};

export default ButtonInput;
