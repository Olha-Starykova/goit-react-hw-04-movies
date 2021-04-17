// '/' - компонент <HomePage>, домашняя страница со списком популярных кинофильмов.
// '/movies' - компонент <MoviesPage>, страница поиска фильмов по ключевому слову.
// '/movies/:movieId' - компонент <MovieDetailsPage>, страница с детальной информацией о кинофильме.
// /movies/:movieId/cast - компонент <Cast>, информация о актерском составе. Рендерится на странице <MovieDetailsPage>.
// /movies/:movieId/reviews - компонент <Reviews>, информация об обзорах. Рендерится на странице <MovieDetailsPage>.

import React, {Suspense, lazy} from 'react';
import { Route, Switch } from 'react-router-dom';
 //import HomePage from './views/HomePage';
//import MoviesPage from './views/MoviesPage';
//import MovieDetailsPage from './views/MovieDetailsPage'
import routes from './routes'
import AppBar from './components/AppBar/AppBar'
import './styles.css'

const HomePage = lazy(() => import('./views/HomePage'  /* webpackChunkName: "home-page" */));
const MoviesPage = lazy(() => import('./views/MoviesPage'  /* webpackChunkName: "movies-page" */));
const MovieDetailsPage = lazy(() => import('./views/MovieDetailsPage'  /* webpackChunkName: "movie-details-page" */));


const App = () =>
 
  <>
    <AppBar/>

    <Suspense fallback={<h1>Загружается...</h1>} >
    <Switch>
      <Route exact path={routes.home} component={HomePage} />
      <Route path={routes.movieDetal} component={MovieDetailsPage} />
      <Route path={routes.movie} component={MoviesPage} />
      <Route component={HomePage} />
    </Switch>
   </Suspense>
  </>

export default App;