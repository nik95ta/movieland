import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import watchLaterSlice from './watchLaterSlice';
import { MovieInterface } from '../../interfaces';

const useWatchLaterStatus = (movie: MovieInterface) => {
  const { watchLaterMovies } = useSelector((state: RootState) => state.watchLater);
  const dispatch = useDispatch();
  const { addToWatchLater, removeFromWatchLater } = watchLaterSlice.actions;

  const isInWatchLater = watchLaterMovies.some((item: MovieInterface) => item.id === movie.id);
  const toggleWatchLater = () => {
    const action = isInWatchLater ? removeFromWatchLater(movie) : addToWatchLater(movie);
    dispatch(action);
  };

  return { isInWatchLater, toggleWatchLater };
};

export default useWatchLaterStatus;
