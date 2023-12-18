import React, { ReactElement, ReactNode } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureStore, EnhancedStore, PreloadedState } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import moviesSlice from '../data/moviesSlice';
import starredSlice from '../data/starredSlice';
import watchLaterSlice from '../data/watchLaterSlice';
import { RootState } from '../data/store';

interface RenderWithProvidersOptions extends RenderOptions {
  preloadedState?: PreloadedState<RootState>;
  store?: EnhancedStore;
}

export function renderWithProviders(
  ui: ReactElement,
  {
    preloadedState = {} as PreloadedState<RootState>,
    store = configureStore({
      reducer: {
        movies: moviesSlice.reducer,
        starred: starredSlice.reducer,
        watchLater: watchLaterSlice.reducer,
      },
      preloadedState,
    }),
    ...renderOptions
  }: RenderWithProvidersOptions = {},
) {
  setupListeners(store.dispatch);

  function Wrapper({ children }: { children: ReactNode }) {
    return (
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    );
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
