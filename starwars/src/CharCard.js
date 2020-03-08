import React, { useState, useEffect } from "react";
import axios from "axios";

function CharCard() {
  const [swapi, setSwapi] = useState([]);
  console.log(swapi);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people")
      .then(response => {
        setSwapi(response.data);
        console.log(response.data);
      })
      .catch(error => console.log("There was an error: ", error));
  }, []);

  return (
    <div className="main-container">
      <h1 className="title">Star Wars Title</h1>
    </div>
  );
}

export default CharCard;
