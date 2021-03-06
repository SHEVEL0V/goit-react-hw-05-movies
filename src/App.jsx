import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
import Container from './components/container/container';
import Loading from './components/loading/loading';
import Error from './components/errorEl/error';

const HomePage = lazy(() => import('./views/HomePage'));
const MovieDetailsPage = lazy(() => import('./views/MovieDetailsPage'));
const SerchFilm = lazy(() => import('./views/SearchFilm'));

export default function App() {
  return (
    <Container>
      <Header />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="movies/" element={<SerchFilm />}></Route>
          <Route
            path="movies/:movieId/*"
            element={<MovieDetailsPage />}
          ></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </Suspense>
    </Container>
  );
}
