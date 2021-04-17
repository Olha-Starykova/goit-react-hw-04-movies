import React, {Component} from 'react';
 import  axios  from 'axios';



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
     

const { casts } = this.state
        return (
               
            <>
             
                <ul>
                    {casts.map(cast => (
                                
                        <li key={cast.id}>
                      
                            <img src={`https://image.tmdb.org/t/p/w200/${cast.profile_path}`}  alt='' />
                            <p>{cast.name}</p>
                             <p>Character: {cast.character}</p>
                        </li>
                                             
                    ))}
                </ul>
              
            </>
        );
    };
};

export default Cast;