import React from 'react';
import Moment from 'react-moment';
import styles from './ResultCard.module.css';
import { GlobalContext } from '../context/GlobalState';

const ResultCard = ({ movie }) => {
  const { addMovieToWatchlist, addMovieToWatched, watchlist, watched } =
    React.useContext(GlobalContext);

  const movieStored = watchlist.find((o) => o.id === movie.id);
  const movieWatchedStored = watched.find((o) => o.id === movie.id);
  const watchlistBtnDisabled = movieStored
    ? true
    : movieWatchedStored
    ? true
    : false;
  const watchedBtnDisabled = movieWatchedStored ? true : false;

  return (
    <div className={styles.resultCard}>
      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={movie.title}
        />
      ) : (
        <div className="notLoaded"></div>
      )}
      <div className={styles.info}>
        <div className={styles.header}>
          <h2>{movie.title}</h2>
          <h3>
            <Moment format="YYYY">{movie.release_date}</Moment>
          </h3>
        </div>
        <div className={styles.controls}>
          <button
            disabled={watchlistBtnDisabled}
            className={styles.button}
            onClick={() => addMovieToWatchlist(movie)}
          >
            Add to watchlist
          </button>
          <button
            disabled={watchedBtnDisabled}
            className={styles.button}
            onClick={() => addMovieToWatched(movie)}
          >
            Add to watched
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
