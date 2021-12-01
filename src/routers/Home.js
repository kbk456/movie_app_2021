import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import './Home.css';

class Home extends React.Component {
  state = {
    isLonging: true,
    movie:[],
  };
  getMovies = async() => {
    const {
      data: {
          data:{ movies },
        },
      } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
    this.setState({movies, isLonging:false});
  }
  componentDidMount(){
    this.getMovies();
  }
  render(){
    const { isLonging,movies } = this.state;
    return (
      <section className="container">
        {isLonging ? (
          <div className="loader">
            <span className="loader__text">Loding...</span> 
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => ( 
             <Movie 
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;