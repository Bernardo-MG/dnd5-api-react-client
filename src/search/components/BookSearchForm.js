import React from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ButtonInput from 'common/containers/ButtonInput';

import { search } from 'search/actions/books';

const BookSearchForm = (props) =>
   <ButtonInput
      id={props.id}
      label={props.label}
      buttonLabel={props.buttonLabel}
      action={props.search}
   />;

BookSearchForm.propTypes = {
   id: PropTypes.string.isRequired,
   label: PropTypes.string.isRequired,
   buttonLabel: PropTypes.string.isRequired,
   search: PropTypes.func.isRequired
};

const mapStateToProps = () => {
   return {};
};


const mapDispatchToProps = (dispatch) => {
   return {
      search: bindActionCreators(search, dispatch)
   };
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(BookSearchForm);
