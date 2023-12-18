import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { discoverEndpoint, searchEndpoint } from '../../constants';
import { MovieInterface } from '../../interfaces';

export const fetchMovies = createAsyncThunk('fetch-movies', async ({ page }: { page: number }) => {
  const response = await fetch(discoverEndpoint(page));
  return response.json();
});

export const searchMovies = createAsyncThunk(
  'search-movies',
  async ({ page, query }: { page: number; query: string }) => {
    const response = await fetch(searchEndpoint(query, page));
    return response.json();
  },
);

interface MoviesState {
  movies: MovieInterface[];
  fetchStatus: string;
  page: number;
  hasNextPage: boolean;
  query: string;
  isNewSearch: boolean;
}

const initialState: MoviesState = {
  movies: [],
  fetchStatus: '',
  page: 0,
  hasNextPage: true,
  query: '',
  isNewSearch: false,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(isAnyOf(fetchMovies.fulfilled, searchMovies.fulfilled), (state, action) => {
        if (state.isNewSearch || action.payload.page !== state.page) {
          state.movies = state.isNewSearch
            ? action.payload.results
            : [...state.movies, ...action.payload.results];
          state.page = action.payload.page;
          state.hasNextPage = action.payload.page < action.payload.total_pages;
          state.isNewSearch = false;
          state.fetchStatus = 'success';
        }
      })
      .addMatcher(isAnyOf(fetchMovies.pending, searchMovies.pending), (state, action) => {
        state.fetchStatus = 'loading';
        const newQuery = (action.meta.arg as { query?: string }).query || '';
        if (state.query !== newQuery) {
          state.movies = [];
          state.query = newQuery;
          state.isNewSearch = true;
        }
      })
      .addMatcher(isAnyOf(fetchMovies.rejected, searchMovies.rejected), (state) => {
        state.fetchStatus = 'error';
      });
  },
});

export default moviesSlice;
