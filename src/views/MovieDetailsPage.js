import React, {Component} from 'react';
 import  axios  from 'axios';
import { NavLink, Route } from 'react-router-dom';
import Cast from '../components/Cast'
 import Reviews from '../components/Reviews'

class MovieDetailsPage extends Component {
    state = {
        poster_path: '',
        backdrop_path: null,
        homepage: null,
        vote_average: null,
        overview: null,
        title: null,
        id: null
    };
//динамический раут
async  componentDidMount() {
    const { movieId } = this.props.match.params;
 // console.log("id",movieId)
       const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=8d4e0a5a0c37d4780eefdf617d0feea1`)
    //console.log("response.data", response.data)
  this.setState({ ...response.data})
      }

    
    render() {

 const { movieId } = this.props.match.params;
//console.log('render', movieId)
        // const { location } = this.props
     //   console.log(location.state.from)
            const { location } = this.props
        console.log("MovieDetailsPage", location.state)
        

        return (
            
            <>
                <h1>cast {this.props.match.params.movieId}</h1>
                <button type="button" onClick={ () => location.state ? this.props.history.push(location.state.from) : this.props.history.push('/')} >
                  {/* <button type="button" onClick={ () =>  this.props.history.push(location?.state?.from) || this.props.history.push('/')} > */}
                    Go back 
                    </button>
                <img src={this.state.poster_path} alt='' />
                <img src={`https://image.tmdb.org/t/p/w200/${this.state.poster_path}`} alt='' />
                <h2>{this.state.title}</h2>
                <h2>{this.state.overview}</h2>
                <h2>{this.state.vote_average}</h2>
                
                {/* //вложенный маршрут. кусочек страницы в компоненты.  */}
              
                <ul>
                    <li>
                        <NavLink
                        to={`/movies/${this.state.id}/cast`}
                        
                      

                        className="NavLink"
                        activeClassName="NavLink-active"
                    >Cast
                       </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={`/movies/${this.state.id}/reviews`}
                            
                     


                        className="NavLink"
                        activeClassName="NavLink-active"
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
    }
}

export default MovieDetailsPage; 