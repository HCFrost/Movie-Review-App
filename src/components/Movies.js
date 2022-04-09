import React from "react";
import Movie from "./Movie";

export default class Movies extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            movies:props.movies
        }
    }
    render(){
        let movies;
        if(this.state.movies){
                    movies = this.state.movies.map((movie,id) =>
                        <Movie key={id} {...movie}/>)}
        return( 
            <div className="card">
                <div className="card-header">
                   <Movie {...movies} />
                </div>
            </div>)
    }
}
