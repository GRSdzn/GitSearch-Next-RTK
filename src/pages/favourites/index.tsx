import dynamic from 'next/dynamic';
const NoSSRFavouriteComponent = dynamic(() => import('@/components/pageComponents/FavouritesComponent'), { ssr: false });

const Favourites = () => {
  return (
    <div>
      <NoSSRFavouriteComponent />
    </div>
  );
};

export default Favourites;
