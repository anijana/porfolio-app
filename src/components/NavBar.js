import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
    <Navbar bg="primary" expand="lg navbar-dark" sticky='top' >
      <Container>
        <Navbar.Brand href="/" style={{color:'#fff', fontSize:'25px'}}>Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" style={{color:'#fff'}}>Intoduction</Nav.Link>
            <Nav.Link href="/projects" style={{color:'#fff'}}>Projects</Nav.Link>
            <Nav.Link href="/blogs" style={{color:'#fff'}}>Blogs</Nav.Link>
            <Nav.Link href="/feedback" style={{color:'#fff'}}>FeedBack</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavBar;