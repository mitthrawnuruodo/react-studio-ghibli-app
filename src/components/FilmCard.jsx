import { Link } from 'react-router';

const FilmCard = ({ film }) => (
  <div className="relative flex border p-4 rounded shadow items-center hover:shadow-lg">
    <img
      src={film.image}
      alt={`${film.title} Banner`}
      className="w-18 h-auto object-cover rounded mr-4"
    />
    <div>
      <h2 className="text-lg font-bold">{film.title}</h2>
      <p>{film.release_date}</p>
      <Link to={`/films/${film.id}`} className="text-teal-800 mt-2 inline-block hover:underline after:absolute after:inset-0 after:content-['']">
        Read More
      </Link>
    </div>
  </div>
);

export default FilmCard;
