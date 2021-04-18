import React, {Component} from 'react';
 import  axios  from 'axios';
import { NavLink, Route } from 'react-router-dom';
import Cast from '../components/Cast'
import Reviews from '../components/Reviews'
import defaultImage from '../components/default.jpg'
   import PropTypes from "prop-types";

class MovieDetailsPage extends Component {
    state = {
        poster_path: '',
        backdrop_path: null,
        homepage: null,
        vote_average: null,
        overview: null,
        title: null,
        id: null,
        genres: null
    };
//динамический раут
async  componentDidMount() {
    const { movieId } = this.props.match.params;
       const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=8d4e0a5a0c37d4780eefdf617d0feea1`)
    this.setState({ ...response.data })
    }

    
    render() {

        const { location, history } = this.props;
     const IMG = 'https://image.tmdb.org/t/p/w300'
               
        return (
            
            <>
             
                <button
                    type="button"
                    onClick={() => {
                        location.state ?
                            history.push(
                                location.state.from.pathname + location.state.from.search
                            ) : history.push('/')
                    }}
                >
                    Go back
                    </button>
                <div className='MovieDetails'>
                    <img src={(this.state.poster_path) ? (IMG + this.state.poster_path) : defaultImage} alt='' />
                    <div className='MovieDetailsText'>
                        <h1>{this.state.title}</h1>

                        <p>User Score {this.state.vote_average * 10}% </p>

                        <h3>Overview</h3>
                        <p>{this.state.overview}</p>
                        
                        <h3>Genres</h3>
                        {this.state.genres && this.state.genres.map(genre => <span key={genre.id}>{genre.name} </span>)}
                                                                               
                    </div>
                </div>
                {/* //вложенный маршрут. кусочек страницы в компоненты.  */}
              
                <ul className="Additional">
                    <p> Additional information</p>
                    <li>
                        <NavLink
                            to={{
                                pathname: `/movies/${this.state.id}/cast`,
                                state: { from: location.state.from }
                            }}
                            className="NavLinkcast"
                            activeClassName="NavLink-activecast"
                        >Cast
                       </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={{
                                pathname: `/movies/${this.state.id}/reviews`,
                                state: { from: location.state.from }
                            }}
                            className="NavLinkcast"
                            activeClassName="NavLink-activecast"
                        >Reviews
                       </NavLink>
                    </li>
                </ul>

                <Route
                    path="/movies/:movieId/cast"
                    render={props => <Cast {...props} />}
                />
                <Route
                    path="/movies/:movieId/reviews"
                    render={props => <Reviews {...props} />}
                />

            </>
        );
    };
};



MovieDetailsPage.propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
};




export default MovieDetailsPage;



                        // location.state ? this.props.history.push(location.state.from) : this.props.history.push('/')} >
                    // <button type="button" onClick={ () =>  this.props.history.push(location?.state?.from) || this.props.history.push('/')}  