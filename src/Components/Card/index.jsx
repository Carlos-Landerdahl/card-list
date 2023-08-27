import React from 'react';
import "./styles.css"


export function Card({ name, color }) {
  return (
    <div className="cards">
      <div style={{ backgroundColor: color }} className="cardItem">
        <p className="name">{name}</p>
        <p className="color">{color}</p>
      </div>
    </div>
  );
}
