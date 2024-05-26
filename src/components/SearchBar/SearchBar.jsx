import styles from './SearchBar.module.css';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { queryContext } from '../../context/queryContext/queryContext';

function SearchBar() {
  const { updateQuery } = useContext(queryContext);

  function submitHandler(e) {
    e.preventDefault();
    const { search } = e.target.elements;

    const searchString = search.value.trim();

    if (!searchString) {
      return toast('Your query shouldn`t be empty', {
        duration: 3000,
        position: 'top-right',
        icon: '⚠️',
      });
    }
    updateQuery(searchString);
  }

  return (
    <header className={styles.header}>
      <form onSubmit={submitHandler} className={styles.form}>
        <input
          className={styles.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
        />
        <button className={styles.btn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};
export default SearchBar;
