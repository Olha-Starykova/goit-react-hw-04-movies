import React, {Component} from 'react';
 import  axios  from 'axios';
import { Link } from 'react-router-dom';


class Cast extends Component  {
  
    state = {
          casts: []
    };
//динамический раут
    async componentDidMount() {
     
    const { movieId } = this.props.match.params;
   // console.log('cast', movieId)

    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=8d4e0a5a0c37d4780eefdf617d0feea1`)
     // console.log("response.data.cast", response.data.cast)
        this.setState({ casts: response.data.cast })
    };
     
        render() {
     
   const { location } = this.props
     console.log("Cast", location.state)

        return (
               
            <>
                <h1>cast {this.props.match.params.movieId}</h1>
                <ul>
                    {this.state.casts.map(cast => (
                                
                        <li key={cast.id}>
                            <p>{cast.name}</p>
                            <img src={`https://image.tmdb.org/t/p/w200/${cast.profile_path}`} alt='{cast.name}' />
                           
                        </li>
                                             
                    ))}
                </ul>
              
            </>
        );
    };
};

export default Cast;