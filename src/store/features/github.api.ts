import { IUser, IServerResponse, IRepo } from '@/types/UserTypes';
import { githubApi } from './../services/githubSlice';

// подключаемся к githubApi.injectEndpoints, уже созданному ранее с помощью createSlice слайсу
export const githubUsersSlise = githubApi.injectEndpoints({
  endpoints: (builder) => ({
    // создаем запрос searchUsers
    searchUsers: builder.query<IUser[], string>({
      query: (search: string) => ({
        url: 'search/users',
        // необязательные параметры
        params: {
          q: search,
          per_page: 10,
        },
        // методы запросы прописывать также необязательно
        method: 'GET',
      }),
      transformResponse: (response: IServerResponse<IUser>) => response.items, // говорим серверу, что хотим получать данные только определенного типа
    }),
    getUserRepos: builder.query<IRepo[], string>({
      query: (username: string) => ({
        url: `users/${username}/repos`,
      }),
    }),
  }),
});

// lazy говорит нам о том, что мы можем сделать вызов когда захотим, а не автоматически
export const { useSearchUsersQuery, useLazyGetUserReposQuery } = githubUsersSlise;
