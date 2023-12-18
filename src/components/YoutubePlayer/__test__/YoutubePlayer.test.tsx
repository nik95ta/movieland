import React from 'react';
import { render, screen } from '@testing-library/react';
import YoutubePlayer from '../YoutubePlayer';

describe('YoutubePlayer component', () => {
  it('renders ReactPlayer when videoKey is provided', () => {
    const testVideoKey = '123456';
    render(<YoutubePlayer videoKey={testVideoKey} />);
    const playerElement = screen.getByTestId('youtube-player');
    expect(playerElement).toBeInTheDocument();
  });

  it('displays no trailer message when videoKey is not provided', () => {
    render(<YoutubePlayer />);
    expect(screen.getByText('No trailer available. Try another movie')).toBeInTheDocument();
  });
});
