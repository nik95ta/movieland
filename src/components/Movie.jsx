import { useState } from 'react';
import clsx from 'clsx';
import placeholder from '../assets/not-found-500X750.jpeg';
import { useStarredStatus, useWatchLaterStatus } from '../hooks';

const Movie = ({ movie, viewTrailer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isStarred, toggleStar } = useStarredStatus(movie);
  const { isInWatchLater, toggleWatchLater } = useWatchLaterStatus(movie);

  const closeCard = (e) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  return (
    <div className="wrapper col-3 col-sm-4 col-md-3 col-lg-3 col-xl-2">
      <div className={clsx('card', { opened: isOpen })} onClick={() => setIsOpen(true)}>
        <div className="card-body text-center">
          <div className="overlay" />
          <div className="info_panel">
            <div className="overview">{movie.overview}</div>
            <div className="year">{movie.release_date?.substring(0, 4)}</div>
            <span
              className="btn-star"
              data-testid={isStarred ? 'unstar-link' : 'starred-link'}
              onClick={toggleStar}>
              <i className={clsx('bi', { 'bi-star-fill': isStarred, 'bi-star': !isStarred })} />
            </span>
            <button
              type="button"
              className={clsx('btn btn-light btn-watch-later', { blue: isInWatchLater })}
              onClick={toggleWatchLater}>
              {isInWatchLater ? <i className="bi bi-check"></i> : 'Watch Later'}
            </button>
            <button type="button" className="btn btn-dark" onClick={() => viewTrailer(movie.id)}>
              View Trailer
            </button>
          </div>
          <img
            className="center-block"
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : placeholder
            }
            alt="Movie poster"
          />
        </div>
        <h6 className="title mobile-card">{movie.title}</h6>
        <h6 className="title">{movie.title}</h6>
        <button type="button" className="close" onClick={closeCard} aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  );
};

export default Movie;
