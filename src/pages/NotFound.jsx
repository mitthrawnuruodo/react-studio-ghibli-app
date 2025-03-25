import { Link } from 'react-router';

const NotFound = () => (
  <div className="p-4 text-center">
    <h1>404 - Page Not Found</h1>
    <Link to="/" className="text-blue-800">
      Go Home
    </Link>
  </div>
);

export default NotFound;
