import React, { Component } from 'react';
import axios from 'axios';

// https://us1.locationiq.com/v1/reverse.php?key=YOUR_ACCESS_TOKEN&lat=LATITUDE&lon=LONGITUDE&format=json

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state ={
      queryCity:'',
      locationObject: {},
      error: false
    }
  }

 
 
  getlocation = async() => {

    try {
    let result = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_API_KEY}&q=${this.state.queryCity}&format=json`)
    this.setState({ locationObject: result.data[0] })
    } catch (error) {
      console.error(error);
      this.setState({error: true});
    }
  }

handleSubmit = (event) => {
  event.preventDefault();
  this.setState({queryCity: event.target.city.value }, this.getlocation);
}

  render() {
    return (
      <div>
        <form onSubmit ={this.handleSubmit}>
          <input type="text" placeholder="Enter City Name Here" name="city"/>
          <button type="submit">Explore!</button>
        </form>
        {this.state.locationObject.display_name ? <p>{this.state.locationObject.display_name}</p> : <p>Search for a city.</p>}
        {this.state.error && <p>There was an error with your request.</p>}
      </div>
    )
  }
}
