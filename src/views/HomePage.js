import React, {Component} from 'react';
import  axios  from 'axios';
import { Link } from 'react-router-dom';
 

class HomePage extends Component  {
    state = {
        movies: []
    }
    
    
async  componentDidMount() {
       const response = await axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=8d4e0a5a0c37d4780eefdf617d0feea1')
 
      this.setState({movies: response.data.results})
    }

    render() {
       
         const { movies } = this.state
         const { location } = this.props
        return (
            <>
                <h1>Trending today</h1>
        
                <ul>
                    {movies.map(movie => (
                        // <li key={movie.id}>{ movie.title}</li> перенаправляем по динамическому параметру
                        <li key={movie.id}>
                            {/* <Link to={`/movies/${movie.id}`}> */}
                            <Link to={{
                                pathname: `/movies/${movie.id}`,
                                state: { from: location },
                            }} >
                                
                                {movie.title}</Link>
                        </li>
                    ))}
                </ul>
            </>
        );
    };
};

export default HomePage;