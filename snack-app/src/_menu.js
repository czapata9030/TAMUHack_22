import AAlogo from "./images/American-Airlines-Logo.png";
import Pretz from "./images/Mini_Pretzels.jpg"
import Peanuts from "./images/peanuts.jpg"
import Sprite from "./images/Sprite.jpg"
import Water from "./images/Water.jpg"
import Coke from "./images/Coke.jpg"
import CanDry from "./images/Canada_Dry.jpg"

import './menustyle.css';

function Menu() {
  return (
    <div className="App">
      <body>
        <nav class="navbar">
        <div class="logo">
            <img src={AAlogo} alt="American Airlines" class="logo"/>
        </div>
        <div class="navbar__container">
            <div class="navbar__toggle" id="mobile-menu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
            <ul class="navbar__menu">
                <li class="navbar__btn">
                    <a href="/index.html" class="button"> HOME </a></li>
            </ul>
        </div>
    </nav>

    <div class="container">
        <div class="menu">
            <h2 class="menu-group-heading">
                Snacks
            </h2>
            <div class="menu-group">
                <div class="menu-item">
                    <img src={Pretz} alt="Mini Pretzels" class="menu-item-image"/>
                    <div class="menu-item-text">
                        <h3 class="menu-item-heading">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                                Mini Pretzels
                            </label>
                        </h3>
                    </div>

                    <img src={Peanuts} alt="Peanuts" class="menu-item-image"/>
                    <div class="menu-item-text">
                        <h3 class="menu-item-heading">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                                Peanuts
                            </label>
                        </h3>
                    </div>
                </div>
            </div>

            <h2 class="menu-group-heading">
                Beverages
            </h2>
            <div class="menu-group">
                <div class="menu-item">
                    <img src={Coke} alt="Coke" class="menu-item-image"/>
                    <div class="menu-item-text">
                        <h3 class="menu-item-heading">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                                Coke
                            </label>
                        </h3>
                    </div>

                    <img src={Sprite} alt="Sprite" class="menu-item-image"/>
                    <div class="menu-item-text">
                        <h3 class="menu-item-heading">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                                Sprite
                            </label>
                        </h3>
                    </div>
                    
                    <img src={CanDry} alt="Ginger Ale" class="menu-item-image"/>
                    <div class="menu-item-text">
                        <h3 class="menu-item-heading">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                                Ginger Ale
                            </label>
                        </h3>
                    </div>
                    <img src={Water} alt="Water" class="menu-item-image"/>
                    <div class="menu-item-text">
                        <h3 class="menu-item-heading">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                                Water
                            </label>
                        </h3>
                    </div>
                </div>
            </div>

        </div>
    </div>




</body>
    </div>
  );
}

export default Menu;
