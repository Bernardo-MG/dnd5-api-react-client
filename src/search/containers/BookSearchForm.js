import React from 'react';

import { useDispatch } from 'react-redux';

import ButtonInput from 'common/components/ButtonInput';

import { search } from 'search/actions/books';

function BookSearchForm(props) {

   const dispatch = useDispatch();
   const action = (input) => dispatch(search(input));

   return <ButtonInput {...props} action={action} />;
}

BookSearchForm.propTypes = {};

export default BookSearchForm;
