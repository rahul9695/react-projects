import {
  Badge,
  Container,
  Dropdown,
  FormControl,
  Navbar,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
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
          />
        </Navbar.Text>
        <Dropdown>
          <Dropdown.Toggle variant="success">
            <FaShoppingCart
              color="white"
              fontSize="25px"
              style={{ marginRight: "10px" }}
            />
            <Badge bg="warning" text="dark">
              {10}
            </Badge>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="/">Action</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
};

export default Header;
