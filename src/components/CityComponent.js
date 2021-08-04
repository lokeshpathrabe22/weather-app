import React from 'react';
import styled from 'styled-components';

export const WeatherLogo=styled.img`
width:200px;
height:200px;
margin: 40px auto;
`;

const SearchBox=styled.form`
display:flex;
flex-direction:row;
color:black;
margin: 20px auto;
& input{
    padding:10px;
    font-size:14px;
    border:transparent solid 2px;
    border-radius:20px;
    font-weight:bold;
    outline:none;
}
& button{
    background:black;
    color:white;
    padding:10px;
    margin-left:5px;
    font-size:14px;
    border:transparent solid 2px;
    font-weight:bold;
    border-radius:20px;
    cursor:pointer;
    outline:none;
}
`;

const CityComponent = (props) => {
    const {updateCity,fetchWeather}=props;
    return (
        <>
            {/* <WeatherLogo src="./icons/perfect-day.svg"/> */}
            <SearchBox onSubmit={fetchWeather}>
                <input type="text" placeholder="City"
                onInput={(e)=>updateCity(e.target.value)}/>
                <button type="submit">Search</button>
            </SearchBox>
        </>
    )
}

export default CityComponent;
