import React, { useState, useEffect } from "react";
import { Link, Route, Routes, Navigate } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Characters from "./Components/Characters";
import Episodes from "./Components/Episodes";
import BurgerOfTheDay from "./Components/BurgerOfTheDay";
import PestControlTrucks from "./Components/PestControlTrucks";
import StoreNextDoor from "./Components/StoreNextDoor";
import CharacterInfo from "./Components/CharacterInfo";
import EpisodeInfo from "./Components/EpisodeInfo";
import Home from "./Components/Home";
import data from "./data/data.json";

function App() {
  const apiURL = "https://bobsburgers-api.herokuapp.com/";
  const [characters, setCharacters] = useState([]);
  const [episodes, setEpisodes] = useState([]);
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
  useEffect(() => {
    axios
      .get(apiURL + "episodes", {
        headers: {
          Accept: "application/json",
        },
      })
      .then((results) => {
        setEpisodes(results.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const key = "season";

  const uniqueSeason = [
    ...new Map(episodes.map((item) => [item[key], item])).values(),
  ];

  const dropdownMaker = uniqueSeason.map((season) => {
    return (
      <p className="dropdownItem" key={season.season}>
        <Link to={"/EpisodeInfo/" + season.season} className="dropdownLink">
          Season {season.season}
        </Link>
      </p>
    );
  });

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
            <div className="dropdownContent">{dropdownMaker}</div>
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
          {/* <Route path="/Episodes" element={<Episodes />} /> */}
          <Route
            path="/BurgerOfTheDay"
            element={<BurgerOfTheDay apiURL={apiURL} />}
          />
          <Route
            path="/PestControlTrucks"
            element={<PestControlTrucks apiURL={apiURL} />}
          />
          <Route
            path="/StoreNextDoor"
            element={<StoreNextDoor apiURL={apiURL} />}
          />
          <Route
            path="/EpisodeInfo/:season"
            element={
              <EpisodeInfo episodes={episodes} data={data} apiURL={apiURL} />
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
