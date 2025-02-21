import useFilmStore from '../store/filmStore';
import FilmCard from '../components/FilmCard';

const Favourites = () => {
  const favourites = useFilmStore((state) => state.favourites);
  return (
    <div className="p-4">
      <h1>Favourites</h1>
      {favourites.length === 0 ? (
        <p>No favourites added yet.</p>
      ) : (
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {favourites.map((film) => (
            <FilmCard key={film.id} film={film} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favourites;
