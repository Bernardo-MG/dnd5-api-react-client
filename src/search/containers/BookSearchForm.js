import React from 'react';

import { useDispatch } from 'react-redux';

import ButtonInput from 'common/components/ButtonInput';

import { search } from 'search/actions/books';

function BookSearchForm(props) {

   const dispatch = useDispatch();
   const action = () => dispatch(search());

   return <ButtonInput {...props} action={action} />;
}

BookSearchForm.propTypes = {};

export default BookSearchForm;
