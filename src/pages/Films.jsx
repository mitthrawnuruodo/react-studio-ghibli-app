import { useEffect } from 'react';
import useFilmStore from '../store/filmStore';
import FilmCard from '../components/FilmCard';
import useAPI from '../hooks/useAPI';

const Films = () => {
  // Use the custom hook to fetch films
  const { data, loading, error } = useAPI('https://ghibli-api.vercel.app/api/films');
  const setFilms = useFilmStore((state) => state.setFilms);

  // When data is fetched, store it in Zustand
  useEffect(() => {
    if (data) {
      //console.log('Fetched data:', data);
      setFilms(data.data);
    }
  }, [data, setFilms]);

  if (loading) return <p className="h-6 w-6 border-b-2 animate-spin rounded-full"></p>;
  if (error) return <p>Error loading films: {error.message}</p>;

  return (
    <>
      <h1>Films</h1>
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {data.data.map((film) => (
          <FilmCard key={film.id} film={film} />
        ))}
      </div>
    </>
  );
};

export default Films;
