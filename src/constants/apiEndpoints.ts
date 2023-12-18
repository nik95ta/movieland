const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
const API_KEY = process.env.REACT_APP_API_KEY;

export const discoverEndpoint = () =>
  `${API_ENDPOINT}/discover/movie/?api_key=${API_KEY}&sort_by=vote_count.desc`;

export const searchEndpoint = (query: string) =>
  `${API_ENDPOINT}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`;

export const movieEndpoint = (id: string) =>
  `${API_ENDPOINT}/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
