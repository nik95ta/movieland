import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { discoverEndpoint, searchEndpoint } from '../../constants';
import { MovieInterface } from '../../interfaces';

export const fetchMovies = createAsyncThunk('fetch-movies', async ({}: { query?: string } = {}) => {
  const response = await fetch(discoverEndpoint());
  return response.json();
});

export const searchMovies = createAsyncThunk(
  'search-movies',
  async ({ query }: { query: string }) => {
    const response = await fetch(searchEndpoint(query));
    return response.json();
  },
);

interface MoviesState {
  movies: MovieInterface[];
  fetchStatus: string;
}

const initialState: MoviesState = {
  movies: [],
  fetchStatus: '',
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(isAnyOf(fetchMovies.fulfilled, searchMovies.fulfilled), (state, action) => {
        state.movies = action.payload.results;
        state.fetchStatus = 'success';
      })
      .addMatcher(isAnyOf(fetchMovies.pending, searchMovies.pending), (state) => {
        state.fetchStatus = 'loading';
      })
      .addMatcher(isAnyOf(fetchMovies.rejected, searchMovies.rejected), (state) => {
        state.fetchStatus = 'error';
      });
  },
});

export default moviesSlice;
