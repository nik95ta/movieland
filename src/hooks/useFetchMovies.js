import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchMovies } from '../data/moviesSlice';
import { discoverEndpoint, searchEndpoint } from '../constants';

const useFetchMovies = (query) => {
  const { movies } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(query ? fetchMovies(searchEndpoint(query)) : fetchMovies(discoverEndpoint()));
  }, [dispatch, query]);

  return { movies };
};

export default useFetchMovies;
