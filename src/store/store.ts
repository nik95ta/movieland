import { configureStore } from '@reduxjs/toolkit';
import { moviesSlice, starredSlice, watchLaterSlice } from '../features';

const store = configureStore({
  reducer: {
    movies: moviesSlice.reducer,
    starred: starredSlice.reducer,
    watchLater: watchLaterSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
