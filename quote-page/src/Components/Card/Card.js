import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className="card-wrapper">
        <h5>{props.review}</h5>
        <p>{props.userName}</p>
    </div>
  )
}

export default Card;