import React from "react";
import "./Searchbar.css";

export default function Searchbar() {
  return (
    <div className="SearchBar">
      <input
        type="search"
        placeholder="enter a city..."
        className="search-bar"
      />
      <button type="search" className="search-button">
        Search
      </button>
    </div>
  );
}
