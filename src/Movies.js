import React, { Component } from 'react';
import axios from 'axios';
import Movie from './Movie.js';


export default class Movies extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
    }

    movieRequest = async () => {
        try {
            let receivedMovies = await axios.get(`${process.env.REACT_APP_URL}/movies?city_name=${this.props.queryCity}`);
            console.log("querycity to search: " + this.props.queryCity);
            console.log("receivedMovies[0]" + receivedMovies.data);
            this.setState({ movies: receivedMovies.data });
            console.log("this.movies" + this.movies);
        } catch (e) {
            this.setState({ error: true });
        }

    }


    componentDidMount() {
        this.movieRequest();
    }

    render() {
        return (
            <div>
                <ul>
                    <h3>Famous Movies Set in {this.props.queryCity}</h3>
                    <br></br>
                    <br></br>
                    <Movie
                        movies={this.state.movies}
                    />
                </ul>

            </div>
        )
    }
}

// Edited here.