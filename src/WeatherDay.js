import React, { Component } from 'react'

export default class WeatherDay extends Component {
    render() {
        return (
            <div>
                {this.props.weather.map(day => <li key={day.date}>{day.date}: {day.description}</li>)}
            </div>
        )
    }
}
