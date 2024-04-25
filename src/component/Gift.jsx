import React from 'react'
import './Gift.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleChevronRight, faStar, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
 import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Gift = () => {
  return (
    <>

      <img src="" alt="" />



      <div className='hi'>
      <div className='hi1'>
        <h1>For Special Days</h1>
        </div>
        <div className='hi2'>
        <p>View All</p><FontAwesomeIcon style={{ padding: "10px" ,fontSize:"15px",color:"blue"}} icon={faCircleArrowRight} />
        </div>
</div>

<div className='hay'>
  <span>Love out Loud - 2024</span>
  <p>New Year</p>
  <p>Birthday</p>
  <p>Anniversary</p>
  <p>Wedding</p>
</div>

        <div className='flask'>
          <Card  className='flaskCard'>
            <Card.Img variant="top"  className='flaskImg' src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/r255pro_55d805bc-f2e1-4861-9533-8eee57081305.jpg?v=1682573437" />
            <Button className="Button" variant="dark">Bestseller</Button>
            <Button className="Button1" variant="warning">40 Hours Playback</Button>
            <Card.Body className='flaskBody'>
              <Card.Title className='flaskTitle'><b>Rockerz 255 Pro+</b></Card.Title>
              <Card.Title className='flaskTitle1'><b>₹1,299</b> <s style={{ textDecoration: "line-through"  }}>₹3,990</s> <b style={{ color: "rgb(19, 185, 132)",fontSize: "15px",fontWeight:"600"}}>67% off</b></Card.Title>
              <Card.Text className='flaskText'> <FontAwesomeIcon style={{color:"gold",fontSize:"15px"}} icon={faStar} />4.8  |436<FontAwesomeIcon icon={faCheckCircle} style={{color:"limegreen",fontSize:"15px"}}/></Card.Text>
              <Button variant="dark" className="Button2">Add To Cart</Button>
            </Card.Body>
          </Card>


          <Card className='flaskCard'>
            <Card.Img variant="top" className='flaskImg' src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockerz_245v2.jpg?v=1702027042" />
            <Button className="Button1" variant="warning">8 Hours Playback</Button>
            <Card.Body className='flaskBody'>
              <Card.Title className='flaskTitle'><b>Rockerz 245 V2</b></Card.Title>
              <Card.Title className='flaskTitle1'><b>₹1,099</b> <s style={{ textDecoration: "line-through"  }}>₹2,990</s> <b style={{ color: "rgb(19, 185, 132)",fontSize: "15px",fontWeight:"600"}}>63% off</b></Card.Title>
              <Card.Text className='flaskText'> <FontAwesomeIcon icon={faStar} style={{color:"gold",fontSize:"15px"}} />4.8  |206<FontAwesomeIcon icon={faCheckCircle} style={{color:"limegreen",fontSize:"15px"}}/></Card.Text>
               <Button variant="dark" className="Button2">Add To Cart</Button>
            </Card.Body>
          </Card>



          <Card className='flaskCard'>
            <Card.Img variant="top" className='flaskImg' src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt-Airdopes-Atom-83.jpg?v=1682576552" />
            <Button className="Button1" variant="warning">50 Hours Playback</Button>
            <Card.Body className='flaskBody'>
              <Card.Title className='flaskTitle'><b>Airdopes Atom 83</b></Card.Title>
              <Card.Title className='flaskTitle1'><b>₹1,499</b> <s style={{ textDecoration: "line-through"  }}>₹3,490</s> <b style={{ color: "rgb(19, 185, 132)",fontSize: "15px",fontWeight:"600"}}>57% off</b></Card.Title>
              <Card.Text className='flaskText'> <FontAwesomeIcon icon={faStar} style={{color:"gold",fontSize:"15px"}} />4.7  |42<FontAwesomeIcon icon={faCheckCircle} style={{color:"limegreen",fontSize:"15px"}}/></Card.Text>
              <Button variant="dark" className="Button2">Add To Cart</Button>
            </Card.Body>
          </Card>


          <Card  className='flaskCard'>
            <Card.Img variant="top" className='flaskImg' src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/rockerz_333_pro.jpg?v=1692340413" />
            <Button className="Button1" variant="warning">60 Hours Playback</Button>
            <Card.Body className='flaskBody'>
              <Card.Title className='flaskTitle'><b>Rockerz 333 Pro</b></Card.Title>
             <Card.Title className='flaskTitle1'><b>₹1,799</b> <s style={{ textDecoration: "line-through"  }}>₹2,990</s> <b style={{ color: "rgb(19, 185, 132)",fontSize: "15px",fontWeight:"600"}}>40% off</b></Card.Title>
             <Card.Text className='flaskText'> <FontAwesomeIcon icon={faStar} style={{color:"gold",fontSize:"15px"}} />4.9  |167<FontAwesomeIcon icon={faCheckCircle} style={{color:"limegreen",fontSize:"15px"}}/></Card.Text>
              <Button variant="dark" className="Button2">Add To Cart</Button>
            </Card.Body>
          </Card>
        </div>
  




      <div id="Part">
        <div className="Part1">
          <img src="https://www.boat-lifestyle.com/cdn/shop/files/gift2_1400x.jpg?v=1692769727" alt="" />
        </div>
        <div className="Part2">
          <img src="https://www.boat-lifestyle.com/cdn/shop/files/gift3_1400x.jpg?v=1692769727" alt="" />
        </div>
      </div>



      <div className='hay'>
  <span>For Friends and Family</span>
  <p>Parents</p>
  <p>Sibilings</p>
  <p>Friends</p>
  <p>Beloved</p>
  <p>Colleagues</p>
</div>

      <div className='block'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Atom_81.jpg?v=1688452928" />
          <Button className="Btn" variant="warning">50 Hours Playback</Button>
          <Card.Body>
            <Card.Title><b>Airdopes Atom 81</b></Card.Title>
            <Card.Title  className='blockTitle'><b>₹1,099</b> <s style={{ textDecoration: "line-through"  }}>₹3,490</s> <b style={{ color: "rgb(19, 185, 132)",fontSize: "15px"}}>69% off</b></Card.Title>
            <Button variant="primary" className="Btn1">Add To Cart</Button>
            <Card.Text><FontAwesomeIcon icon={faStar} style={{color:"gold",fontSize:"15px"}} />5.0 |25<FontAwesomeIcon icon={faCheckCircle} style={{color:"limegreen",fontSize:"15px"}}/></Card.Text>
          </Card.Body>
        </Card>



        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_207.jpg?v=1696843563" />
          <Button className="Btn" variant="warning">50 Hours Playback</Button>
          <Card.Body>
            <Card.Title><b>Airdopes Supreme</b></Card.Title>
            <Card.Title className='blockTitle'><b>₹1,499</b> <s style={{ textDecoration:"line-through" }}>₹5,990</s> <b style={{ color: "rgb(19, 185, 132)",fontSize: "15px" }}>75% off</b></Card.Title>
            <Button variant="primary" className="Btn1">Add To Cart</Button>
            <Card.Text><FontAwesomeIcon icon={faStar} style={{color:"gold",fontSize:"15px"}} />4.9 |13<FontAwesomeIcon icon={faCheckCircle} style={{color:"limegreen",fontSize:"15px"}}/></Card.Text>
          </Card.Body>
        </Card>

        
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_200_Plus.jpg?v=1696323701" />
          <Button className="Btn" variant="warning">100 Hours Playback</Button>
          <Card.Body>
            <Card.Title><b>Airdopes 200 Plus</b></Card.Title>
            <Card.Title className='blockTitle'> <b>₹1,199</b> <s style={{ textDecoration:"line-through" }}>₹5,490</s> <b style={{ color: "rgb(19, 185, 132)",fontSize: "15px" }}>71% off</b></Card.Title>
            <Button variant="primary" className="Btn1">Add To Cart</Button>
            <Card.Text><FontAwesomeIcon icon={faStar} style={{color:"gold",fontSize:"15px"}} />4.5 |16<FontAwesomeIcon icon={faCheckCircle} style={{color:"limegreen",fontSize:"15px"}}/></Card.Text>
          </Card.Body>
        </Card>


        
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/IM_171.jpg?v=1689670793" />
          <Button className="Btn" variant="warning">Gaming Earbuds</Button>
          <Card.Body>
            <Card.Title><b>Immortal 171</b></Card.Title>
            <Card.Title className='blockTitle'><b>₹1,699</b> <s style={{ textDecoration:"line-through" }}>₹3,999</s> <b style={{ color: "rgb(19, 185, 132)",fontSize: "15px" }}>51% off</b></Card.Title>
            <Button variant="primary" className="Btn1">Add To Cart</Button>
            <Card.Text><FontAwesomeIcon icon={faStar} style={{color:"gold",fontSize:"15px"}} />4.7 |22<FontAwesomeIcon icon={faCheckCircle} style={{color:"limegreen",fontSize:"15px"}}/></Card.Text>
          </Card.Body>
        </Card>
      </div>


      <img src="https://www.boat-lifestyle.com/cdn/shop/files/gifting-1_1_1400x.jpg?v=1692769923" alt="" />


      <div id='oxes'>
        <div className='oxe'>
          <img src="https://www.boat-lifestyle.com/cdn/shop/files/Group_334305_small.svg?v=1682336123" alt="" />
          <p>Made by<span>Indians</span></p>
        </div>
        <div className='oxe'>
          <img src="https://www.boat-lifestyle.com/cdn/shop/files/Group_334304_small.svg?v=1682336123" alt="" />
          <p>Exciting<span>Offers</span></p>
        </div>
        <div className='oxe'>
          <img src="https://www.boat-lifestyle.com/cdn/shop/files/Group_334303_small.svg?v=1682336123" alt="" />
          <p>Fast<span>Delivery</span></p>
        </div>
        <div className='oxe'>
          <img src="https://www.boat-lifestyle.com/cdn/shop/files/Group_334302_small.svg?v=1682336123" alt="" />
          <p>Exclusive<span>Benefits</span></p>
        </div>
      </div>



      <div className='hay'>
  <span>By Passion</span>
  <p>Audiophiles</p>
  <p>Gamers</p>
  <p>Workaholics</p>
  <p>Artists</p>
  <p>Fitness Fanatic</p>
</div>
      
      <div className='blocks'>
      <Card className='blocksCard'>
          <Card.Img variant="top" className='blocksCardImg' src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockerz_330_ANC.jpg?v=1698402384" />
          <Button className="Btns" variant="warning">Noise Cancellation</Button>
          <Card.Body className='blocksCardBody'>
            <Card.Title className='blocksCardTitle1'><b>Rockerz 330 ANC</b></Card.Title>
            <Card.Title className='blocksCardTitle2'><b>₹1,999</b> <s style={{ textDecoration:"line-through" }}>₹5,999</s> <b  style={{ color: "rgb(19, 185, 132)",fontSize: "12px" }}>67% off</b></Card.Title>
            <Button variant="dark" className='Btns1' style={{color:"white"}}>Add To Cart</Button>
            <Card.Text className='blocksCardText'><FontAwesomeIcon icon={faStar} style={{color:"gold",fontSize:"15px"}} />4.8 |16<FontAwesomeIcon icon={faCheckCircle} style={{color:"limegreen",fontSize:"15px"}}/></Card.Text>
          </Card.Body>
        </Card>



        <Card className='blocksCard'>
          <Card.Img variant="top" className='blocksCardImg' src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Nirvana_Eutopia.jpg?v=1711716650" />
          <Button className="Btns" variant="warning">20 Hours Playback</Button>
          <Card.Body className='blocksCardBody'>
            <Card.Title className='blocksCardTitle1'><b>Nirvana Eutopia</b></Card.Title>
            <Card.Title className='blocksCardTitle2'><b>₹3,999</b> <s style={{ textDecoration:"line-through" }}>₹7490</s> <b  style={{ color: "rgb(19, 185, 132)",fontSize: "12px" }}>47% off</b></Card.Title>
            <Card.Text className='blocksCardText'>Be first to review</Card.Text>
            <Button variant="dark" className='Btns1' style={{color:"white"}}>Add To Cart</Button>
          </Card.Body>
        </Card>


  



        <Card className='blocksCard'>
          <Card.Img variant="top" className='blocksCardImg' src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Nirvana_751_ANC.jpg?v=1698909797" />
          <Button className="Btns" variant="warning">65 Hours Playback</Button>
          <Card.Body className='blocksCardBody'>
            <Card.Title className='blocksCardTitle1'><b>Nirvana 751 ANC</b></Card.Title>
            <Card.Title className='blocksCardTitle2'><b>₹4,499</b> <s style={{ textDecoration:"line-through" }}>7,990</s> <b  style={{ color: "rgb(19, 185, 132)",fontSize: "12px" }}>44% off</b></Card.Title>
            <Button variant="dark" className='Btns1' style={{color:"white"}}>Add To Cart</Button>
            <Card.Text className='blocksCardText'><FontAwesomeIcon icon={faStar} style={{color:"gold",fontSize:"15px"}} />4.7 |29<FontAwesomeIcon icon={faCheckCircle} style={{color:"limegreen",fontSize:"15px"}}/></Card.Text>
          </Card.Body>
        </Card>


        <Card className='blocksCard'>
          <Card.Img variant="top" className='blocksCardImg' src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockerz_255_Pro_e3ad8e25-f783-4a5d-9de8-402b76b1ae4d.jpg?v=1698402384" />
          <Button className="Btns" variant="warning">8 Hours Playback</Button>
          <Card.Body className='blocksCardBody'>
            <Card.Title className='blocksCardTitle1'><b>Rockerz 255 Pro</b></Card.Title>
            <Card.Title className='blocksCardTitle2'><b>₹1,099</b> <s style={{ textDecoration:"line-through" }}>₹3,499</s> <b style={{ color: "rgb(19, 185, 132)",fontSize: "12px" }}>69% off</b></Card.Title>
            <Button variant="dark" className='Btns1' style={{color:"white"}}>Add To Cart</Button>
            <Card.Text className='blocksCardText'><FontAwesomeIcon icon={faStar} style={{color:"gold",fontSize:"15px"}} />4.8 |384<FontAwesomeIcon icon={faCheckCircle} style={{color:"limegreen",fontSize:"15px"}}/></Card.Text>
          </Card.Body>
        </Card>
      </div>



      <div id="Part">
        <div className="Part1">
          <img src="https://www.boat-lifestyle.com/cdn/shop/files/gift-4_1400x.jpg?v=1692770282" alt="" />
        </div>
        <div className="Part2">
          <img src="https://www.boat-lifestyle.com/cdn/shop/files/gift-5_1400x.jpg?v=1692770283" alt="" />
        </div>
      </div>



      <div className="footer">
        <div className="order">
          <div className="odd">
            <img src="https://www.boat-lifestyle.com/cdn/shop/files/boAt_logo_small_3067da8c-a83b-46dd-b28b-6ef1e16ccd17_small.svg?v=1693549434" alt="" />
            <p>Subscribe to our email<br />alerts!</p>
            <div className='form'>
              <input type="text" placeholder='Enter your email address' />
              <FontAwesomeIcon style={{ marginTop: "18px", marginRight: "20px", fontSize: "20px", color: "gray" }} icon={faCircleChevronRight} />
            </div>
          </div>
        </div>
        <div className="order">
          <ul>
            <p>Shop</p>
            <li>True Wireless Earbuds</li>
            <li>Wired Headphones</li>
            <li>Home Audio</li>
            <li>Smart Watches</li>
            <li>Misfit Trimmers</li>
          </ul>
          <div className="orders">
            <ul>
              <li>Wireless Headphones</li>
              <li>Wireless Speakers</li>
              <li>Mobile Accessories</li>
              <li>TRebel</li>
              <li>Refer & Earn</li>
            </ul>
          </div>
        </div>
        <div className="order">
          <ul>
            <p>Help</p>
            <li>Track Your Order</li>
            <li>Warranty & Support</li>
            <li>Return Policy</li>
            <li>Service Centers</li>
            <li>Bulk Orders</li>
            <li>FAQs</li>
            <li>Why Buy Direct</li>
          </ul>
        </div>
        <div className="order">
          <ul>
            <p>Company</p>
            <li>About boAt</li>
            <li>News</li>
            <li>Read Our Blog</li>
            <li>Careers</li>
            <li>Security</li>
            <li>Investor Relations</li>
            <li>Social Responsibility</li>
            <li>Warranty Policy</li>
          </ul>
        </div>
      </div>



      <div className="footer1">
        <div className="list">
          <ul>
            <p>True Wireless Earbuds</p>
            <h6>Shop by Features</h6>
            <li>Noise Cancellation Earbuds</li>
            <li>Gaming Earbuds</li>
            <li>Large Playback Earbuds</li>
          </ul>
          <ul>
            <h6>Shop by Price</h6>
            <li>Earbuds Under 1000</li>
            <li>Earbuds Under 2000</li>
            <li>Earbuds Under 3000</li>
            <li>Earbuds Under 4000</li>
            <li>Earbuds Under 5000</li>
            <li>Earbuds Above 5000</li>
          </ul>
          <ul>
            <p>Wireless Earphones</p>
            <h6>Shop by Features</h6>
            <li>Noise Cancellation Earphone</li>
            <li>Long Playback Earphone</li>
            <li>Clear Calling Earphone</li>
          </ul>
          <ul>
            <h6>Shop by Price</h6>
            <li>Neckbands Under 1000</li>
            <li>Neckbands Under 2000</li>
            <li>Neckbands Under 3000</li>
          </ul>
          <ul>
            <p>Wired Earphones</p>
            <h6>Shop by Features</h6>
            <li>Wired Headphones with Mic</li>
            <li>Wired Headphones with Mic</li>
            <li>Headphones with Mic for PC</li>
          </ul>
          <ul>
            <h6>Shop by Price</h6>
            <li>Wired Headphones Under 1000</li>
            <li>Wired Headphones Under 2000</li>
            <li>Wired Headphones Under 3000</li>
          </ul>
          <ul>
            <p>Gaming Headphones</p>
            <h6>Shop by Features</h6>
            <li>Gaming Headphones with Mic</li>
            <li>Low Latency Headphone</li>
            <li>RGB Light Headphones</li>
            <li>Headphone for PC Gaming</li>
          </ul>
        </div>
        <div className="list">
          <ul>
            <p>Wireless Speakers</p>
            <h6>Shop by Features</h6>
            <li>Portable Speakers</li>
            <li>Long Playback Speakers</li>
            <li>Waterproof Bluetooth Speaker</li>
            <li>Party Speaker with RGB Lights</li>
            <li>Speaker with Karaoke Mic</li>
          </ul>
          <ul>
            <h6>Shop by Price</h6>
            <li>Bluetooth Speakers Under 1000</li>
            <li>Bluetooth Speakers Under 2000</li>
            <li>Bluetooth Speakers Under 3000</li>
            <li>Bluetooth Speakers Under 5000</li>
            <li>Bluetooth Speakers Under 8000</li>
          </ul>
          <ul>
            <p>Soundbars</p>
            <h6>Shop by Features</h6>
            <li>Soundbar with Wireless Subwoofer</li>
            <li>Dolby Soundbars</li>
            <li>Soundbar with Wired Subwoofer</li>
            <li>Alexa Enabled Soundbar</li>
          </ul>
          <ul>
            <h6>Shop by Price</h6>
            <li>Soundbars Under 10000</li>
            <li>Soundbars Under 20000</li>
            <li>Soundbars Under 3000</li>
            <li>Soundbars Under 5000</li>
            <li>Soundbars Above 20000</li>
          </ul>
          <ul>
            <p>Smart Watches</p>
            <h6>Shop by Features</h6>
            <li>Bluetooth Calling Smartwatches</li>
            <li>Fitness Tracker Smartwatch</li>
            <li>Big Display Smartwatch</li>
            <li>Amoled Display Smartwatch</li>
            <li>Sports Tracker Smartwatch</li>
          </ul>
          <ul>
            <h6>Shop by Price</h6>
            <li>Smartwatch Under 1000</li>
            <li>Smartwatch Under 2000</li>
            <li>Smartwatch Under 3000</li>
            <li>Smartwatch Under 4000</li>
            <li>Smartwatch Under 5000</li>
            <li>Smartwatch Above 5000</li>
          </ul>
          <ul>
            <p>Trimmers</p>
            <h6>Shop by Features</h6>
            <li>Trimmer for Men</li>
            <li>Trimmers with Grooming Kit for Men</li>
          </ul>
          <ul>
            <h6>Shop by Price</h6>
            <li>Trimmer Under 1000</li>
            <li>Trimmer Under 2000</li>
          </ul>
        </div>
        <div className="list">
          <ul>
            <p>Limited Editions</p>
            <h6>Shop by Features</h6>
            <li>Limited Editions Headphones</li>
            <li>Limited Editions Smart Watch</li>
            <li>Limited Editions Earphone</li>
            <li>Limited Edition Speakers</li>
          </ul>
          <ul>
            <p>Car Accessories</p>
            <h6>Shop by Features</h6>
            <li>Car Charger</li>
            <li>Aux Cable for Car</li>
          </ul>
          <ul>
            <h6>Shop by Price</h6>
            <li>Car Charger Under 500</li>
            <li>Car Charger Above 500</li>
          </ul>
          <ul>
            <p>Trebel Range</p>
            <h6>Shop by Features</h6>
            <li>Smartwatch for Women</li>
            <li>Earbuds for Women</li>
            <li>Neckband for Women</li>
            <li>Earphone for Women</li>
            <li>Headphone for Women</li>
          </ul>
          <ul>
            <p>Powerbanks</p>
            <h6>Shop by Features</h6>
            <li>Power Bank 10000mah</li>
            <li>Power Bank 20000mah</li>
            <li>Mobile Power Bank</li>
            <li>Fast Charging Power Bank</li>
            <li>Power Bank for iPhone</li>
          </ul>
          <ul>
            <h6>Shop by Price</h6>
            <li>Power Bank Under 1000</li>
            <li>Power Bank Under 1500</li>
            <li>Power Bank Under 2000</li>
          </ul>
          <ul>
            <p>Chargers</p>
            <h6>Shop by Features</h6>
            <li>Wireless Charger</li>
            <li>Type C Charger</li>
            <li>Fast Charger</li>
            <li>USB Charger</li>
            <li>Micro USB Charger</li>
            <li>Type C Adapter</li>
          </ul>
        </div>
        <div className="list">
          <ul>
            <p>Cables</p>
            <h6>Shop by Features</h6>
            <li>Micro USB Cable</li>
            <li>C Type Cable</li>
            <li>Lightning Cable</li>
            <li>USB C to C Cable</li>
            <li>Smart Watch Charging Cable</li>
          </ul>
        </div>
      </div>



      <div className='footer2'>
        <div className='foo'>
          <h1>Let's get social</h1>
          <i class="fa-brands fa-facebook-f"></i><i class="bi bi-facebook"></i>
          <i class="fa-brands fa-x-twitter"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-youtube"></i>
          <i class="fa-brands fa-linkedin-in"></i>
        </div>
        <h6>Privacy Policy . Terms & Conditions</h6>
        <p>@ 2024 Imagine Marketing Limited. All Rights Reserved.</p>
        <p>For Queries contact us: Manager, Imagine Marketing Limited Unit no. 204 & 205, 2nd floor, D-winng & E-wing, <br />
          Corporate Avenue, Andheri Ghatkopar Link Road, Mumbai, Maharshtra-400093, India.</p>
      </div>

    </>
  )
}

export default Gift