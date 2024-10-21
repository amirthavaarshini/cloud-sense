import React, { useState } from "react";
import "./index.css";

const Cloud = () => {

    const [search, setSearch] = useState("");
    const [weather, setWeather] = useState(null);

    const handleChange = (e) => {
        setSearch(e.target.value);

    }
    const handleClick = async () => {
        console.log(search);
        await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=bd5e378503939ddaee76f12ad7a97608&units=metric`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setWeather(data);

            })
    }



    return (
        <>
            <div className="weather-image"></div>
            <div className="weather-text">
                <div className="location-search">
                    <input value={search} onChange={handleChange} className="search-bar" placeholder="Enter a city..." />
                    <button onClick={handleClick} className="search-btn">Search</button>
                </div>
                {weather && weather.cod !== '404' &&
                    <>
                        <div>{weather.name}</div>
                        <img src="https://cdn.pixabay.com/animation/2022/09/17/16/20/16-20-08-700_512.gif" alt="weather" height={100} width={100} />
                        <div>{weather.main.temp}<sup>o</sup></div>&nbsp;
                        <div>{weather.main.temp_min}<sup>o</sup>&nbsp;{weather.main.temp_max}<sup>o</sup></div>&nbsp;
                        <div>{weather.weather[0].description}</div>
                        <div className="line"><hr></hr></div>
                    </>
                }
                {weather && weather.cod === '404' &&
                    <div>{weather.message}</div>
                }
            </div>
        </>
    )
}

export default Cloud;