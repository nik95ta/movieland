import ReactPlayer from 'react-player';
import '../styles/youtubePlayer.scss';

const YoutubePlayer = ({ videoKey }) => (
  <>
    {videoKey ? (
      <ReactPlayer
        className="video-player"
        url={`https://www.youtube.com/watch?v=${videoKey}`}
        controls={true}
        playing={true}
        data-testid="youtube-player"
      />
    ) : (
      <div className="no-trailer-wrapper">
        <h6>No trailer available. Try another movie</h6>
      </div>
    )}
  </>
);

export default YoutubePlayer;
