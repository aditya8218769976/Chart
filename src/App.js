// import React, { useState } from "react";
import React, { useState } from "react";
import "./App.css";
import BarChart from "./components/BarChart/BarChart";
import LineChart from "./components/LineChart";
import Logo from "./components/Images/Logo.svg";

function App() {
  const [show, setShow] = useState("");

  return (
    <React.Fragment>
      <nav className="nav-style">
        <div className="nav-left">
          <img src={Logo} />
          <h1>ChartApp</h1>
        </div>

        <div className="navBar">
          <span className="nav-btn">
            <button onClick={() => setShow("firstCard")}>LineChart</button>
          </span>
          <span className="nav-btn">
            <button onClick={() => setShow("secondCard")}>BarChart</button>
          </span>
        </div>
      </nav>

      {show === "firstCard" && <LineChart />}
      {show === "secondCard" && <BarChart />}
    </React.Fragment>
  );
}

export default App;
