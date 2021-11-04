import React, { useState } from "react";
import Searchbar from "./Searchbar";
import axios from 'axios';


export default function Weather() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState([]);

    const getWeather = async (event) => {
        if(event.key === "Enter") {
            const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`;
            try {
                const data = await axios.get(API_URL);
                setWeather({weather: data.data});
            } catch (error) {
                console.error(error);
            }
            console.log(weather);
        }
    }

    return (
        <Searchbar city={(e) => {setCity(e.target.value)}} weather={getWeather} />
    );
}