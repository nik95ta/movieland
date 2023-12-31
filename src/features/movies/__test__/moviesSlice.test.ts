import moviesSlice, { fetchMovies } from '../moviesSlice';
import { moviesMock } from '../../../utils/movies.mocks';

const mockInitialState = {
  movies: [],
  fetchStatus: '',
  page: 0,
  hasNextPage: true,
  query: '',
  isNewSearch: false,
};
describe('MovieSlice test', () => {
  it('should set loading true while action is pending', () => {
    const action = { type: fetchMovies.pending };
    const initialState = moviesSlice.reducer(mockInitialState, action);
    expect(action).toEqual({ type: fetchMovies.pending });
  });

  it('should return payload when action is fulfilled', () => {
    const action = {
      type: fetchMovies.fulfilled,
      payload: moviesMock,
    };
    const initialState = moviesSlice.reducer(mockInitialState, action);
    expect(action.payload).toBeTruthy();
  });

  it('should set error when action is rejected', () => {
    const action = { type: fetchMovies.rejected };
    const initialState = moviesSlice.reducer(mockInitialState, action);
    expect(action).toEqual({ type: fetchMovies.rejected });
  });
});
