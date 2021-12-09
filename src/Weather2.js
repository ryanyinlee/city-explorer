import React, { Component } from 'react'

export default class Weather2 extends Component {
    render() {
        return (
            <div>
                {this.props.weather.map(day => <li> key={day.date}: {day.description}</li>)}
            </div>
        )
    }
}
