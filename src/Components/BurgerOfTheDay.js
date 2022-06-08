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
        // console.log(randomNum);
        // console.log(results.data[randomNum]);
        setBotD(results.data[randomNum]);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(BotD);
  // console.log(BotD);
  if (!loading) {
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
