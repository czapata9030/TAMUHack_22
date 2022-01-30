import AAlogo from "./images/American-Airlines-Logo.png";
import './userStyle.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
          // <Link to="/"> Landing </Link>
          // <Link to="/restroomQueue"> Restroom </Link>
          // <Link to="/attendant"> Attendant </Link>
          // <Link to="/menu"> Menu </Link>
function Landing() {
  
  return (
    <div className="App">
      <img src = {AAlogo} class = "logo"/>        
        <body>
          <div class="flex-container">
            <Link to="/menu">
              <button class = "big">Food Menu</button>
            </Link>
            <Link to="/restroomQueue">
              <button class = "big">Bathroom Queue</button>
            </Link>
            <Link to="/attendant">
              <button class = "big">Call an Attendant</button>
            </Link>
          </div>
        
        </body>
    </div>
  );
}

export default Landing;
