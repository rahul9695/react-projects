import {
  Button,
  Col,
  Form,
  Image,
  ListGroup,
  Row,
} from "react-bootstrap";
import { CartContext } from "../context/Context";
import { useContext, useEffect, useState } from "react";
import Rating from "./Rating";
import { AiFillDelete } from "react-icons/ai";

const Cart = () => {
  const cartState = useContext(CartContext);
  const {
    state: { cart },
    dispatch,
  } = cartState;

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <div className="cartPage">
      <div className="productContainer">
        <ListGroup>
          {cart.map((product) => (
            <ListGroup.Item key={product.id}>
              <Row>
                <Col md={2}>
                  <Image src={product.image} alt={product.name} fluid rounded />
                </Col>
                <Col md={2}>
                  <span>{product.name}</span>
                </Col>
                <Col md={2}>₹ {product.price}</Col>
                <Col md={2}>
                  <Rating rating={product.rating} />
                </Col>
                <Col md={2}>
                  <Form.Select  as="select" value={product.qty} onChange={(e) => dispatch({
                    type: "CHANGE_CART_QTY",
                    payload: {
                      id: product.id,
                      qty: e.target.value
                    }
                  })}>
                    {[...Array(product.inStock).keys()].map(value => (
                      <option key={value + 1}>{value + 1}</option>
                    ))}
                  </Form.Select >
                </Col>
                <Col md={2}>
                  <Button type="button" variant="light" onClick={() => dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: product,
                  })}>
                    <AiFillDelete fontSize="20px" />
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className="filters summary">
        <span className="title">Subtotal ({cart.length}) items</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: ₹ {total}</span>
        <Button type="button" disabled={cart.length === 0}>
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;
