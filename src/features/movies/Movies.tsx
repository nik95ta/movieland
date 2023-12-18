import { useSearchParams } from 'react-router-dom';
import { useDebounce, useIntersectionObserver } from '../../hooks';
import useFetchMovies from './useFetchMovies';
import { Movie } from '../../components';
import { MovieInterface } from '../../interfaces';
import './movies.scss';

const Movies: React.FC = () => {
  const [searchParams] = useSearchParams();
  const debouncedQuery = useDebounce(searchParams.get('search'));
  const { movies, loadNextPage, hasNextPage, fetchStatus } = useFetchMovies(debouncedQuery);
  const footerRef = useIntersectionObserver(loadNextPage, { threshold: 0.5 });

  return (
    <>
      <div data-testid="movies" className="movies-grid">
        {movies.length === 0 ? (
          <p>No movies found for the search</p>
        ) : (
          movies.map((movie: MovieInterface) => <Movie key={movie.id} movie={movie} />)
        )}
      </div>
      {hasNextPage && fetchStatus !== 'loading' && (
        <footer ref={footerRef} className="movies-footer" />
      )}
    </>
  );
};

export default Movies;
