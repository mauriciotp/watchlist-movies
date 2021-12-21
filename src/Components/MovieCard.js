import React from 'react';
import styles from './MovieCard.module.css';
import MovieControls from './MovieControls';

const MovieCard = ({ movie, type }) => {
  return (
    <div className={styles.movie}>
      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={movie.title}
        />
      ) : (
        <div className="notLoaded"></div>
      )}
      <MovieControls movie={movie} type={type} />
    </div>
  );
};

export default MovieCard;
