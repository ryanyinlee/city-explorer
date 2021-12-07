import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Form, Card } from 'react-bootstrap';

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
    this.setState({ locationObject: result.data[0] });
    this.setState({error: false});
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
        <Card style={{ width: '48rem' }}>
        <Card.Body>
        <Form onSubmit ={this.handleSubmit}><br></br>
          <input type="text" placeholder="Enter City Name Here" name="city"/>
          {this.state.error && <Alert variant='warning'>There was an error with your request.</Alert>}
          <button type="submit">Explore!</button>
        </Form>
        <br></br>{this.state.locationObject.display_name ?  <p>{this.state.locationObject.display_name}, Earth <br></br> <br></br> Latitude: {this.state.locationObject.lat} Longitude: {this.state.locationObject.lon}</p> : <p>Search for a city.</p>}
      
        <Card.Img variant="bottom" width="450px" src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_API_KEY}&center=${this.state.locationObject.lat},${this.state.locationObject.lon}&zoom=10&size=400x400&format=png&maptype=roadmap&markers=icon:<icon>|<latitude>,<longitude>&markers=icon:<icon>|<latitude>,<longitude>`} alt="map"/>
        
        </Card.Body>
        </Card>
       
        
      </div>
    )
  }
}
