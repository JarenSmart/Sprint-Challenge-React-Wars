import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import CardData from "./CardData";

const Container = styled.div`
  height: 200vh;
  width: 50vw;
  margin: 25px auto;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.6);
`;

function CharCard() {
  const [swapi, setSwapi] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://swapi.co/api/people")
        .then(response => {
          setSwapi(response.data.results);
          console.log(response.data);
        })
        .catch(error => console.log("There was an error: ", error));
    };
    fetchData();
  }, []);

  return (
    <Container>
      {swapi.map((data, index) => (
        <CardData data={data} key={index} />
      ))}
    </Container>
  );
}

export default CharCard;
