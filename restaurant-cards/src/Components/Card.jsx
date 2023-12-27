/* eslint-disable react/prop-types */
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card_wrapper">
      <div className="card_top_half">
        <div className="heading_wrapper">
          <h2>{props.name}</h2>
          <p>{props.rating} ⭐⭐⭐⭐⭐</p>
        </div>
        <div className="address_wrapper">
          <i className="fa-solid fa-location-dot fa-sm  "></i>
          <p>{props.address}</p>
        </div>
        <p className="restaurant_code">{props.outcode} {props.postcode}</p>
      </div>
      <div className="card_bottom_half">
        <div className="type_wrapper">
          <i className="fa-solid fa-utensils fa-lg"></i>
          <h4>{props.type_of_food}</h4>
        </div>
        <a href="">Visit Menu</a>
      </div>
    </div>
  );
};

export default Card;
