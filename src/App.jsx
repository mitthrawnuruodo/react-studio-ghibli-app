import { Routes, Route } from 'react-router';
import Layout from './Layout';
import Home from './pages/Home';
import Films from './pages/Films';
import FilmDetails from './pages/FilmDetails';
import Favourites from './pages/Favourites';
import About from './pages/About';
import NotFound from './pages/NotFound';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="films" element={<Films />} />
      <Route path="films/:id" element={<FilmDetails />} />
      <Route path="favourites" element={<Favourites />} />
      <Route path="about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

export default App;
