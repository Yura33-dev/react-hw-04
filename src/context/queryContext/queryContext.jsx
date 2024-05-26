import { useState } from 'react';
import PropTypes from 'prop-types';
import { queryContext } from './queryContext';

function QueryContext({ children }) {
  const [query, setQuery] = useState(null);
  const [page, setPage] = useState(1);

  function updateQuery(string) {
    setPage(1);
    setQuery(string);
  }

  return (
    <queryContext.Provider value={{ query, updateQuery, page, setPage }}>
      {children}
    </queryContext.Provider>
  );
}

QueryContext.propTypes = {
  children: PropTypes.element,
};

export default QueryContext;
