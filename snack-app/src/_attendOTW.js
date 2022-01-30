import './App.css';
import AAlogo from "./images/American-Airlines-Logo.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function AttendOTW() {
  return (
    <div className="App">
      <body>
        <img src = {AAlogo} className= "logo"/>
        <h1>An Attendant is on the way!</h1>

        <a href="/">
            <button class = "big">Return to Main Menu</button>
        </a>
      </body>
    </div>
  );
}

export default AttendOTW;
