import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-300">
      <ul className="flex px-24 py-4 font-bold justify-between">
        <li>
          <Link href="/">Главная</Link>
        </li>
        <li>
          <Link href="/favourites">Избранное</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
