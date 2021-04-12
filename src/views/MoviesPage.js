//import React from 'react';
import React, {Component} from 'react';
import axios from 'axios';




class MoviesPage extends Component  {
    state = {
        list: [],
        query: '',
    }
  

// async  componentDidMount(query) {
//        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=8d4e0a5a0c37d4780eefdf617d0feea1&query=${query}`)
//  console.log(response.data.results)
//       this.setState({list: response.data.results})
//     }
  
    handleChange = (e) => {
           this.setState({query: e.currentTarget.value})
    }
    
    handleSubmit = (e, query) => {
        e.preventDefault()
        console.log(this.state)
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=8d4e0a5a0c37d4780eefdf617d0feea1&query=${query}`).then(response => {
            console.log(response.data.results)
            this.setState({ list: response.data.results })
            
              console.log(this.state)
})
        
    }
    
 render() {
        
     
        return (
            <>
                               
             
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.query} onChange={this.handleChange} />
                    <button type="submit">Искать</button>
                    </form>
                    <ul>
                        {this.state.list.map(({ id, oridinal_title }) =>
                        ( <li key={id} >{oridinal_title}</li>))} 
                     </ul>
                        
          
             </>
        );
    };
 };


export default MoviesPage; 