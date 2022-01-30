import AAlogo from "./images/American-Airlines-Logo.png";
import './userStyle.css';

function Attendant() {
  return (
    <div className="App">
      <body class="flex-container">
      <img src = {AAlogo} class = "logo"/>

        <div class="row-container">
        <a href="ontheway">
            <button class= "option">Pillow</button>
        </a>
        <a href="ontheway">
            <button class= "option">Blanket</button>
        </a>
        </div>

        <div class="row-container">
        <a href="ontheway">
            <button class = "option">Headphones</button>
        </a>
        <a href="ontheway">
            <button class = "option">Question</button>
        </a>
        </div>
        <a href="/">
            <button class = "big">Return to Main Menu</button>
        </a>

      </body>
    </div>
  );
}

export default Attendant;
