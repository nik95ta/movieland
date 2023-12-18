const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
const API_KEY = process.env.REACT_APP_API_KEY;

export const discoverEndpoint = (page: number) =>
  `${API_ENDPOINT}/discover/movie/?api_key=${API_KEY}&sort_by=vote_count.desc&page=${page}`;

export const searchEndpoint = (query: string, page: number) =>
  `${API_ENDPOINT}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${page}`;

export const movieEndpoint = (id: string) =>
  `${API_ENDPOINT}/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
