import { RepoCard } from '@/components/UI/RepoCard';
import { UseDebounce } from '@/hooks/debounce';
import { useLazyGetUserReposQuery, useSearchUsersQuery } from '@/store/features/github.api';
import { useEffect, useState } from 'react';

type Props = {};

const HomeComponent = (props: Props) => {
  const [search, setSearch] = useState<string>('');
  const [dropdown, setDropDown] = useState<boolean>(false);
  const debounce = UseDebounce(search);

  const { data, isLoading, isError, isFetching } = useSearchUsersQuery(debounce, { skip: debounce.length < 1 });
  const [fetchRepos, { isLoading: isReposLoading, data: repos }] = useLazyGetUserReposQuery();

  const clickHandler = (username: string) => {
    fetchRepos(username);
    setDropDown(false);
  };

  useEffect(() => {
    setDropDown(debounce.length !== 0 && data?.length! > 0);
  }, [data, debounce]);

  return (
    <div>
      <div className="relative w-[560px]">
        <h1 className="text-3xl font-extrabold text-gray-700 text-center mb-8">Путеводитель GIT</h1>
        <input
          type="search"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Введите запрос"
          className="border border-gray-400 px-4 py-2 duration-300 text-gray-500 rounded-md w-full h-[42px] mb-2"
          // поисковик
        />

        {isError && <p className="font-bold text-center text-red-500">Что-то пошло не так ... :(</p>}
        {dropdown && (
          <ul className="absolute  rounded-md left-0 right-0 max-h-[200px] shadow-md scroll-m-2 overflow-y-auto bg-white">
            {(isLoading || isFetching) && <p className="font-bold text-center">Loading...</p>}
            {data?.map((user) => (
              <li onClick={() => clickHandler(user.login)} key={user.id} className="p-2 hover:text-white hover:bg-gray-500 w-full duration-150 cursor-pointer">
                {user?.login}
              </li>
            ))}
          </ul>
        )}
        {isReposLoading && (
          <p className="font-bold text-center">
            Загрузочка... <span className="animate-spin ">&</span>
          </p>
        )}
        {repos?.map((rep) => (
          <RepoCard repo={rep} key={rep.id} />
        ))}
      </div>
    </div>
  );
};

export default HomeComponent;
