import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import PropTypes from 'prop-types';
import './header.css'
import {Link } from "react-router-dom";




export default function Header(props){
  return (
    <Navbar bg="dark" expand="lg">
      <Container fluid>
        
        <Navbar.Brand as = {Link} className="text-light" to="/" >{props.Title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/" className="text-light" onClick={()=>{window.location.href="/"}}>Home</Nav.Link>
           
            <Nav.Link as={Link} to="/about" className="text-light" onClick={()=>{window.location.href="/about"}}>About</Nav.Link>
           
           
           
          </Nav>
         { props.searchBar ? <Form className="d-flex"> 
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>:""}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

Header.defaultProps = {
  Title: "Your Title Here",
  //searchBar : true
}

Header.propTypes ={
   Title : PropTypes.string,
   searchBar : PropTypes.bool.isRequired
}

