import React from "react";
import "./card.styles.css";
export const Card = props => (
  <div className="card-container">
    {
      //taking monster name from card-list components through props
    }

    <img
      alt="monster"
      src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
    />
    <h2>{props.monster.name}</h2>
    <p>{props.monster.email}</p>
  </div>
);
