import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useFilmStore = create(
  persist(
    (set) => ({
      films: [],
      favourites: [],
      // Set films from the API
      setFilms: (films) => set({ films }),
      // Add a film to favourites (store the whole film object)
      addFavourite: (film) =>
        set((state) => ({
          favourites: state.favourites.find((f) => f.id === film.id)
            ? state.favourites
            : [...state.favourites, film],
        })),
      // Optionally, remove a favourite by id
      removeFavourite: (filmId) =>
        set((state) => ({
          favourites: state.favourites.filter((f) => f.id !== filmId),
        })),
    }),
    { name: 'film-store' }
  )
);

export default useFilmStore;