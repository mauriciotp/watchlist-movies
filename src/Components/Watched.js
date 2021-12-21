import React from 'react';
import styles from './Watched.module.css';
import { GlobalContext } from '../context/GlobalState';
import MovieCard from './MovieCard';
const Watched = () => {
  const { watched } = React.useContext(GlobalContext);
  return (
    <section className={`container ${styles.watched}`}>
      <div className={styles.watchListHeader}>
        <h1>Watched Movies</h1>
        <span className={styles.count}>
          {watched.length} {watched.length === 1 ? 'Movie' : 'Movies'}
        </span>
      </div>
      {watched.length ? (
        <ul className={styles.moviesWrapper}>
          {watched.map((movie) => (
            <li key={movie.id} className="movieCard">
              <MovieCard movie={movie} type="watched" />
            </li>
          ))}
        </ul>
      ) : (
        <h2 className="addMovie">Add here movies that you watched!</h2>
      )}
    </section>
  );
};

export default Watched;
