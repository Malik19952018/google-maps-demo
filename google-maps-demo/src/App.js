import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './buttons.css';
import Map, {AnotherComponent} from './Map';
import Maps from './MapContainer';

class App extends Component {
  render() {
    return (

      <Maps />
    );
  }
}

export default App;
