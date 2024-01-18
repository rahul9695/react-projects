/* eslint-disable react/prop-types */

import { Button, Card } from "react-bootstrap";
import Rating from "./Rating";
import { CartContext } from "../context/Context";
import { useContext } from "react";

const SingleProduct = ({ product }) => {

  const cartState = useContext(CartContext);
  // console.log(cartState);     
  const {
    state: { cart },
    dispatch,
  } = cartState;
  
  // console.log(cart);

  return (
    <div className="singleProduct">
      <Card>
        <Card.Img variant="top" src={product.image} alt={product.name} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>₹ {product.price.split(".")[0]}</span>
            {product.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>Normal Delivery - 4 Days approx</div>
            )}
            <Rating rating={product.rating} />
          </Card.Subtitle>
          <div className="btnWrapper">
            {cart.some((p) => p.id === product.id) ? (
              <Button
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: product,
                  })
                }
                variant="danger"
              >
                Remove from Cart
              </Button>
            ) : (
              <Button
                onClick={() =>
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: product,
                  })
                }
                disabled={!product.inStock}
                variant={!product.inStock ? "danger" : "primary"}
              >
                {product.inStock ? "Add to Cart" : "Out of Stock"}
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
