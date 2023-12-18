import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import watchLaterSlice from './watchLaterSlice';
import { Movie } from '../../components';
import { RootState } from '../../store';
import { MovieInterface } from '../../interfaces';
import '../starred/starred.scss';

interface WatchLaterProps {
  viewTrailer: (id: string) => void;
}

const WatchLater: React.FC<WatchLaterProps> = ({ viewTrailer }) => {
  const { watchLaterMovies } = useSelector((state: RootState) => state.watchLater);
  const { removeAllWatchLater } = watchLaterSlice.actions;
  const dispatch = useDispatch();

  return (
    <div className="starred" data-testid="watch-later-div">
      {watchLaterMovies.length > 0 && (
        <div data-testid="watch-later-movies" className="starred-movies">
          <h6 className="header">Watch Later List</h6>
          <div className="row">
            {watchLaterMovies.map((movie: MovieInterface) => (
              <Movie movie={movie} key={movie.id} viewTrailer={viewTrailer} />
            ))}
          </div>

          <footer className="text-center">
            <button className="btn btn-primary" onClick={() => dispatch(removeAllWatchLater())}>
              Empty list
            </button>
          </footer>
        </div>
      )}

      {watchLaterMovies.length === 0 && (
        <div className="text-center empty-cart">
          <i className="bi bi-heart" />
          <p>You have no movies saved to watch later.</p>
          <p>
            Go to <Link to="/">Home</Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default WatchLater;
