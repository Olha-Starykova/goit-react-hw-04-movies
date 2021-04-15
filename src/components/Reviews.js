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
     
  const { location } = this.props
     console.log("Reviews", location.state)

        return (
            <>

               { (this.state.contents.length > 0) ? (
             
                <ul>
                    {this.state.contents.map(content => (
                                
                        <li key={content.id}>
                               <b>Author: {content.author}</b>
                            <p>{content.content}</p>
                                                      
                        </li>
                                             
                    ))}
                </ul>) : (

                   <span>We don't have any reviews for this movie</span> )}
              
            </>
        );
    };
};

export default Reviews;