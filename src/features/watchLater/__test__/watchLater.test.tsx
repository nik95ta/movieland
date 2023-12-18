import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../../../utils/testUtils';
import App from '../../../App';

const mockMoviesData = {
  results: [{ id: '123', title: 'Through the Eyes of Forrest Gump' }],
  page: 1,
  total_pages: 1,
};

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockMoviesData),
    }),
  ) as jest.Mock;
});

afterEach(() => {
  jest.clearAllMocks();
});

it('Watch Later movies page', async () => {
  renderWithProviders(<App />);

  await userEvent.type(screen.getByTestId('search-movies'), 'forrest gump');
  await waitFor(() => {
    expect(screen.getAllByText('Through the Eyes of Forrest Gump')[0]).toBeInTheDocument();
  });
  const watchLaterLink = screen.getAllByTestId('watch-later')[0];
  await waitFor(() => {
    expect(watchLaterLink).toBeInTheDocument();
  });
  await userEvent.click(watchLaterLink);
});
