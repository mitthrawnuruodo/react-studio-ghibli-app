import { Link } from 'react-router';

const Header = () => (
  <header className="bg-gray-800 text-white p-4 flex justify-between">
    <h1 className="text-xl">
      <Link to="/">Studio Ghibli Films</Link>
    </h1>
    <nav>
      <ul className="flex space-x-4">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/films">Films</Link></li>
        <li><Link to="/favourites">Favourites</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;