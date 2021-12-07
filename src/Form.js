import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

export default class Form1 extends Component {

    constructor(props) {
        super(props);
        this.state ={
          queryCity:'',
          locationObject: {},
          error: false
        }
      }



    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({queryCity: event.target.city.value }, this.getlocation);
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

    render() {
        return (
            <div>
                <Card style={{ width: '32rem' }}>
                    <Form>

                        <Form.Group className="mb-3" >
                            <Form.Label>Search for a city: </Form.Label>
                            <Form.Control type="text" id="city" placeholder=""></Form.Control>
                            
                        </Form.Group>
                        <Button onClick={this.handleSubmit} variant="primary" type="submit">
                            Explore!
                        </Button>
                    </Form>
                </Card>
            </div>
        )
    }
}