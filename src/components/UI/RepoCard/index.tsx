import { useActions } from '@/hooks/actions';
import Link from 'next/link';
import React from 'react';

export function RepoCard({ repo }: any) {
  const { addFavourite } = useActions();

  const addToFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    addFavourite(repo.html_url);
    alert('Репозиторий добавлен в избранное');
  };

  return (
    <Link href={repo.html_url}>
      <div className="border p-3 rounded-sm mb-2 shadow-md hover:bg-gray-100">
        <h2 className="text-lg text-gray-700 font-bold">{repo.full_name}</h2>
        <p className="text-gray-600 font-light">
          {repo.fork && (
            <>
              Форки: <span className="font-medium mr-2">{repo.forks}</span>
            </>
          )}
          Просмотры: <span className="font-medium">{repo.watchers}</span>
        </p>
        <p className="text-gray-500 font-light">{repo.description}</p>
        <button className="py-2 px-4 bg-yellow-400 rounded hover:shadow-md transition-all" onClick={addToFavourite}>
          В избранное
        </button>
      </div>
    </Link>
  );
}
