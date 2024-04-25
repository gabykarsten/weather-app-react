import React from "react";
import logo from "./logo.svg";
import Searchbar from "./Searchbar";
import Overview from "./Overview";
import Weekly from "./Weekly";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Searchbar />
      <Overview />
      <Weekly />
      <Footer />
    </div>
  );
}

export default App;
