import { useSearchParams } from 'react-router-dom';
import { useDebounce, useFetchMovies } from '../hooks';
import Movie from './Movie';
import '../styles/movies.scss';

const Movies = ({ viewTrailer }) => {
  const [searchParams] = useSearchParams();
  const debouncedQuery = useDebounce(searchParams.get('search'));
  const { movies } = useFetchMovies(debouncedQuery);

  return (
    <div data-testid="movies">
      {movies.length === 0 ? (
        <p>No movies found</p>
      ) : (
        movies.map((movie) => <Movie key={movie.id} movie={movie} viewTrailer={viewTrailer} />)
      )}
    </div>
  );
};

export default Movies;
