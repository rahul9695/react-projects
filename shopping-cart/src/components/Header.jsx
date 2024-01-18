import {
  Badge,
  Button,
  Container,
  Dropdown,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../context/Context";
import { AiFillDelete } from "react-icons/ai";

const Header = () => {
  const cartState = useContext(CartContext);
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = cartState;

  return (
    <Navbar bg="dark" variant="dark" style={{ height: 60 }}>
      <Container>
        <Navbar.Brand>
          <Link className="heading" to="/">
            Shopping Cart
          </Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: 500 }}
            placeholder="Search Yoga Mate, Samsung mobiles, Honda Bikes etc.."
            className="m-auto"
            onChange={(e) => productDispatch({
              type: "FILTER_BY_SEARCH",
              payload: e.target.value,
            })}
          />
        </Navbar.Text>
        <Nav>
          <Dropdown align="end">
            <Dropdown.Toggle variant="success">
              <FaShoppingCart
                color="white"
                fontSize="25px"
                style={{ marginRight: "10px" }}
              />
              <Badge bg="warning" text="dark">
                {cart.length}
              </Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ minWidth: "350px", paddingInline: "10px" }}>
              {cart.length > 0 ? (
                <>
                  {cart.map((product) => (
                    <span key={product.id} className="cartitem">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="cartItemImg"
                      />
                      <div className="cartItemDetail">
                        <span>{product.name}</span>
                        <span>₹ {product.price.split(".")[0]}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: product,
                          })
                        }
                      />
                    </span>
                  ))}
                  <Link to="/cart">
                    <Button style={{width: "95%", margin: "0 10px"}}>
                      Go to Cart
                    </Button>
                  </Link>
                </>
              ) : (
                <Dropdown.Item href="/">No Items in the Cart!!</Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
