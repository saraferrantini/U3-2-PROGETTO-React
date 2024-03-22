//import
import logo from "../assets/logo-meteo.png";
import { Navbar, Container, Nav, Form, FormControl, Button } from "react-bootstrap";
//Componente a funzione
const MyNavbar = function () {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" style={{ backgroundColor: "transparent" }}>
      <Container fluid>
        <img src={logo} alt="" width="150" height="auto" className="d-inline-block align-top" />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Form className="d-flex">
              <FormControl type="search" placeholder="Search" className="mr-2" aria-label="Search" />
              <Button variant="outline-light">Search</Button>
            </Form>
            <Nav.Link href="#menu" style={{ color: "white" }}>
              Home
            </Nav.Link>
            <Nav.Link href="#booking" style={{ color: "white" }}>
              Sezioni
            </Nav.Link>
            <Nav.Link href="#contacts" style={{ color: "white" }}>
              Radar
            </Nav.Link>
            <Nav.Link href="#about" style={{ color: "white" }}>
              Mappe
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
