# 🌦️ Weather App (Redux Toolkit + OpenWeatherMap)

A simple weather application built with **React + Vite** using **Redux Toolkit** for state management.  
It fetches weather data asynchronously via **async/await** from the **OpenWeatherMap API**.

---

## 🚀 Features
- Uses **Redux Toolkit** with `createSlice` and `createAsyncThunk`.
- Fetches weather data (temperature, min/max, description, icon, city name).
- Displays dynamic weather icons from OpenWeatherMap.
- Clean and scalable project structure.

---

## 📦 Installation & Run

1. Clone the project
   ```bash
   git clone [repo] (https://github.com/ramamalali/weatherproject.git)
   cd weatherproject
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the app:
   ```bash
   npm run dev
   ```

---

## OR
[codesandbox](https://codesandbox.io/p/github/ramamalali/weatherproject)

---

## 🛠️ Project Structure:

```
src/ 
 ├── app/
 │    └──  store.js  
 ├── features/
 │    └── weatherApi/
 │         └── weatherApiSlice.js               
 ├── App.jsx                        
 ├──  weather.jsx                    
 ├──  weather.css                   
 └── main.jsx                      
```

## 🧑‍💻 Note: This application is a training project on Redux.
