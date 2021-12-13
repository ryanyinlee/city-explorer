import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Form1 from './Form1.js';


export default class App extends Component {

  render() {
    return (
      <div>
        <Header></Header>      
        <Form1></Form1>
        <Footer></Footer>
        
      </div>
    )
  }
}
