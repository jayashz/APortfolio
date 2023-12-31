import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div className="card">
        <img src={props.img} alt="Just an emoji" />
        <span>{props.heading}</span>
        <span>{props.detail}</span>
        <button className="card-button">LEARN MORE</button>
    </div>
  )
}

export default Card