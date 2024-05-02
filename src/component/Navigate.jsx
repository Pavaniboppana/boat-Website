import React from 'react';
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingBag, faSearch } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

function Navigate() {

  return (
    <>
      <p className='high'>March Into Savings with our top picks of the month.🙌<b>Shop Now</b></p>
      <Navbar expand="lg" className="bg-body-tertiary"style={{ fontSize: "13.9px" }}>
        <Container>
          <Navbar.Brand href="/">
            <img src="https://www.boat-lifestyle.com/cdn/shop/files/boAt_logo_small_3067da8c-a83b-46dd-b28b-6ef1e16ccd17_small.svg?v=1693549434" style={{ height: "30px", width: "150px" }} alt="" />
          </Navbar.Brand><Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item><NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item></NavDropdown><Nav.Link href="/Boat">boAt Personalisation</Nav.Link>
              <Nav.Link href="/Gift">Gift with boAt</Nav.Link>
              <Nav.Link href="/Corporate">Corporate Orders</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Daily Deals</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Do What FloAts Your boAt</NavDropdown.Item><NavDropdown.Item href="#action/3.3">Blogs</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Refer & Earn</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">Careers</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6">Social Responsibility</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.7">Store Locator</NavDropdown.Item>
              </NavDropdown>
              <div style={{ display: "flex", alignItems:"center", color: "white", border: "1px solid lightgray", borderRadius: "20px", padding: "10px 20px", height: "40px" }}>
                <FontAwesomeIcon icon={faSearch} style={{ marginLeft: "5px", fontSize: "15px", color: "black" }} />
                <input type="text" style={{outline:"none", marginLeft: "5px", border: "none", padding: "5px" }} /></div>
                
                <FontAwesomeIcon icon={faUser} style={{ marginLeft: "20px", fontSize: "20px", border: "1px", padding: "5px" }} />
        
                <FontAwesomeIcon icon={faShoppingBag} style={{marginLeft: "10px", fontSize: "20px", border: "1px", padding: "5px" }} />
                <Nav.Link href="/Login"><Button variant="dark" style={{width:"45px",height:"25px",fontSize:"10px",fontWeight:"700",textAlign:"center",padding: "5px"}}>SignUp</Button></Nav.Link>
         </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    </>
  )
}

export default Navigate;
