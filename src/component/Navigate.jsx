import React from 'react';
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingBag, faSearch } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Navigate() {
  return (
    <>
      <p className='high'>March Into Savings with our top picks of the month.🙌<b>Shop Now</b></p>
      <Navbar expand="lg" className="bg-body-tertiary"style={{ fontSize: "15px" }}>
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
                <input type="text" style={{ outline:"none", marginLeft: "5px", border: "none", padding: "5px" }} /></div>
                <FontAwesomeIcon icon={faUser} style={{ marginLeft: "20px", fontSize: "20px", border: "1px", padding: "5px" }} />
                <FontAwesomeIcon icon={faShoppingBag} style={{ marginLeft: "20px", fontSize: "20px", border: "1px", padding: "5px" }} />
         </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>









    {/* <Navbar expand="lg" className="bg-white">
        <Container>
          <Navbar.Brand href="/"> 
            <img src="https://www.boat-lifestyle.com/cdn/shop/files/boAt_logo_small_3067da8c-a83b-46dd-b28b-6ef1e16ccd17_small.svg?v=1693549434" style={{ height: "30px", width: "150px" }} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" style={{ marginLeft: "auto" }}>
             <NavDropdown title="Categories" id="basic-nav-dropdown">
                <NavDropdown title="Categories" id="basic-nav-dropdown">
                  <div className="cat" style={{ display: "inline" }}>style={{ display: "flex", justifyContent: "space-between", minWidth: '600px' }}
                    <NavDropdown.Item href="#action/3.1" style={{ fontSize: '16px', padding: '10px 20px' }}><img src="https://www.boat-lifestyle.com/cdn/shop/collections/dropdown-TWS_100x.png?v=1684827062" alt="" />True Wireless Earbuds</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2" style={{ fontSize: '16px', padding: '10px 20px' }}><img src="https://www.boat-lifestyle.com/cdn/shop/collections/box-5_100x.png?v=1684827751" alt="" />Wireless Speakers</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3" style={{ fontSize: '16px', padding: '10px 20px' }}><img src="https://www.boat-lifestyle.com/cdn/shop/collections/sound_bar_4f111a6a-2482-41c8-87f2-db7e0ee19e69_1_100x.webp?v=1684827961" alt="" />Party Speakers</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4" style={{ fontSize: '16px', padding: '10px 20px' }}><img src="https://www.boat-lifestyle.com/cdn/shop/collections/Car-accessories_07e4e533-2b59-4597-aa3f-110552541f0f_100x.png?v=1684828103" alt="" />Car Accessories</NavDropdown.Item>
                  </div>
                  <div className="cat" style={{ display: "inline" }}>
                    <NavDropdown.Item href="#action/3.2" style={{ fontSize: '16px', padding: '10px 20px' }}><img src="https://www.boat-lifestyle.com/cdn/shop/collections/Nirvana-ION-Black-_-1_-1.1_100x.png?v=1699269477" alt="" />Personalised Products</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3" style={{ fontSize: '16px', padding: '10px 20px' }}><img src="https://www.boat-lifestyle.com/cdn/shop/collections/wiredheadphones_100x.webp?v=1705400196" alt="" />Wired Headphones </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1" style={{ fontSize: '16px', padding: '10px 20px' }}><img src="https://www.boat-lifestyle.com/cdn/shop/collections/MISFIT-shop_100x.png?v=1684827994" alt="" />Misfit Trimmers</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2" style={{ fontSize: '16px', padding: '10px 20px' }}><img src="https://www.boat-lifestyle.com/cdn/shop/collections/imageedit_1_7038353159_100x.png?v=1684828134" alt="" />Superhero Collection</NavDropdown.Item>
                  </div>
                  <div className="cat" style={{ display: "inline" }}>
                    <NavDropdown.Item href="#action/3.3" style={{ fontSize: '16px', padding: '10px 20px' }}><img src="https://www.boat-lifestyle.com/cdn/shop/collections/Neckbands_06214c1a-5e30-48ea-ac14-4a6bff679f48_100x.png?v=1684828287" alt="" />Neckbands</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1" style={{ fontSize: '16px', padding: '10px 20px' }}><img src="https://www.boat-lifestyle.com/cdn/shop/collections/Wiredearphones_100x.webp?v=1705399424" alt="" />Wired Earphones</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2" style={{ fontSize: '16px', padding: '10px 20px' }}><img src="https://www.boat-lifestyle.com/cdn/shop/collections/Charger_100x.png?v=1684828017" alt="" />Chargers</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3" style={{ fontSize: '16px', padding: '10px 20px' }}><img src="https://www.boat-lifestyle.com/cdn/shop/collections/New-Category-Banners_with-Trebal_09_100x.png?v=1684828168" alt="" />Trebel for Women</NavDropdown.Item>
                  </div>
                  <div className="cat" style={{ display: "inline" }}>
                    <NavDropdown.Item href="#action/3.1" style={{ fontSize: '16px', padding: '10px 20px' }}><img src="https://www.boat-lifestyle.com/cdn/shop/collections/smartwatches_100x.png?v=1684827668" alt="" />Smartwatches</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2" style={{ fontSize: '16px', padding: '10px 20px' }}><img src="https://www.boat-lifestyle.com/cdn/shop/collections/Collections_5baef8f1-a67a-40a5-a537-4258c6caae6a_100x.png?v=1684827849" alt="" />Soundbars</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3" style={{ fontSize: '16px', padding: '10px 20px' }}><img src="https://www.boat-lifestyle.com/cdn/shop/collections/powerbank_100x.png?v=1684828045" alt="" />Powerbanks</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1" style={{ fontSize: '16px', padding: '10px 20px' }}><img src="https://www.boat-lifestyle.com/cdn/shop/collections/dropdown-limited-edition_100x.png?v=1684828200" alt="" />Limited Edition</NavDropdown.Item>
                  </div>
                  <div className="cat" style={{ display: "inline" }}>
                    <NavDropdown.Item href="#action/3.2" style={{ fontSize: '16px', padding: '10px 20px' }}><img src="https://www.boat-lifestyle.com/cdn/shop/collections/Rectangle271_100x.png?v=1701414051" alt="" />Limited Edition</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2" style={{ fontSize: '16px', padding: '10px 20px' }}><img src="https://www.boat-lifestyle.com/cdn/shop/collections/Rectangle271_100x.png?v=1701414051" alt="" />Wireless Headphones</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3" style={{ fontSize: '16px', padding: '10px 20px' }}><img src="https://www.boat-lifestyle.com/cdn/shop/collections/Immortal_category_Image_100x.png?v=1684827903" alt="" />Gaming Headphones</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1" style={{ fontSize: '16px', padding: '10px 20px' }}><img src="https://www.boat-lifestyle.com/cdn/shop/collections/cables_cd468fe0-9b41-4eef-b686-0785c6478534_100x.png?v=1704789523" alt="" />Cables</NavDropdown.Item>
                  </div>

                </NavDropdown>
              </NavDropdown>
              <Nav.Link href="/boAt">boAt Personalisation</Nav.Link>
              <Nav.Link href="/Gift">Gift with boAt</Nav.Link>
              <Nav.Link href="/Corporate">Corporate Orders</Nav.Link>
              <NavDropdown title="More" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Daily Deals</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Do What FloAts Your boAt</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Blogs</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Refer & Earn</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">Careers</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6">Social Responsibility</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.7"> Store Locato r</NavDropdown.Item>
              </NavDropdown>
              <div style={{ display: "flex", alignItems: "center",color:"white" ,border: "1px solid lightgray", borderRadius: "20px", padding: "10px 10px", margin: "50px",height:"40px" ,marginRight:"50px"}}> 
                <FontAwesomeIcon icon={faSearch} style={{ marginLeft: "5px", fontSize: "15px",color:"black" }} />
                <input type="text" style={{ outline:"none", marginLeft:"5px",border: "none",padding:"5px" }} />
              </div>
              <FontAwesomeIcon icon={faUser} style={{ marginLeft: "20px", fontSize: "20px", border: "1px", padding: "5px"}} />
              <FontAwesomeIcon icon={faShoppingBag} style={{ marginLeft: "20px", fontSize: "20px", border: "1px", padding: "5px"}} />
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
    </>
  )
}

export default Navigate;
