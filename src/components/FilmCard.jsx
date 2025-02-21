import { Link } from 'react-router';

const FilmCard = ({ film }) => (
  <div className="flex border p-4 rounded shadow items-center">
    {/* Portrait thumbnail on the left */}
    <img
      src={film.image}
      alt={`${film.title} Banner`}
      className="w-18 h-auto object-cover rounded mr-4"
    />
    <div>
      <h2 className="text-lg font-bold">{film.title}</h2>
      <p>{film.release_date}</p>
      <Link to={`/films/${film.id}`} className="text-blue-500 mt-2 inline-block">
        Read More
      </Link>
    </div>
  </div>
);

export default FilmCard;
