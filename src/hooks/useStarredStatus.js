import { useDispatch, useSelector } from 'react-redux';
import starredSlice from '../data/starredSlice'

const useStarredStatus = (movie) => {
  const { starredMovies } = useSelector((state) => state.starred);
  const dispatch = useDispatch();
  const { starMovie, unstarMovie } = starredSlice.actions;

  const isStarred = starredMovies.some((item) => item.id === movie.id);
  const toggleStar = () => {
    const action = isStarred ? unstarMovie(movie) : starMovie(movie);
    dispatch(action);
  };

  return { isStarred, toggleStar };
};

export default useStarredStatus;
