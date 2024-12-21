import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CoinTable from "./components/CoinTable/CoinTable";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";

function App() {
  const [currency, setCurrency] = useState("usd");

  return (
    <>
      {currency}
      <Navbar setCurrency={setCurrency} />
      <Banner />
      <CoinTable currency={currency} />
    </>
  );
}

export default App;
