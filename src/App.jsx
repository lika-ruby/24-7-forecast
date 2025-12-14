import "./App.css";
import { GlobalStyle } from "./GlobalStyles.js";
import { WeatherProvider } from "./contexts/WeatherContext.jsx";
import { Header } from "./components/Header/Header.jsx";
import { Hero } from "./components/Hero/Hero.jsx";
import { Cities } from "./components/Cities/Cities.jsx";
import { Slider } from "./components/Slider/Slider.jsx";
import { News } from "./components/News/News.jsx";
import { WeatherInfo } from "./components/WeatherInfo/WeatherInfo.jsx";
import { HourlyForecast } from "./components/HourlyForecast/HourlyForecast.jsx";
import { WeekForecast } from "./components/WeekForecast/WeekForecast.jsx";
export const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <WeatherProvider>
        <Header />
        <Hero />
        <Cities />
        <WeekForecast />
        <HourlyForecast />
        <WeatherInfo />
        <News />
        <Slider />
      </WeatherProvider>
    </div>
  );
};

export default App;
