import React from 'react';
import './App.css';

//TODO move deg from var to state

var tempData, city, description, icon, iconUrl, deg;

class Temp extends React.Component {
    
    componentWillMount(){
      deg= "";
      tempData = "";
      description = "Loading...";
    }
    
    componentDidMount() {
      deg = "°F";
    }
    
    render() {
      
      if (this.props.temp && this.props.mainTemp) {
        tempData = Math.round(this.props.mainTemp);
        city = this.props.temp.name;
        description = this.props.temp.weather[0].main;
        icon = this.props.temp.weather[0].icon;
        iconUrl = "http://openweathermap.org/img/w/" + icon + ".png";
      }
      //Stuff to display
      return (
        <div className="main">
          <h3 className="city"><i className="fa fa-map-marker" /> {city}</h3>
          <img className="icon" src={iconUrl} alt="icon" />
          <h3 className="description"> {description} </h3>
          <span className="temp" id="temp">{tempData}{deg}</span>
        </div>
      );
    }
  }
  
  export default Temp;