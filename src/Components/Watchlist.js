import React from 'react';
import { GlobalContext } from '../context/GlobalState';
import MovieCard from './MovieCard';
import styles from './Watchlist.module.css';

const Watchlist = () => {
  const { watchlist } = React.useContext(GlobalContext);

  return (
    <section className={`container ${styles.watchList}`}>
      <div className={styles.watchListHeader}>
        <h1>My Watchlist</h1>
        <span className={styles.count}>
          {watchlist.length} {watchlist.length === 1 ? 'Movie' : 'Movies'}
        </span>
      </div>
      {watchlist.length ? (
        <ul className={styles.moviesWrapper}>
          {watchlist.map((movie) => (
            <li key={movie.id} className="movieCard">
              <MovieCard movie={movie} type="watchlist" />
            </li>
          ))}
        </ul>
      ) : (
        <h2 className="addMovie">Your watchlist is empty, add some movies!</h2>
      )}
    </section>
  );
};

export default Watchlist;
