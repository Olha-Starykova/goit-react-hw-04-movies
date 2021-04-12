// '/' - компонент <HomePage>, домашняя страница со списком популярных кинофильмов.
// '/movies' - компонент <MoviesPage>, страница поиска фильмов по ключевому слову.
// '/movies/:movieId' - компонент <MovieDetailsPage>, страница с детальной информацией о кинофильме.
// /movies/:movieId/cast - компонент <Cast>, информация о актерском составе. Рендерится на странице <MovieDetailsPage>.
// /movies/:movieId/reviews - компонент <Reviews>, информация об обзорах. Рендерится на странице <MovieDetailsPage>.

import React from 'react';
import { Route, NavLink, Switch} from 'react-router-dom';
 import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import './styles.css'
import MovieDetailsPage from './views/MovieDetailsPage'
import routes from './routes'
import AppBar from './components/AppBar/AppBar'

const App = () =>
 
  <>
    <AppBar/>

    <Switch>
      <Route exact path={routes.home} component={HomePage} />
      <Route path={routes.movieDetal} component={MovieDetailsPage} />
      <Route path={routes.movie} component={MoviesPage} />
      <Route component={HomePage} />
    </Switch>
  </>

export default App;