import { useRef } from 'react';
import {Navbar, Container, Nav, Form, FormControl, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  // console.log("Hello");
  const inputRef = useRef();
  const navigate = useNavigate();

  const formSubmitted = e => {
    e.preventDefault();
    navigate(`/search?q=${inputRef.current.value}`);
  }
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand ><Link to="/" style={{textDecoration: "none", color: "black", fontSize: "2rem", fontWeight: "600"}}>Unsplash Gallery</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
            </Nav>
            <Form className="d-flex" onSubmit={formSubmitted}>
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2 w-full"
                aria-label="Search"
                ref={inputRef}
              />
              <Button variant="outline-danger">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header;