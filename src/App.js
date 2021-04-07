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
// import BooksView from './views/BooksView';
// import NotFoundView from './views/NotFoundView'



const App = () =>
  <>
    <ul>
      <li><NavLink
           exact
           to='/'
          className="NavLink"
          activeClassName="NavLink-active"
         >Home
         </NavLink></li>
      <li><NavLink
          to='/movies'
          className="NavLink"
          activeClassName="NavLink-active"
        >Movies
         </NavLink></li>
 
    </ul>

    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/movies/:movieId' component={MovieDetailsPage} />
      <Route path='/movies' component={MoviesPage} />
      <Route component={HomePage} />
    </Switch>
  </>

export default App;