import "./App.css";
import { GlobalStyle } from "./GlobalStyles.js";
import { WeatherProvider } from "./contexts/WeatherContext.jsx";
import { UsersProvider } from "./contexts/UsersContext.jsx";
import { Header } from "./components/Header/Header.jsx";
import { Hero } from "./components/Hero/Hero.jsx";
import { Cities } from "./components/Cities/Cities.jsx";
import { Slider } from "./components/Slider/Slider.jsx";
import { News } from "./components/News/News.jsx";
import { WeatherInfo } from "./components/WeatherInfo/WeatherInfo.jsx";
import { HourlyForecast } from "./components/HourlyForecast/HourlyForecast.jsx";
import { WeekForecast } from "./components/WeekForecast/WeekForecast.jsx";
import { SignIn } from "./components/SignIn/SignIn.jsx";
import { LogIn } from "./components/LogIn/LogIn.jsx";

export const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <WeatherProvider>
        <UsersProvider>
          <Header />
          <Hero />
          <Cities />
          <WeekForecast />
          <HourlyForecast />
          <WeatherInfo />
          <News />
          <Slider />
          <SignIn />
          <LogIn />
        </UsersProvider>
      </WeatherProvider>
    </div>
  );
};

export default App;
