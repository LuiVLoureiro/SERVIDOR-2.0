import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" style={{backgroundColor: 'black'}} variant="dark">
      <Container>
        <Navbar.Brand style={{color: '#00ff00'}} href="#home">SPL</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={{color: '#00ff00'}} href="#features"> ARQUIVOS </Nav.Link>
            <Nav.Link style={{color: '#00ff00'}} href="#pricing"> TAREFAS </Nav.Link>
            <NavDropdown style={{color: '#00ff00'}} id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link style={{color: '#00ff00'}} href="#deets">More deets</Nav.Link>
            <Nav.Link style={{color: '#00ff00'}} eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;