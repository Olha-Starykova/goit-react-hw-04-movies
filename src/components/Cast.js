import React, {Component} from 'react';
 import  axios  from 'axios';
import defaultImage from '../components/default.jpg'
import PropTypes from "prop-types";


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
     
            const IMG = 'https://image.tmdb.org/t/p/w300'
            
const { casts } = this.state
            return (
               
                <>
                    <ul>
                        {casts.map(cast => (
                                
                            <li key={cast.id}>
                     
                                <img src={ (cast.profile_path) ? (IMG + cast.profile_path) : defaultImage} alt='' />
                                <p>{cast.name}</p>
                                <p>Character: {cast.character}</p>
                            </li>
                                             
                        ))}
                    </ul>
              
                </>
            );
    };
};

Cast.propTypes = {
    movieId: PropTypes.string,
  
};


export default Cast;