import React, { Component } from 'react'
import axios from 'axios'; // we import axios so we can use it

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
            let receivedWeather = await axios.get(`${process.env.REACT_APP_URL}weather?lat=${this.props.latitude}&lon=${this.props.longitude}`);
            console.log(receivedWeather.data);
            this.setState({weather: receivedWeather.data });
            // this.setState({ dateTime: receivedWeather[0].datetime });
            // this.setState({ description: receivedWeather[0].description });
           
            // console.log("the weather should be this: " + this.weather.description);
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
                <h3>the gosh darn weather is:</h3>
                <ul>

                {this.state.weather.map(day => <li key={day.date}>{day.date}: {day.description}</li>)}
                </ul>
            </div>
        )
    }
}
