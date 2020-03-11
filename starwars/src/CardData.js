import React from "react";
import styled from "styled-components";

const CardBox = styled.div`
  border: 2px solid black;
  height: auto;
  width: auto;
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
  color: ${props => (props.primary ? "white" : "palevioletred")};
  font-size: 18px;
`;
const CharHair = styled.p`
  color: ${props => (props.primary ? "white" : "palevioletred")};
  font-size: 18px;
`;
const CharSkin = styled.p`
  color: ${props => (props.primary ? "white" : "palevioletred")};
  font-size: 18px;
`;
const CharBirth = styled.p`
  color: ${props => (props.primary ? "white" : "palevioletred")};
  font-size: 18px;
`;
const CharGender = styled.p`
  color: ${props => (props.primary ? "white" : "palevioletred")};
  font-size: 18px;
`;

const CardData = props => {
  return (
    <CardBox>
      <div className="Header">
        <CharName>Name: {props.data.name}</CharName>
      </div>
      <section className="Char-info">
        <CharBody>
          Height: {props.data.height}, Mass: {props.data.mass}
        </CharBody>
        <CharHair>Hair Color: {props.data.hair_color}</CharHair>
        <CharSkin>Skin Color: {props.data.skin_color}</CharSkin>
        <CharBirth>Born: {props.data.birth_year}</CharBirth>
        <CharGender>Gender: {props.data.gender}</CharGender>
      </section>
    </CardBox>
  );
};

export default CardData;
