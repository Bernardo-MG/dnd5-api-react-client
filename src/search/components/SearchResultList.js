import React from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import ResultList from 'common/containers/ResultList';

import { selectBooks } from 'books/selectors';

const SearchResultList = (props) =>
   <ResultList source={props.result} />;

SearchResultList.propTypes = {
   result: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
   return {
      result: selectBooks(state)
   };
};

const mapDispatchToProps = () => {
   return {};
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(SearchResultList);
