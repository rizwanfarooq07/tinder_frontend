import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import axios from "../api/Api";
import "./TinderCards.css";

const TinderCards = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("/tinder/cards");
        setPeople(data);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);

  const swipped = (direction, nameToDelete) => {
    console.log(`Removing: ${nameToDelete}`);
  };

  const outOfFrame = (name) => {
    console.log(`${name} left the screen`);
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swipped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.imgUrl})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
