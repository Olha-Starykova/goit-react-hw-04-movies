import React, {Component} from 'react';
 import  axios  from 'axios';
import { Link } from 'react-router-dom';



class Cast extends Component  {
  
    state = {
        //  casts: [],
      
    };
//динамический раут
// async  componentDidMount() {
//       const { movieId } = this.props.match.params;
//        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=8d4e0a5a0c37d4780eefdf617d0feea1`)
  //  console.log(response.data.cast)

    


    //     this.setState({ casts: response.data.cast })
    // const cast = this.state.casts.find(cast => cast.id === Number(this.props.match.params.movieId))
    // //  this.setState({casts: cast})
    // console.log(cast)
    // }


   

    
    render() {
     
  
        return (
            <>
                <h1>из cast</h1>
                
   {/* <ul>
                    {this.state.casts.map(cast => (
                        // <li key={movie.id}>{ movie.title}</li> перенаправляем по динамическому параметру
            
                            <li key={cast.id}>{ cast.name}</li>
                         
                        
                    ))}
                </ul> */}


            </>
        );
    };
};

export default Cast;