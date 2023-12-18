import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../../../utils/testUtils';
import Header from '../Header';

describe('Header component tests', () => {
  it('renders Header component', () => {
    renderWithProviders(<Header />);
    expect(screen.getByTestId('home')).toBeInTheDocument();
    expect(screen.getByTestId('nav-starred')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search movies...')).toBeInTheDocument();
  });

  it('updates search params on typing in search box', async () => {
    renderWithProviders(<Header />);
    const searchInput = screen.getByPlaceholderText('Search movies...') as HTMLInputElement;
    await userEvent.type(searchInput, 'Inception');
    expect(searchInput.value).toBe('Inception');
  });
});
