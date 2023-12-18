import { createSlice } from '@reduxjs/toolkit';
import { MovieInterface } from '../../interfaces';

interface StarredState {
  starredMovies: MovieInterface[];
}

const initialState: StarredState = {
  starredMovies: [],
};

const starredSlice = createSlice({
  name: 'starred',
  initialState,
  reducers: {
    starMovie: (state, action) => {
      state.starredMovies = [action.payload, ...state.starredMovies];
    },
    unstarMovie: (state, action) => {
      state.starredMovies = state.starredMovies.filter(
        (movie: MovieInterface) => movie.id !== action.payload.id,
      );
    },
    clearAllStarred: (state) => {
      state.starredMovies = [];
    },
  },
});

export default starredSlice;
