import React, { Fragment } from "react";

const cardStyles = {
  background: "white",
  borderRadius: "30px",
  border: "1px solid #cfcfcf",
  width: "300px",
  height: "400px",
  cursor: "pointer",
  userSelect: "none",
  position: "absolute",
  display: "flex",
  top: 0
};

const Card = ({ zIndex = 0, card }) => (
  <div
    className="flex flex-col justify-start items-center"
    style={{ ...cardStyles, zIndex }}
  >
    {card ? (
      <Fragment>
        <div className="card-title font-bold text-4xl pt-5 mb-3 border-b-2 border-gray-600">
          {card.title}
        </div>

        <div className="card-body flex flex-col justify-around self-start pl-10">
          <div className="desc font-bold ">
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
