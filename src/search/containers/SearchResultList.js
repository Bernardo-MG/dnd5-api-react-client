import React from 'react';

import { useSelector } from 'react-redux';

import ResultList from 'common/components/ResultList';

import { selectSearchedBooks as selectResult } from 'search/selectors';

function SearchResultList() {

   const result = useSelector(selectResult);

   return <ResultList source={result} />;
}

SearchResultList.propTypes = {};

export default SearchResultList;
