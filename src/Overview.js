import React from "react";

import "./Overview.css";

export default function Overview() {
  return (
    <div className="CurrentCity">
      <span className="left">
        <h2>Vancouver</h2>
        <p>
          <br />
          Wednesday 15 : 00
          <br />
          light rain
        </p>
      </span>
      <span className="temperature">
        <h1 className="icon">&#127783;</h1>
        <h1 className="temperature-celcius">10&deg;C</h1>
      </span>
    </div>
  );
}
