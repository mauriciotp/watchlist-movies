import React from 'react';
import AppReducer from './AppReducer';

const initialState = {
  watchlist: window.localStorage.getItem('watchlist')
    ? JSON.parse(window.localStorage.getItem('watchlist'))
    : [],
  watched: window.localStorage.getItem('watched')
    ? JSON.parse(window.localStorage.getItem('watched'))
    : [],
};

export const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(AppReducer, initialState);

  React.useEffect(() => {
    window.localStorage.setItem('watchlist', JSON.stringify(state.watchlist));
    window.localStorage.setItem('watched', JSON.stringify(state.watched));
  }, [state]);

  const addMovieToWatchlist = (movie) => {
    dispatch({ type: 'ADD_MOVIE_TO_WATCHLIST', payload: movie });
  };

  const removeMovieFromWatchlist = (id) => {
    dispatch({ type: 'REMOVE_MOVIE_FROM_WATCHLIST', payload: id });
  };

  const addMovieToWatched = (movie) => {
    dispatch({ type: 'ADD_MOVIE_TO_WATCHED', payload: movie });
  };

  const removeMovieFromWatched = (id) => {
    dispatch({ type: 'REMOVE_MOVIE_FROM_WATCHED', payload: id });
  };

  const moveToWatched = (movie) => {
    dispatch({ type: 'MOVE_TO_WATCHED', payload: movie });
  };

  const moveToWatchlist = (movie) => {
    dispatch({ type: 'MOVE_TO_WATCHLIST', payload: movie });
  };

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieToWatchlist,
        removeMovieFromWatchlist,
        addMovieToWatched,
        removeMovieFromWatched,
        moveToWatched,
        moveToWatchlist,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
