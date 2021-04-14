//import React from 'react';
import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';




class MoviesPage extends Component  {
    state = {
        lists: [],
        query: '',
    }
  
    
    handleChange = (e) => {
           this.setState({query: e.currentTarget.value})
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        const { query } = this.state;
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=8d4e0a5a0c37d4780eefdf617d0feea1&query=${query}`)
            .then(response => {
            //  console.log(response.data.results)
            this.setState({ lists: response.data.results, query: '' })
            });
        
    
    };
      
 render() {
        
     const { query } = this.state;
     
     return (
         <>
                             
             <form onSubmit={this.handleSubmit}>
                 <input type="text" value={this.state.query} onChange={this.handleChange} />
                 <button type="submit">Искать</button>
             </form>
             <ul>
                 {this.state.lists.map((list) =>
                 (<li key={list.id} >
                     <Link to={
                         `/movies/${list.id}`
                     } >
                         {list.title}
                     </Link>
                 </li>))}
 
             </ul>
         </>
     );
    };
 };


export default MoviesPage;


    {/* <Link to={{ */}
                        //  pathname: `/movies/${list.id}`,
                    //      state: {
                    //         from: this.props.location,
                    //    }
                    //  }} >