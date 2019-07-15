import React from 'react';

import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';

function ButtonInput({ action, id, label, buttonLabel }) {

   const [query, setQuery] = React.useState('');

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
         if (query) {
            action(query);
         }
      }
   }

   return (
      <form noValidate autoComplete="off">
         <TextField
            id={id}
            label={label}
            value={query}
            onChange={handleChange}
            onKeyPress={handleChange}
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
