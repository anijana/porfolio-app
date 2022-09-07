import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
    <Navbar bg="primary" expand="lg navbar-dark" sticky='top' >
      <Container>
        <Navbar.Brand href="/" style={{color:'#fff', fontSize:'25px'}}>Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to='/' style={{color:'#fff', textDecoration:'none', margin:'15px'}}>Intoduction</Link>
            <Link to='/projects' style={{color:'#fff',textDecoration:'none', margin:'15px'}}>Projects</Link>
            <Link to='/blogs' style={{color:'#fff',textDecoration:'none', margin:'15px'}}>Blogs</Link>
            <Link to='/feedback' style={{color:'#fff',textDecoration:'none', margin:'15px'}}>Feedback</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavBar;
