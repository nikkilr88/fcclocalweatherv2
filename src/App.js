/* global fetch */
/* global navigator */
/* global $ */

import React from 'react';
import './App.css';
import Temp from './Temp';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {deg: '°F'};
      this.convertC = this.convertC.bind(this);
      this.convertF = this.convertF.bind(this);
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
    this.setState({
        weatherData: data,
        mainTemp: data.main.temp,
        weatherIcon: data.icon
    });
   
    }.bind(this));
       
     }.bind(this));   
      }
      
      convertC() {
      var newTemp = this.state.mainTemp, newTemp1 = this.state.temp1, newTemp2 = this.state.temp2, newTemp3 = this.state.temp3;
      
      newTemp = Math.round((newTemp - 32) * 5 / 9);
      newTemp1 = Math.round((newTemp1 - 32) * 5 / 9);
      newTemp2 = Math.round((newTemp2 - 32) * 5 / 9);
      newTemp3 = Math.round((newTemp3 - 32) * 5 / 9);
      
      this.setState({ mainTemp: newTemp, temp1: newTemp1, temp2: newTemp2, temp3: newTemp3, deg: '°C'});
      document.getElementById("c").style.display = "none";
      document.getElementById("f").style.display = "inline";
    }

    convertF() {
      var newTemp = this.state.mainTemp, newTemp1 = this.state.temp1, newTemp2 = this.state.temp2, newTemp3 = this.state.temp3;
      
      newTemp = newTemp * 9 / 5 + 32;
      newTemp1 = newTemp1 * 9 / 5 + 32;
      newTemp2 = newTemp2 * 9 / 5 + 32;
      newTemp3 = newTemp3 * 9 / 5 + 32;
      
      this.setState({ mainTemp: newTemp, temp1: newTemp1, temp2: newTemp2, temp3: newTemp3, deg: '°F'});
      document.getElementById("c").style.display = "inline";
      document.getElementById("f").style.display = "none";
    }

      render() {
        var temp;
        if(this.state.weatherData) {
           console.log('state:',this.state.weatherData);
           temp = this.state.weatherData.main.temp;
           console.log(temp);
        }
        return (
        <div>
          <Temp
            temp={this.state.weatherData}
            mainTemp={this.state.mainTemp}
            deg={this.state.deg}
            convertC={this.convertC}
            convertF={this.convertF}
          />
        </div>
        );
      }
}

export default App;

