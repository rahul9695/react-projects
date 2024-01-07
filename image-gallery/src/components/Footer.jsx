import { Navbar, Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <>
      <Navbar expand="lg" variant="light" bg="light" fixed="bottom">
        <Container>
          <Navbar.Brand>Made with ❤️ by Rahul Meena!</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Footer;