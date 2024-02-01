import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const MyNavbar = function () {
  return (
    <Container fluid className="mb-2 nav-style ">
      <Navbar collapseOnSelect expand="md">
        <Navbar.Brand href="#" className="fw-bold ms-5 fs-3 text-dark">
          {/* <i className="bi bi-book me-2"></i> */}
          Epic-Book Shop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav " />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-4 fs-5 ms-auto">
            <Nav.Link href="#" className="fw-bold me-3 text-dark ">
              Home
            </Nav.Link>
            <Nav.Link href="#" className="me-3 text-dark">
              About
            </Nav.Link>
            {/* {''} */}
            <Nav.Link href="#" className="me-4 text-dark">
              Browse
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default MyNavbar;
