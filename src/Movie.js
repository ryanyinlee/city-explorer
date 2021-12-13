import React, { Component } from 'react'

export default class Movie extends Component {
    render() {
        return (
            <div>
                {this.props.movies.map(film => <li key={film.title}><h3>{film.title}</h3> <br></br> {film.overview} <br></br><img width={'400'} height={'auto'} src={film.image_url === 'https://www.themoviedb.org/t/p/w1280/null' ? 'doggoplaceholder.jpg' : film.image_url} alt={film.title} /><br></br><br></br><br></br><br></br></li>)}
            </div>
        )
    }
}
