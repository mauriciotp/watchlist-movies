import React from 'react';
import styles from './MovieControls.module.css';
import { GlobalContext } from '../context/GlobalState';

const MovieControls = ({ movie, type }) => {
  const {
    removeMovieFromWatchlist,
    removeMovieFromWatched,
    moveToWatched,
    moveToWatchlist,
  } = React.useContext(GlobalContext);

  return (
    <div className={styles.controls}>
      {type === 'watchlist' && (
        <div className={styles.btnsWrapper}>
          <button
            className={styles.button}
            onClick={() => moveToWatched(movie)}
          >
            <i className="fa-fw far fa-eye"></i>
          </button>
          <button
            className={styles.button}
            onClick={() => removeMovieFromWatchlist(movie.id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </div>
      )}

      {type === 'watched' && (
        <div className={styles.btnsWrapper}>
          <button
            className={styles.button}
            onClick={() => moveToWatchlist(movie)}
          >
            <i className="fa-fw far fa-eye-slash"></i>
          </button>
          <button
            className={styles.button}
            onClick={() => removeMovieFromWatched(movie.id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default MovieControls;
