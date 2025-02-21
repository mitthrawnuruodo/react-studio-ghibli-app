import React from 'react';
import { useParams } from 'react-router';
import useFilmStore from '../store/filmStore';

const FilmDetails = () => {
  const { id } = useParams();
  const film = useFilmStore((state) => state.films.find((f) => f.id === id));
  const addFavourite = useFilmStore((state) => state.addFavourite);
  const removeFavourite = useFilmStore((state) => state.removeFavourite);
  const favourites = useFilmStore((state) => state.favourites);

  const isFavourite = favourites.some((fav) => fav.id === id);

  if (!film) return <p>Film not found.</p>;

  console.log(film);

  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row">
        <img
          src={film.image}
          alt={`${film.title} Poster`}
          className="w-full object-cover rounded mb-4 md:mb-0 md:mr-4"
        />
        <div>
          <h1 className="text-2xl font-bold mb-2">{film.title}</h1>
          <p className="mb-2">{film.description}</p>
          <p className="mb-2">Release Date: {film.release_date}</p>
          {isFavourite ? (
            <button
              onClick={() => removeFavourite(id)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200"
            >
              Remove from Favourites
            </button>
          ) : (
            <button
              onClick={() => addFavourite(film)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
            >
              Add to My Favourites
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilmDetails;
