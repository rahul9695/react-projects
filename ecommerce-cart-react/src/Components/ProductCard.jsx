/* eslint-disable react/prop-types */
import "../App.css";
import { useState } from "react";

const ProductCard = (props) => {
  let [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
    const currprice = Number(props.productObj.price);
    props.updateCartFn("INCREASE");
    props.updateTotalPrice("INCREASE", currprice);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      const currprice = Number(props.productObj.price);
      props.updateCartFn("DECREASE");
      props.updateTotalPrice("DECREASE", currprice);
    }
  };

  return (
    <div className="card_wrapper">
      <div className="left_container">
        <div className="img_container">
          <img src={props.productObj.img} alt="product_img" />
        </div>
        <div className="product_card_text">
          <h5>{props.productObj.title}</h5>
          <p>${props.productObj.price}</p>
          <button onClick={()=>props.removeCard(props.productObj.id, quantity)}>remove</button>
        </div>
      </div>
      <div className="right_container_counter">
        <button onClick={decrementQuantity}>
          <i className="fa-solid fa-angle-left fa-lg"></i>
        </button>
        <span>{quantity}</span>
        <button onClick={incrementQuantity}>
          <i className="fa-solid fa-angle-right fa-lg"></i>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
