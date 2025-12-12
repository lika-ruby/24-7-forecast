import "./App.css";
import { GlobalStyle } from "./GlobalStyles.js";
import { WeatherProvider } from "./contexts/WeatherContext.jsx";
import { Header } from "./components/Header/Header.jsx";
import { Hero } from "./components/Hero/Hero.jsx";
import { Cities } from "./components/Cities/Cities.jsx";
import { Slider } from "./components/Slider/Slider.jsx";

export const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <WeatherProvider>
        <Header />
        <Hero />
        <Cities />
        <Slider />
      </WeatherProvider>
    </div>
  );
};

export default App;
