import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchMovies, searchMovies } from '../data/moviesSlice';

const useFetchMovies = (query) => {
  const { movies } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(query ? searchMovies({ query }) : fetchMovies());
  }, [dispatch, query]);

  return { movies };
};

export default useFetchMovies;
