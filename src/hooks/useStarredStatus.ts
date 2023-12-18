import { useDispatch, useSelector } from 'react-redux';
import starredSlice from '../data/starredSlice';
import { MovieInterface } from '../interfaces';
import { RootState } from '../data/store';

const useStarredStatus = (movie: MovieInterface) => {
  const { starredMovies } = useSelector((state: RootState) => state.starred);
  const dispatch = useDispatch();
  const { starMovie, unstarMovie } = starredSlice.actions;

  const isStarred = starredMovies.some((item: MovieInterface) => item.id === movie.id);
  const toggleStar = () => {
    const action = isStarred ? unstarMovie(movie) : starMovie(movie);
    dispatch(action);
  };

  return { isStarred, toggleStar };
};

export default useStarredStatus;
