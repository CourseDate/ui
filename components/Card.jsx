import React, { Fragment } from "react";

const cardStyles = {
  background: "white",
  borderRadius: "30px",
  border: "1px solid #a1a1a1",
  width: "300px",
  height: "300px",
  cursor: "pointer",
  userSelect: "none",
  position: "absolute",
  display: "flex",

  top: 0
};

const Card = ({ zIndex = 0, card }) => (
  <div
    className="flex flex-col justify-around items-center"
    style={{ ...cardStyles, zIndex }}
  >
    {card ? (
      <Fragment>
        <div className="card-title">{card.title}</div>

        <div className="card-body flex flex-col justify-around">
          <div className="desc font-bold">
            Class description: <p className="font-normal">{card.desc}</p>
          </div>
          <div className="instructor font-bold">
            Instructor Name: <p className="font-normal">{card.instr}</p>
          </div>
          <div className="date font-bold">
            Days and Time: <p className="font-normal">{card.datetime}</p>
          </div>
          <div className="room font-bold">
            Room: <p className="font-normal">{card.room}</p>
          </div>
        </div>
      </Fragment>
    ) : (
      <div className="card-title">No more classes</div>
    )}
  </div>
);

export default Card;
