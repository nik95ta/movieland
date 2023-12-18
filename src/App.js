import { Route, Routes } from 'react-router-dom';
import 'reactjs-popup/dist/index.css';
import Header from './components/Header';
import Movies from './components/Movies';
import Starred from './components/Starred';
import WatchLater from './components/WatchLater';
import YoutubePlayer from './components/YoutubePlayer';
import { useFetchTrailer } from './hooks';
import './app.scss';

const App = () => {
  const { videoKey, fetchMovieTrailer } = useFetchTrailer();

  const viewTrailer = (id) => {
    fetchMovieTrailer(id);
  };

  return (
    <div className="App">
      <Header />

      <div className="container">
        <YoutubePlayer videoKey={videoKey} />
        <Routes>
          <Route path="/" element={<Movies viewTrailer={viewTrailer} />} />
          <Route path="/starred" element={<Starred viewTrailer={viewTrailer} />} />
          <Route path="/watch-later" element={<WatchLater viewTrailer={viewTrailer} />} />
          <Route path="*" element={<h1 className="not-found">Page Not Found</h1>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
