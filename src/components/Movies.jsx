import { useSearchParams } from 'react-router-dom';
import { useFetchMovies } from '../hooks';
import Movie from './Movie';
import '../styles/movies.scss';

const Movies = ({ viewTrailer }) => {
  const [searchParams] = useSearchParams();
  const { movies } = useFetchMovies(searchParams.get('search'));

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
