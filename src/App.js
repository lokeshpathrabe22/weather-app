import React from 'react';
import "./App.css";
import styled from 'styled-components';
import CityComponent from './components/CityComponent';
import WeatherComponent from './components/WeatherInfoComponent';
import { useState } from 'react';
import axios from 'axios';
import { WeatherLogo } from './components/CityComponent';
import Footer from './components/Footer';


const Container=styled.div`
display:flex;
flex-direction: column;
margin:auto;
align-items:center;
box-shadow:0 3px 6px 0 #555;
padding: 20px 10px;
border-radius: 5px;
width:20rem;
background: linear-gradient(rgb(190, 56, 179), rgb(70, 193, 209));
font-family: "Courgette",cursive;
`;

const AppLabel=styled.span`
color:black;
font-size:18px;
font-weight:bold;
`;

function App() {
  const [city,updateCity]=useState();
  const [weather, updateWeather] = useState();

  const fetchWeather= async (e)=>{
    e.preventDefault();
    const res= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=Enter_your_api_key_here`,
    );
    updateWeather(res.data);
  };

  return (
    <Container>
      <AppLabel>Weather App</AppLabel>
      <CityComponent updateCity={updateCity} fetchWeather={fetchWeather}/>
      {(weather)?
        (<WeatherComponent weather={weather} city={city}/>):
        (<WeatherLogo src="./icons/weather.png"/>)
      }
      <Footer/>
    </Container>
  );
}

export default App;
