import { setupListeners } from '@reduxjs/toolkit/query';
import { githubApi } from './services/githubSlice';
import { configureStore } from '@reduxjs/toolkit';
import { githubReducer } from './features/github.slice';

export const store = configureStore({
  reducer: {
    [githubApi.reducerPath]: githubApi.reducer,
    github: githubReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(githubApi.middleware),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = (typeof store)['dispatch'];
