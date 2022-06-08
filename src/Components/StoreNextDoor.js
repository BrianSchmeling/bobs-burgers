import { useState, useEffect } from "react";
import axios from "axios";
import "./StoreNextDoor.css";

const StoreNextDoor = (props) => {
  const [stores, setStores] = useState([]);
  const [newStores, setNewStores] = useState([]);
  useEffect(() => {
    axios
      .get(props.apiURL + "storeNextDoor", {
        headers: {
          Accept: "application/json",
        },
      })
      .then((results) => {
        results.data.map((datum) => {
          let newItem = datum.image;
          setStores((oldArray) => [...oldArray, newItem]);
          let num = Math.random();
          if (num < 0.1) {
            setNewStores((oldArray) => [...oldArray, newItem]);
          }
        }, []);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const images = newStores.map((newStore, index) => {
    return (
      <div className="storeBox" key={index}>
        <img className="storeImg" src={newStore} />
      </div>
    );
  });
  return <div className="storeContainer">{images}</div>;
};

export default StoreNextDoor;
