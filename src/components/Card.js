import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <>
      <div
        class="card"
        style={{ backgroundImage: `url(${props.imgUrl})` }}
      ></div>
    </>
  );
};

export default Card;
