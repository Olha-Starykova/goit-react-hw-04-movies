import React, {Component} from 'react';
 import  axios  from 'axios';
import { Link, Route } from 'react-router-dom';
 import Cast from '../components/Cast'

class MovieDetailsPage extends Component {
    state = {
         movieDetails: [],
        poster_path: '',
        backdrop_path: null,
        homepage: null,
        vote_average: null,
        overview: null,
        title: null
    };
//динамический раут
async  componentDidMount() {
     const { movieId } = this.props.match.params;
       const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=8d4e0a5a0c37d4780eefdf617d0feea1`)
   // console.log(response.data)
  this.setState({ ...response.data})
      }

    render() {
                
        return (
            
            <>
                <h1>img {this.props.match.params.movieId}</h1>
                <img src={this.state.poster_path} alt='' />
                <img src={`https://image.tmdb.org/t/p/w200/${this.state.poster_path}`} alt='' />
                <h2>{this.state.title}</h2>
                <h2>{this.state.overview}</h2>
                <h2>{this.state.vote_average}</h2>
                {/* //вложенный маршрут. кусочек страницы в компаниенты.  */}
                <Route
                     //path="/movies/:movieId"
                     path={`${this.props.match.path}`}
                    // render={() => <h1>Cast</h1>} />
                    render={props => {
                        console.log(props)

                        return <Cast {...props} />
                    }}
                // component={Cast}/>
                />
                </>
        );
    }
}

export default MovieDetailsPage; 