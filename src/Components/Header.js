import React, {Component} from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Header extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">COVID 19</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Link to="/india" className="nav-link">India</Link>
      <Link to="/world" className="nav-link">World</Link>
      
    </Nav>
   </Navbar.Collapse>
  </Container>
</Navbar>
        )
    }
}
export default Header;
