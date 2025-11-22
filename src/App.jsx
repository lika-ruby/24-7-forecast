import "./App.css";
import { GlobalStyle } from "./GlobalStyles.js";
import { Header } from "./components/Header/Header.jsx";
import { Hero } from "./components/Hero/Hero.jsx";
import { Cities } from "./components/Cities/Cities.jsx";

export const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Hero />
      <Cities />
    </div>
  );
};

export default App;
