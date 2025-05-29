import { contactsContext } from "../../../../App";
import { useState, useContext } from "react";
import './Tile.css'

export default function Tile({name, description}) {

  return (
    <div className="tile-container">
      <p className="tile-title tile">
        {name}
      </p>
      {Object.values(description).map((value, index) => (
        <p key={index} className="tile">
          {value}
        </p>
      ))}
    </div>
  );
};

