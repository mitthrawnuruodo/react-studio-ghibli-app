import { Link } from 'react-router';
import useFilmStore from '../store/filmStore';
import FilmCard from '../components/FilmCard';

const Home = () => {
  const favourites = useFilmStore((state) => state.favourites);

  return (
    <div>
      <section className="hero relative">
        <img
          src="https://image.tmdb.org/t/p/original/bSXfU4dwZyBA1vMmXvejdRXBvuF.jpg"
          alt="Hero"
          className="w-full h-96 lg:h-128 xl:h-192 object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="bg-indigo-600/50 text-white text-4xl p-4 rounded">
            Favourite Studio Ghibli Films
          </h1>
        </div>
      </section>
      <section className="p-4">
        <h2>My favourites</h2>
        {favourites.length === 0 ? (
          <div>
            <p>You have no favourite films yet.</p>
            <Link to="/films" className="text-blue-500">
              Go to Films
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {favourites.map((film) => (
              <FilmCard key={film.id} film={film} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
