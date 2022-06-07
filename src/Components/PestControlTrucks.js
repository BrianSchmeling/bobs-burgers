import { useState, useEffect } from "react";
import axios from "axios";

const PestControlTrucks = (props) => {
  const [trucks, setTrucks] = useState([]);
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
        }, []);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const truckTable = trucks.forEach((truck) => {
    let num = Math.random();
    console.log(num);
    if (num > 0.5) {
      let truckNum = Math.floor(Math.random() * 225 + 1);
      return (
        <div>
          <img src={truck} />
        </div>
      );
    }
  });
  console.log(trucks);
  return <div>{truckTable}</div>;
};

export default PestControlTrucks;
