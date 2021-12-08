import React, { Component } from 'react'
import axios from 'axios';

export default class Weather extends Component {

constructor(props) {
    super(props);
    this.state = {
        weather: []
    }
}

    // make a request using axios to server
    // get back list
    // set it in state
    // render the list!
    weatherRequest = async() => {
        const receivedWeather = await axios.get(`${process.env.REACT_APP_URL}/data/weather.json?name=test`);
        this.setState({ weather: receivedWeather.data });
    }

    componentDidMount() {
        this.weatherRequest();
    }
 
    render() {
        return (
            <div>
                <h3>the gosh darn weather</h3>
                <ul>
                {this.state.weather.length > 0 && this.state.weather.map(item => <li>{item}</li>)}
                </ul>
            </div>
        )
    }
}
