import React from 'react'
import './Corporate.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight,faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const Corporate = () => {
  return (
    <>
      <div className='lock'>
        <div className='lock1'>
          <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Group_1707478687_f1cf7500-beb7-4b92-b5dd-6eca0e782439.png?v=1711005586" alt="" />
        </div>
        <div className='lock2'>
          <h1>Your Bulk Orders<br /><span>Are Now Hassle Free</span></h1>
          <h3>Got A Big boAt Order?</h3>
          <h6>Come sail with us<br /><br />For shipments of 25 units or more,<br /><span>Hit us up!</span></h6>
          <Button variant="dark" className='button'>Submit Your Requirement</Button>
        </div>
      </div>

   


      <div className='hi'>
      <div className='hi1'>
        <h1>Get a <b>boAt</b></h1>
        </div>
        <div className='hi2'>
        <p>View All</p><FontAwesomeIcon style={{ padding: "10px" ,fontSize:"15px",color:"blue"}} icon={faCircleArrowRight} />
        </div>
        </div>
     
   <div className='same'>
     <Card className='sameCard' >
       <Card.Img variant="top" className='sameCardImg' src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Atom_81.jpg?v=1688452928" />
       <Button className="But" variant="dark">Engraving Available</Button>
            <Button className="But1" variant="warning">120 Hours Playback</Button>
       <Card.Body className='sameCardBody'>
         <Card.Title className='sameCardTitle1'><b>Nirvana Ion</b></Card.Title>
         <Card.Title className='sameCardTitle2'><b>Price for one ₹2,299</b> <s style={{ textDecoration: "line-through"  }}>₹7,990</s><b style={{ color: "rgb(19, 185, 132)",fontSize: "15px"}}> 71% off</b></Card.Title>
         <Button variant="dark" className="But2">Buy 5 at ₹2184/- per item | <b style={{ color: "rgb(19, 185, 132)" }}>73%off</b></Button>
         <Card.Text className='sameCardText'>
           Buy 10 at ₹2138/- per item | <b style={{ color: "rgb(19, 185, 132)" }}>73%off</b>
         </Card.Text>
       </Card.Body>
     </Card>


     <Card className='sameCard' >
       <Card.Img variant="top" className='sameCardImg' src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Nirvana_Ion.jpg?v=1697621745" />
            <Button className="But1" variant="warning">50 Hours Playback</Button>
       <Card.Body className='sameCardBody'>
         <Card.Title className='sameCardTitle1'><b>Airdopes Atom 81</b></Card.Title>
         <Card.Title className='sameCardTitle2'><b>Price for one ₹1099</b> <s style={{ textDecoration: "line-through"  }}>₹3490</s> <b style={{ color: "rgb(19, 185, 132)",fontSize: "15px"}}>69% off</b></Card.Title>
         <Button variant="dark" className="But2">Buy 10 at ₹1044/- per item | <b style={{ color: "rgb(19, 185, 132)" }}>70%off</b></Button>
         <Card.Text  className='sameCardText'>
           Buy 5 at ₹144/- per item | <b style={{ color: "rgb(19, 185, 132)" }}>71%off</b>
         </Card.Text>
       </Card.Body>
     </Card>



     <Card className='sameCard'>
       <Card.Img variant="top" className='sameCardImg' src="https://www.boat-lifestyle.com/cdn/shop/products/141white_300x.png?v=1685518916" />
            <Button className="But1" variant="warning">42 Hours Playback</Button>
       <Card.Body className='sameCardBody'>
         <Card.Title className='sameCardTitle1'><b>TRebel Airdopes 141</b></Card.Title>
         <Card.Title className='sameCardTitle2'><b>Price for one ₹1,399</b> <s style={{ textDecoration: "line-through"  }}>₹4,490</s><b style={{ color: "rgb(19, 185, 132)",fontSize: "15px" }}> 69% off</b></Card.Title>
         <Button variant="dark" className='But2'>Buy 5 at ₹1329/- per item | <b style={{ color: "rgb(19, 185, 132)" }}>70%off</b></Button>
         <Card.Text  className='sameCardText'>
           Buy 10 at ₹1301/- per item | <b style={{ color: "rgb(19, 185, 132)" }}>71%off</b>
         </Card.Text>
       </Card.Body>
     </Card>


     <Card className='sameCard' >
       <Card.Img variant="top" className='sameCardImg' src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/r255pro_55d805bc-f2e1-4861-9533-8eee57081305.jpg?v=1682573437" />
       <Button className="But" variant="dark">Bestseller</Button>
            <Button className="But1" variant="warning">40 Hours Playback</Button>
       <Card.Body className='sameCardBody'>
         <Card.Title className='sameCardTitle1'><b>Rockerzv255 Pro+</b></Card.Title>
         <Card.Title className='sameCardTitle2'><b>Price for one ₹1,299</b> <s  style={{ textDecoration: "line-through"  }}>₹3,990</s><b style={{ color: "rgb(19, 185, 132)",fontSize: "15px" }}> 67% off</b></Card.Title>
         <Button variant="dark" className='But2'>Buy 5 at ₹1234/- per item | <b style={{ color: "rgb(19, 185, 132)" }}>69%off</b></Button>
         <Card.Text  className='sameCardText'>Buy 10 at ₹1208/- per item | <b style={{ color: "rgb(19, 185, 132)" }}>70%off</b></Card.Text>
       </Card.Body>
     </Card>
   </div>








      <div className='h1'>Explore by Categories</div>
      <div className='blocks'>
        <Card className='blocksCard'>
          <Card.Img variant="top" className='blocksCardimg' src="https://www.boat-lifestyle.com/cdn/shop/files/Audiophile_5.png?v=1696328658" />
          <Card.Body className='blocksCardBody'>
            <Card.Title><b>Neckbands</b></Card.Title>
            <p style={{ color: "blue" }}>View All<FontAwesomeIcon style={{ paddingLeft: "10px" }} icon={faCircleArrowRight} /></p>
          </Card.Body>
        </Card>


        <Card className='blocksCard'>
          <Card.Img variant="top" className='blocksCardimg' src="https://www.boat-lifestyle.com/cdn/shop/files/For_Parties_4x_8df06f56-d656-4af1-8b94-3921c6810c6c.png?v=1696906661" />
          <Card.Body className='blocksCardBody'>
            <Card.Title><b>Speakers</b></Card.Title>
            <p style={{ color: "blue" }}>View All<FontAwesomeIcon style={{ paddingLeft: "10px" }} icon={faCircleArrowRight} /></p>
          </Card.Body>
        </Card>


        <Card className='blocksCard'>
          <Card.Img variant="top" className='blocksCardimg' src="https://www.boat-lifestyle.com/cdn/shop/files/Workaholic_2.png?v=1685083745" />
          <Card.Body className='blocksCardBody'>
            <Card.Title><b>Smartwatches</b></Card.Title>
            <p style={{ color: "blue" }}>View All<FontAwesomeIcon style={{ paddingLeft: "10px" }} icon={faCircleArrowRight} /></p>
          </Card.Body>
        </Card>

        <Card className='blocksCard'>
          <Card.Img variant="top" className='blocksCardimg' src="https://www.boat-lifestyle.com/cdn/shop/files/Fitness_1.png?v=1696906228" />
          <Card.Body className='blocksCardBody'>
            <Card.Title><b>Headphones</b></Card.Title>
            <p style={{ color: "blue" }}>View All<FontAwesomeIcon style={{ paddingLeft: "10px" }} icon={faCircleArrowRight} /></p>
          </Card.Body>
        </Card>
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
          <i class="fa-brands fa-facebook-f"></i>
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

export default Corporate
