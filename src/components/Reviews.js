import React, {Component} from 'react';
 import  axios  from 'axios';
import { Link } from 'react-router-dom';



class Reviews extends Component  {
  
    state = {
          contents: []
    };

//динамический раут
    async componentDidMount() {
     
    const { movieId } = this.props.match.params;
   // console.log('cast', movieId)
         const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=8d4e0a5a0c37d4780eefdf617d0feea1`)
         // console.log("response.data.Reviews", response.data.results)
        this.setState({ contents: response.data.results })
    };
         
    render() {
     
        return (
            <>
                <h1>Reviews {this.props.match.params.movieId}</h1>
                <ul>
                    {this.state.contents.map(content => (
                                
                        <li key={content.id}> 
                            <p>{content.content}</p>
                                                      
                        </li>
                                             
                    ))}
                </ul>
              
            </>
        );
    };
};

export default Reviews;