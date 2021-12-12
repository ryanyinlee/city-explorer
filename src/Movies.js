import React, { Component } from 'react';
import axios from 'axios';






export default class Movies extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
    }
    



    // movieRequest = async() => {
   
        
    //     try {
    //         let receivedMovies = await axios.get(`${process.env.REACT_APP_URL}/data/weather?city_name=${city}`);
    //         this.setState({ movies: receivedMovies.data });
    //     } catch (e) {
    //         this.setState({ error: true });
    //     }
        
    // }


    render() {
        return (
            <div>
                <h3>{this.props.movie.title}</h3>
                <img src={this.props.movie.image_url} alt={this.props.movie.overview}/>
                <p>{this.props.movie.overview}</p>

            </div>
        )
    }
}
