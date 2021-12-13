import React, { Component } from 'react';
import axios from 'axios'; 
import WeatherDay from './WeatherDay.js';

export default class Weather extends Component {

    constructor(props) {
        super(props);
        this.state = {
            weather: [],
            longitude: '',
            latitude: '',

        }
    }
    
    weatherRequest = async () => {
        try {
            let receivedWeather = await axios.get(`${process.env.REACT_APP_URL}/weather?lat=${this.props.latitude}&lon=${this.props.longitude}`);
            this.setState({weather: receivedWeather.data });
            } catch (error) {
            this.setState({ error: true });

        }
    }

    

    componentDidMount() {
        this.weatherRequest();
        this.setState({latitude: this.props.latitude});
        this.setState({longitude: this.props.longitude});   
    }

    render() {
        return (
            <div>
                <h3>the gosh darn weather is gonna be:</h3>
                    <ul>
                    <WeatherDay                 
                        weather = {this.state.weather}
                    />             
                </ul>
                <br></br>
                <br></br>
            </div>
        )
    }
}

//Edited here.
