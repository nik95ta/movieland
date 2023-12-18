import { useDispatch, useSelector } from 'react-redux';
import watchLaterSlice from '../data/watchLaterSlice'

const useWatchLaterStatus = (movie) => {
  const { watchLaterMovies } = useSelector((state) => state.watchLater);
  const dispatch = useDispatch();
  const { addToWatchLater, removeFromWatchLater } = watchLaterSlice.actions;

  const isInWatchLater = watchLaterMovies.some((item) => item.id === movie.id);
  const toggleWatchLater = () => {
    const action = isInWatchLater ? removeFromWatchLater(movie) : addToWatchLater(movie);
    dispatch(action);
  };

  return { isInWatchLater, toggleWatchLater };
};

export default useWatchLaterStatus;
