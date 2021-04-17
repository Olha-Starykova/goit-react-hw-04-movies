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
    
    handleSubmit = (query) => {
        const { history, location } = this.props;
    if (!query) {
      return;
    } // дописал это условие чтобы не отправляло сабмит с пустой строкой

        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=8d4e0a5a0c37d4780eefdf617d0feea1&query=${query}`)
            .then(response => {
                //  console.log(response.data.results)
                this.setState({ lists: response.data.results, query: '' })
                history.push({
                    pathname: location.pathname,
                    search: `query=${query}`,
                });
                // console.log("MoviesPage", location);
            });
    };


      // когда компонент маунтится - мы отправляем еще один сабмит за предыдущей пачкой фильмов
  componentDidMount() {
      const { search } = this.props.location
        const { query } = this.state
    //  деструктуризацияю делать не стал, подумал что так понятнее будет что и откуда берется
    // ну а вы уже сделаете деструктуризацию
   // console.log(search.split("=")[1]); // тут я просто распарсил search для того чтобы передавать название фильма
    // без &query= это можно сделать и другими способами, например сохранить
    // название фильма в state и потом оттуда подтягивать
    this.handleSubmit(
      search.split("=")[1] === undefined // тут если у нас есть значение из location.search тогда его подтягиваем
        ? // а если нет, тогда query из стейта
          query
        : search.split("=")[1]
    );
  }

      
 render() {
        
     const { query, lists } = this.state;
     const { location } = this.props;
 
     
     return (
         <>
                            
             <form onSubmit={(e) => {
                 e.preventDefault();
                 this.handleSubmit(query)
             }}
             >
                 <input
                     type="text"
                     value={query}
                     onChange={this.handleChange}
                 />
                 <button type="submit">Искать</button>
             </form>
             <ul>
                 {lists.map((list) =>
                 (<li key={list.id} >
                     <Link to={{
                         pathname: `/movies/${list.id}`,
                         state: { from: location },
                     }} >
                         {list.title}
                     </Link>
                 </li>))}
 
             </ul>
         </>
     );
    };
 };


export default MoviesPage;


