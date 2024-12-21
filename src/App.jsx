import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CoinTable from "./components/CoinTable/CoinTable";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import { CurrencyContext } from "./context/CurrencyContext";
import Home from "./pages/Home";

function App() {
  const [currency, setCurrency] = useState("usd");

  return (
    <>
      <CurrencyContext.Provider value={{ currency, setCurrency }}>
        <Home />
      </CurrencyContext.Provider>
    </>
  );
}

export default App;
