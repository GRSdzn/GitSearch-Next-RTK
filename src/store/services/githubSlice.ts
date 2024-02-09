import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: `https://api.github.com/`,
  //   credentials: 'include',
});

export const githubApi = createApi({
  reducerPath: 'api',
  baseQuery: baseQuery,
  endpoints: (builder) => ({}),
  refetchOnReconnect: true,
  // refetchOnFocus: true,
});
