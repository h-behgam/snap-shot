import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Menu() {
  const [isactive, setIsactive] = useState(null);
  const handleSelect = (eventKey) => {
    setIsactive(eventKey);
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>Snap Shot</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" activeKey={isactive} onSelect={handleSelect}>
            <Nav.Link eventKey="1" to="/" as={Link}>Home</Nav.Link>
            <Nav.Link eventKey="2" to="/search/" as={Link}>Search</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu