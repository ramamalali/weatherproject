import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWeather = createAsyncThunk(
  "weatherApi/fetchWeather",
  async () => {
    const response = await axios.get(
     `https://api.openweathermap.org/data/2.5/weather?lat=24.76&lon=46.56&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`
    );

    const data = {
      temp: Math.round(response.data.main.temp),
      temp_min: Math.round(response.data.main.temp_min),
      temp_max: Math.round(response.data.main.temp_max),
      description: response.data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      name: response.data.name,
    };

    return data;
  }
);

const weatherApiSlice = createSlice({
  name: "weatherApi",
  initialState: {
    result: "empty",
    weather: {},
    status: "idle",
  },
  reducers: {
    changeResult: (state) => {
      state.result = "changed";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.weather = action.payload;
      })
      .addCase(fetchWeather.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { changeResult } = weatherApiSlice.actions;
export default weatherApiSlice.reducer;
