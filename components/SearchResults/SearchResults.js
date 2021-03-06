import React from 'react';
import PropTypes from 'prop-types';
import * as CustomTypes from '../../lib/custom-types';
import SearchResult from '../SearchResult/SearchResult';

export default function SearchResults({results}) {
  return (
    <div>
      {results.map((result, index) => <SearchResult key={index} result={result}/>)}
    </div>
  );
}

SearchResults.propTypes = {
  results: PropTypes.arrayOf(CustomTypes.SearchResult)
}
