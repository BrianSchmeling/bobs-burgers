import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./BurgerOfTheDay.css";

const BurgerOfTheDay = ({ apiURL }) => {
  const [BotD, setBotD] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(apiURL + "burgerOfTheDay", {
        headers: {
          Accept: "application/json",
        },
      })
      .then((results) => {
        const randomNum = Math.floor(Math.random() * results.data.length);
        // selects a random oberject from the array to import the data from
        setBotD(results.data[randomNum]);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  if (!loading) {
    // Waits until the API finishes loading before rendering the page
    return (
      <div className="BotDContainer">
        <div className="BotD">
          {/* <p>hello</p> */}
          <p>{BotD.name}</p>
          <p>{BotD.price}</p>
        </div>
      </div>
    );
  }
};

export default BurgerOfTheDay;
