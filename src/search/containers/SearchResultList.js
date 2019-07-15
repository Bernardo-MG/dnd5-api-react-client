import React from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import ResultList from 'common/containers/ResultList';

import { selectSearchedBooks as selectResult } from 'search/selectors';

const SearchResultList = (props) => <ResultList source={props.result} />;

SearchResultList.propTypes = {
   result: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
   return {
      result: selectResult(state)
   };
};

const mapDispatchToProps = () => {
   return {};
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(SearchResultList);
