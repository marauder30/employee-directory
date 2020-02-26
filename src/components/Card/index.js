import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div
          className="card">
              <img src={props.image} alt={props.name}></img>
              Name: {props.name}
          </div>
    );
}

export default Card;