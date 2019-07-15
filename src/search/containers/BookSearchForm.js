import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ButtonInput from 'common/components/ButtonInput';

import { search } from 'search/actions/books';

function BookSearchForm(props) { return <ButtonInput {...props} />; }

BookSearchForm.propTypes = {};

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
