import React from "react";
import "./Weekly.css";

export default function Weekly() {
  return (
    <div className="weekly-forecast">
      <span className="daily">
        <h4 className="day">Thu</h4>
        <h4 className="icon">&#x2601;</h4>
        <h4 className="temp">14&deg;C</h4>
      </span>
      <span className="daily">
        <h4 className="day">Fri</h4>
        <h4 className="icon">&#x2601;</h4>
        <h4 className="temp">14&deg;C</h4>
      </span>
      <span className="daily">
        <h4 className="day">Sat</h4>
        <h4 className="icon">&#x2601;</h4>
        <h4 className="temp">14&deg;C</h4>
      </span>
      <span className="daily">
        <h4 className="day">Sun</h4>
        <h4 className="icon">&#x2601;</h4>
        <h4 className="temp">14&deg;C</h4>
      </span>
      <span className="daily">
        <h4 className="day">Mon</h4>
        <h4 className="icon">&#x2601;</h4>
        <h4 className="temp">14&deg;C</h4>
      </span>
    </div>
  );
}
