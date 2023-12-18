import { createSlice } from '@reduxjs/toolkit';
import { MovieInterface } from '../interfaces';

interface WatchLaterState {
  watchLaterMovies: MovieInterface[];
}

const initialState: WatchLaterState = {
  watchLaterMovies: [],
};

const watchLaterSlice = createSlice({
  name: 'watch-later',
  initialState,
  reducers: {
    addToWatchLater: (state, action) => {
      state.watchLaterMovies = [action.payload, ...state.watchLaterMovies];
    },
    removeFromWatchLater: (state, action) => {
      state.watchLaterMovies = state.watchLaterMovies.filter(
        (movie: MovieInterface) => movie.id !== action.payload.id,
      );
    },
    removeAllWatchLater: (state) => {
      state.watchLaterMovies = [];
    },
  },
});

export default watchLaterSlice;
