import { useState } from 'react';
import { movieEndpoint } from '../constants';

const useFetchTrailer = () => {
  const [videoKey, setVideoKey] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovieTrailer = async (id: string) => {
    setIsLoading(true);
    try {
      setVideoKey(undefined);
      const response = await fetch(movieEndpoint(id));
      const videoData = await response.json();
      const results = videoData.videos?.results || [];
      const trailer = results.find((video: { type?: string }) => video.type === 'Trailer');
      setVideoKey(trailer?.key || results[0]?.key);
    } catch (err) {
      alert(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return { videoKey, isLoading, fetchMovieTrailer };
};

export default useFetchTrailer;
