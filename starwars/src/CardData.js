import React from "react";
import styled from "styled-components";

const CardBox = styled.div`
  border: 2px solid black;
  height: 85vh;
  width: 398px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2px;
`;

const CharName = styled.h4`
  color: white;
  font-size: 20px;
  text-decoration: underline;
`;

const CharBody = styled.p`
  color: white;
  font-size: 15px;
`;
const CharHair = styled.p`
  color: white;
  font-size: 15px;
`;
const CharSkin = styled.p`
  color: white;
  font-size: 15px;
`;
const CharBirth = styled.p`
  color: white;
  font-size: 15px;
`;
const CharGender = styled.p`
  color: white;
  font-size: 15px;
`;

const CardData = props => {
  return (
    <CardBox>
      <CharName>Name: {props.data.name}</CharName>
      <CharBody>
        Height: {props.data.height}, Mass: {props.data.mass}
      </CharBody>
      <CharHair>Hair Color: {props.data.hair_color}</CharHair>
      <CharSkin>Skin Color: {props.data.skin_color}</CharSkin>
      <CharBirth>Born: {props.data.birth_year}</CharBirth>
      <CharGender>Gender: {props.data.gender}</CharGender>
    </CardBox>
  );
};

export default CardData;
