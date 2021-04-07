import React, {Component} from 'react';
 import  axios  from 'axios';
// import { Link } from 'react-router-dom';

class MovieDetailsPage extends Component {
    state = {
     
    }

                                                                              //movie/{movie_id}
async  componentDidMount() {
     const { movieId } = this.props.match.params;
       const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/${movieId}?api_key=8d4e0a5a0c37d4780eefdf617d0feea1`)
    console.log(response)
    console.log({ movieId })
     }

    render() {
                
        return (
            <>
                <h1>img {this.props.match.params.movieId }</h1>
            </>
        )
    }
}

export default MovieDetailsPage;