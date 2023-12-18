import Movie from './Movie';
import '../styles/movies.scss';

const Movies = ({ movies, viewTrailer }) => {
  return (
    <div data-testid="movies">
      {movies.map((movie) => (
        <Movie movie={movie} key={movie.id} viewTrailer={viewTrailer} />
      ))}
    </div>
  );
};

export default Movies;
