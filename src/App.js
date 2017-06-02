/* global fetch */
/* global navigator */
/* global $ */

import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    componentDidMount() {
     navigator.geolocation.getCurrentPosition(function(location) {
        var lat, lon, api;

        lat = location.coords.latitude;
        lon = location.coords.longitude;
        api =
    "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=" +
    lat +
    "&lon=" +
    lon +
    "&units=imperial&APPID=b0006e6b1d9b6ebf1a4b8baa93e3eb5e";
    console.log(lat, lon, api);
    $.ajax({ 
      url: api
    }).done(function(data) {
    // console.log(data);
    this.setState({weatherData: data});
   
    }.bind(this));
       
     }.bind(this));   
      }
      render() {
        var temp;
        if(this.state.weatherData) {
           console.log('state:',this.state.weatherData);
           temp = this.state.weatherData.main.temp;
           console.log(temp);
        }
        return (
          <p>Temp: {temp}</p>
        );
      }
}

export default App;

