import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from './utils/testUtils';
import App from './App';
import React from 'react';

const mockMoviesData = {
  results: [{ id: '123', title: 'Through the Eyes of Forrest Gump' }],
  page: 1,
  total_pages: 1,
};

const mockTrailerData = {
  videos: {
    results: [
      {
        type: 'Trailer',
        key: 'mocked_video_key',
      },
    ],
  },
};

beforeEach(() => {
  global.fetch = jest.fn((url) => {
    if (url.includes('append_to_response=videos')) {
      return Promise.resolve({
        json: () => Promise.resolve(mockTrailerData),
      });
    } else {
      return Promise.resolve({
        json: () => Promise.resolve(mockMoviesData),
      });
    }
  }) as jest.Mock;
});

afterEach(() => {
  jest.clearAllMocks();
});

it('renders watch later link', () => {
  renderWithProviders(<App />);
  const linkElement = screen.getByText(/watch later/i);
  expect(linkElement).toBeInTheDocument();
});

it('search for movies', async () => {
  renderWithProviders(
    <>
      <App />
      <div id="modal-root" />
    </>,
  );
  await userEvent.type(screen.getByTestId('search-movies'), 'forrest gump');
  await waitFor(() => {
    expect(screen.getAllByText('Through the Eyes of Forrest Gump')[0]).toBeInTheDocument();
  });
  const viewTrailerBtn = screen.getAllByText('View Trailer')[0];
  await userEvent.click(viewTrailerBtn);
  await waitFor(() => {
    expect(screen.getByTestId('youtube-player')).toBeInTheDocument();
  });
});

it('renders watch later component', async () => {
  renderWithProviders(<App />);
  const user = userEvent.setup();
  await user.click(screen.getByText(/watch later/i));
  expect(screen.getByText(/You have no movies saved to watch later/i)).toBeInTheDocument();
});

it('renders starred component', async () => {
  renderWithProviders(<App />);
  const user = userEvent.setup();
  await user.click(screen.getByTestId('nav-starred'));
  expect(screen.getByText(/There are no starred movies/i)).toBeInTheDocument();
  await waitFor(() => {
    expect(screen.getByTestId('starred')).toBeInTheDocument();
  });
});
