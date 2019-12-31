import React from "react";
import { Card } from "../card/card.component";
import "./card-list.styles.css";
//here in props varible we are getting properties of component from app.js
export const CardList = props => (
  <div className="card-list">
    {//this map fucntion return everything that is applied over the state properties monsters
    props.monsters.map(monster => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
);
