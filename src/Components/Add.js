import React from 'react';
import styles from './Add.module.css';
import ResultCard from './ResultCard';

const Add = () => {
  const [query, setQuery] = React.useState('');
  const [results, setResults] = React.useState([]);

  function handleChange(event) {
    event.preventDefault();
    setQuery(event.target.value);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${event.target.value}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (!data.errors) setResults(data.results);
        else setResults([]);
      });
  }

  return (
    <div className={`container ${styles.add}`}>
      <div className={styles.addWrapper}>
        <input
          className={styles.search}
          type="text"
          id="query"
          name="query"
          value={query}
          placeholder="Search a movie..."
          onChange={handleChange}
        />
        {results.length > 0 && (
          <ul className={styles.results}>
            {results.map((movie) => (
              <li key={movie.id}>
                <ResultCard movie={movie} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Add;
