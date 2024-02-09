import { useActions } from '@/hooks/actions';
import { useAppSelector } from '@/hooks/reduxSelector';
import Link from 'next/link';

const FavouriteComponent = () => {
  const { favourites } = useAppSelector((state) => state.github);
  const { removeFavourite } = useActions();

  const removeFromFavourite = (el: string) => {
    removeFavourite(el); // Pass the repo name as a parameter
  };

  return (
    <div className="flex justify-center pt-10 mx-auto">
      <ul className="list-none">
        {favourites?.length > 0 ? (
          favourites.map((el, idx) => (
            <li className="w-full my-4 flex justify-between items-center gap-10">
              <Link href={el} className="font-bold">
                {el}
              </Link>
              <button className="w-48  p-2 bg-red-500 rounded-lg text-white hover:bg-red-400 duration-300" onClick={() => removeFromFavourite(el)}>
                Удалить
              </button>
            </li>
          ))
        ) : (
          <p className="text-center font-bold">Пустота...</p>
        )}
      </ul>
    </div>
  );
};

export default FavouriteComponent;
