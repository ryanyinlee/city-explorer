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
        // Seattle, King County, USA
        // ['Seattle', ' King County', ' USA'] extra space is ok
        let city = this.state.locationObject.display_name.split(',')[0];
        //let url = `${process.env.REACT_APP_URL}/weather?city_name=${city}`;
        try {
            let receivedWeather = await axios.get(`${process.env.REACT_APP_URL}/data/weather?city_name=${city}`);
            this.setState({ weather: receivedWeather.data });
        } catch (e) {
            this.setState({ error: true });
        }
        
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
