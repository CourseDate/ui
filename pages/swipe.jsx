import React, { Component, useState } from "react";
import Swipeable from "react-swipy";
import Card from "../components/Card";
import Button from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartArrowDown,
  faTimesCircle
} from "@fortawesome/free-solid-svg-icons";

const appStyles = {
  height: "100%",
  width: "100%",
  minHeight: "100vh",
  fontFamily: "sans-serif",
  overflow: "hidden"
};

const wrapperStyles = { position: "relative", width: "300px", height: "300px" };
const actionsStyles = {
  marginTop: 12
};

const Swipe = () => {
  const [cards, setCards] = useState([
    {
      title: "EECS 211",
      desc: "More difficult than 349 tbh",
      instr: "Athipat Pipatpinyapong",
      datetime: "Thursday 3:00-3:50 PM",
      room: "Tech AUD"
    },
    {
      title: "EECS 101",
      desc: "Why does this class exist",
      instr: "Athipipatpitpat Boom",
      datetime: "Friday 3:00-3:50 PM",
      room: "Tech AUD"
    }
  ]);

  const remove = () => setCards(cards.slice(1, cards.length));

  return (
    <div className="flex justify-center items-center" style={appStyles}>
      <div style={wrapperStyles}>
        {cards.length > 0 && (
          <div style={wrapperStyles}>
            <Swipeable
              min="80"
              buttons={({ right, left }) => (
                <div className="flex justify-center" style={actionsStyles}>
                  <Button onClick={left}>
                    <FontAwesomeIcon
                      icon={faTimesCircle}
                      size="2x"
                      color="#ff836e"
                    />
                  </Button>
                  <Button onClick={right}>
                    <FontAwesomeIcon
                      icon={faCartArrowDown}
                      size="2x"
                      color="#63de9a"
                    />
                  </Button>
                </div>
              )}
              onAfterSwipe={remove}
            >
              <Card card={cards[0]} />
            </Swipeable>
            {cards.length > 1 && <Card zIndex={-1} card={cards[1]} />}
          </div>
        )}
        {cards.length <= 1 && <Card zIndex={-2}>No more cards</Card>}
      </div>
    </div>
  );
};

export default Swipe;
