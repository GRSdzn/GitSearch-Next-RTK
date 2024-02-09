import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const LS_FAV_KEY = 'fvk';

interface GithubState {
  favourites: string[];
}

let initialState: GithubState = {
  favourites: [],
};

if (typeof window !== 'undefined') {
  const lsData = localStorage.getItem(LS_FAV_KEY);
  initialState = {
    ...initialState,
    favourites: lsData ? JSON.parse(lsData) : [],
  };
}

export const githubSlice = createSlice({
  name: 'github',
  initialState,
  reducers: {
    addFavourite(state, action: PayloadAction<string>) {
      state.favourites.push(action.payload);
      if (typeof window !== 'undefined') {
        localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites));
      }
    },
    removeFavourite(state, action: PayloadAction<string>) {
      state.favourites = state.favourites.filter((f) => f !== action.payload);
      if (typeof window !== 'undefined') {
        localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites));
      }
    },
  },
});

export const githubReducer = githubSlice.reducer;
export const githubActions = { ...githubSlice.actions };
