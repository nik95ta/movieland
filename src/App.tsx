import { Route, Routes } from 'react-router-dom';
import 'reactjs-popup/dist/index.css';
import { Header, YoutubePlayer } from './components';
import { Movies, Starred, WatchLater } from './features';
import { useFetchTrailer } from './hooks';
import './app.scss';

const App: React.FC = () => {
  const { videoKey, fetchMovieTrailer } = useFetchTrailer();

  const viewTrailer = (id: string) => {
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
