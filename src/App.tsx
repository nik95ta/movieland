import { Route, Routes } from 'react-router-dom';
import 'reactjs-popup/dist/index.css';
import { Header } from './components';
import { Movies, Starred, WatchLater } from './features';
import './app.scss';

const App: React.FC = () => (
  <div className="App">
    <Header />

    <div className="container">
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/starred" element={<Starred />} />
        <Route path="/watch-later" element={<WatchLater />} />
        <Route path="*" element={<h1 className="not-found">Page Not Found</h1>} />
      </Routes>
    </div>
  </div>
);

export default App;
