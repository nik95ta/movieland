import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchMovies, searchMovies } from './moviesSlice';
import { AppDispatch, RootState } from '../../store';

const useFetchMovies = (query: string | null) => {
  const { movies, page, hasNextPage, fetchStatus } = useSelector(
    (state: RootState) => state.movies,
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(query ? searchMovies({ page: 1, query }) : fetchMovies({ page: 1 }));
  }, [dispatch, query]);

  const loadNextPage = () => {
    if (hasNextPage && fetchStatus !== 'loading') {
      dispatch(query ? searchMovies({ page: page + 1, query }) : fetchMovies({ page: page + 1 }));
    }
  };

  return { movies, loadNextPage, hasNextPage, fetchStatus };
};

export default useFetchMovies;
