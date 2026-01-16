import Weather from "./Weather";
import "./App.css";
import { useEffect, useState } from "react";
import moment from "moment";
import { fetchWeather } from "./features/weatherApi/weatherApiSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weather.weather);

  const [dateAndTime, setDateAndTime] = useState("");

  useEffect(() => {
    dispatch(fetchWeather());
    setDateAndTime(moment().format("LLLL"));
  }, [dispatch]);

  return (
    <>
      <Weather
        temp={weatherData.temp}
        tempmin={weatherData.temp_min}
        tempmax={weatherData.temp_max}
        name={weatherData.name}
        desc={weatherData.description}
        img={weatherData.icon}
        date={dateAndTime}
      />
    </>
  );
}

export default App;
