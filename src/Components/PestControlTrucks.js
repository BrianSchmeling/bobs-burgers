import { useState, useEffect } from "react";
import axios from "axios";
import "./PestControlTrucks.css";

const PestControlTrucks = (props) => {
  const [trucks, setTrucks] = useState([]);
  const [newTrucks, setNewTrucks] = useState([]);
  useEffect(() => {
    axios
      .get(props.apiURL + "pestControlTruck", {
        headers: {
          Accept: "application/json",
        },
      })
      .then((results) => {
        results.data.map((datum) => {
          let newItem = datum.image;
          setTrucks((oldArray) => [...oldArray, newItem]);
          let num = Math.random();
          if (num < 0.1 && newTrucks.length < 16) {
            setNewTrucks((oldArray) => [...oldArray, newItem]);
          }
        }, []);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const images = newTrucks.map((newTruck, index) => {
    return (
      <div className="truckBox" key={index}>
        <img className="truckImg" src={newTruck} />
      </div>
    );
  });
  return <div className="truckContainer">{images}</div>;
};

export default PestControlTrucks;
