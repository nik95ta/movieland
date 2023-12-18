import { useSearchParams } from 'react-router-dom';
import { useDebounce } from '../../hooks';
import useFetchMovies from './useFetchMovies';
import { Movie } from '../../components';
import './movies.scss';
import { MovieInterface } from '../../interfaces';

const Movies: React.FC = () => {
  const [searchParams] = useSearchParams();
  const debouncedQuery = useDebounce(searchParams.get('search'));
  const { movies } = useFetchMovies(debouncedQuery);

  return (
    <div data-testid="movies" className="movies-grid">
      {movies.length === 0 ? (
        <p>No movies found</p>
      ) : (
        movies.map((movie: MovieInterface) => <Movie key={movie.id} movie={movie} />)
      )}
    </div>
  );
};

export default Movies;
