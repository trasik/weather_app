import React, { useState, useEffect } from "react";
import Searchbar from "./Searchbar";
import axios from 'axios';
import WeatherWidget from "./WeatherWidget";


export default function Weather() {
    const [weather, setWeather] = useState([]);

    async function fetchData(event) {
        if(event.key === "Enter") {
            const city = event.target.value;
            event.preventDefault();
            const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`;
            try {
                const data = await axios.get(API_URL);
                setWeather({weather: data.data});
            } catch (error) {
                console.error(error);
            }
        }
    }

    useEffect(() => {
        console.log({weather})
    }, [weather])

    return (
        <div>
            <Searchbar getWeather={fetchData}/>
            {(Object.keys(weather).length !== 0) ? (
                <WeatherWidget 
                city={weather.weather.name} 
                country={weather.weather.sys.country} 
                main={weather.weather.main}
                image_icon={weather.weather.weather[0].icon}
                weather_details={weather.weather.weather[0]}
                />
            ): (
                <div></div>
            )}
        </div>
    );
}