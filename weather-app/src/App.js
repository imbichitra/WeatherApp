import React, { Component } from 'react';

import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';
const API_KEY =  "12ca9285c2d4a0d84153f556e98a6268";
class App extends Component {
  
  state = {
    temperature:undefined,
    city:undefined,
    country:undefined,
    humidity:undefined,
    description:undefined,
    error:undefined
  }

  getWether = async(e)=>{
    e.preventDefault();
    const city= e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
  
    try{
      if(city && country){
        this.setState({
          temperature:data.main.temp,
          city:data.name,
          country:data.sys.country,
          humidity:data.main.humidity,
          description:data.weather[0].description,
          error:""
        })
      }else{
          this.setState({
            temperature:undefined,
            city:undefined,
            country:undefined,
            humidity:undefined,
            description:undefined,
            error:"Please enter the value"
          })
      }
    }
    catch(err){
        this.setState({
            temperature:undefined,
            city:undefined,
            country:undefined,
            humidity:undefined,
            description:undefined,
            error:"City not found"
          })
    }
    
   
  }
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Title/>
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWether={this.getWether}/>
                  <Weather data={this.state}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
