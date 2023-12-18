import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import starredSlice from './starredSlice';
import { Movie } from '../../components';
import { RootState } from '../../store';
import { MovieInterface } from '../../interfaces';
import './starred.scss';

interface StarredProps {
  viewTrailer: (id: string) => void;
}

const Starred: React.FC<StarredProps> = ({ viewTrailer }) => {
  const { starredMovies } = useSelector((state: RootState) => state.starred);
  const { clearAllStarred } = starredSlice.actions;
  const dispatch = useDispatch();

  return (
    <div className="starred" data-testid="starred">
      {starredMovies.length > 0 && (
        <div data-testid="starred-movies" className="starred-movies">
          <h6 className="header">Starred movies</h6>
          <div className="row movies-grid">
            {starredMovies.map((movie: MovieInterface) => (
              <Movie movie={movie} key={movie.id} viewTrailer={viewTrailer} />
            ))}
          </div>

          <footer className="text-center">
            <button className="btn btn-primary" onClick={() => dispatch(clearAllStarred())}>
              Remove all starred
            </button>
          </footer>
        </div>
      )}

      {starredMovies.length === 0 && (
        <div className="text-center empty-cart">
          <i className="bi bi-star" />
          <p>There are no starred movies.</p>
          <p>
            Go to <Link to="/">Home</Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default Starred;
