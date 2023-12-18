import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchMovies, searchMovies } from './moviesSlice';
import { AppDispatch, RootState } from '../../store';

const useFetchMovies = (query: string | null) => {
  const { movies } = useSelector((state: RootState) => state.movies);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(query ? searchMovies({ query }) : fetchMovies({}));
  }, [dispatch, query]);

  return { movies };
};

export default useFetchMovies;