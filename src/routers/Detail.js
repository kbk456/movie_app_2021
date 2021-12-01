import React from "react";
import '../components/Movie.css';

class Detail extends React.Component{
    componentDidMount(){
        const { location, history } = this.props;
        if(location.state === undefined){
            history.push('/');
        }
    }
    render(){
        const { location } = this.props;
        if(location.state){
            return <div className="movie">
            <div className="movie__data">
                
                <h3 className="movie__title">{location.state.title}</h3>
                
                <h5 className="movie__year">{location.state.year}</h5>
                <ul className="movie__genres">
                    {location.state.genres.map((genre,i) => {
                        return <li key={i} className="movie__genre">{genre}</li>;
                    })}
                </ul>    
                <p className="movie__summary">{location.state.summary.slice(0,180)}...</p>
                
                <img src={location.state.poster} alt={location.state.title} title={location.state.title} />
            </div>
        </div>
        }else{
            return null;
        }
        
    }
}

export default Detail;