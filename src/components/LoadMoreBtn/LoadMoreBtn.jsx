import PropTypes from 'prop-types';

import styles from './LoadMoreBtn.module.css';
import { useContext } from 'react';
import { queryContext } from '../../context/queryContext/queryContext';

function LoadMoreBtn({ onLoading }) {
  const { setPage } = useContext(queryContext);

  return (
    <button
      type="button"
      className={styles.btn}
      onClick={() => setPage(prevPage => prevPage + 1)}
      disabled={onLoading}
    >
      Load more
    </button>
  );
}

LoadMoreBtn.propTypes = {
  onLoadMore: PropTypes.func,
  onLoading: PropTypes.bool,
};

export default LoadMoreBtn;
