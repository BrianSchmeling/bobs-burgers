import React, { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Home from "./Components/Home.js";
import Characters from "./Components/Characters";
import Episodes from "./Components/Episodes";
import BurgerOfTheDay from "./Components/BurgerOfTheDay";
import PestControlTrucks from "./Components/PestControlTrucks";
import StoreNextDoor from "./Components/StoreNextDoor";
import CharacterInfo from "./Components/CharacterInfo";

function App() {
  const apiURL = "https://bobsburgers-api.herokuapp.com/";
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    axios
      .get(apiURL + "characters", {
        headers: {
          Accept: "application/json",
        },
      })
      .then((results) => {
        setCharacters(results.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(characters.length);
  return (
    <div className="App">
      <header>
        <nav id="navList">
          <Link to="/" className="navItems" id="firstNav">
            <img src="./burger.png" atl="Burger" />
          </Link>
          <Link to="/Characters" className="navItems" id="secondNav">
            Characters
          </Link>
          <div className="dropdown">
            <div className="navItems" id="thirdNav">
              Episodes
            </div>
            <div className="dropdownContent">
              <p className="dropdownItem">Season One</p>
              <p className="dropdownItem">Season Two</p>
              <p className="dropdownItem">Season Three</p>
              <p className="dropdownItem">Season Four</p>
              <p className="dropdownItem">Season Five</p>
            </div>
          </div>
          <Link to="/BurgerOfTheDay" className="navItems" id="fourthNav">
            Burger of the Day
          </Link>
          <Link to="/PestControlTrucks" className="navItems" id="fifthNav">
            Pest Control Trucks
          </Link>
          <Link to="/StoreNextDoor" className="navItems" id="sixthNav">
            Store Next Door
          </Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Characters"
            element={<Characters characters={characters} />}
          />
          <Route
            path={"Characters/:id"}
            element={<CharacterInfo characters={characters} />}
          />
          <Route path="/Episodes" element={<Episodes />} />
          <Route path="/BurgerOfTheDay" element={<BurgerOfTheDay />} />
          <Route
            path="/PestControlTrucks"
            element={<PestControlTrucks apiURL={apiURL} />}
          />
          <Route path="/StoreNextDoor" element={<StoreNextDoor />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
