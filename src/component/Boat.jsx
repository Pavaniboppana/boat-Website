import React from 'react'
import './Boat.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';


const Boat = () => {
  let data = [{
    "id": "1",
    "img": "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Nirvana_Ion.jpg?v=1697621745/100px180",
    "button": "Engraving Available",
    "button1": "120 Hours Playback",
    "text": "5.0 |67",
    "title1": "Nirvana Ion",
    "title2": "₹2,299 ₹7,990 71% off",
    "span1": "ENxTM Technology",
    "span2": "BEASTTM Mode",
    "span3": "Dual EQ Modes",
    "button2": "Add To Cart"
  },
  {
    "id": "2",
    "img": "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/131_f04f74fd-45d4-4614-85cf-6ccf69c4cf90.jpg?v=1691395049/100px180",
    "button": "Engraving Available",
    "button1": "60 Hours Playback",
    "text": "4.8 |1354",
    "title1": "Airdopes 131",
    "title2": "₹899 ₹2,990 71% off",
    "span1": "13mm drivers",
    "span2": "IWP Technology",
    "button2": "Add To Cart"
  },
  {
    "id": "3",
    "img": "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_131_e7e95f2c-0bb3-492e-89df-613a2cfb792f.jpg?v=1686297917/100px180",
    "button": "Engraving Available",
    "button1": "45 Hours Playback",
    "text": "4.9 |187",
    "title1": "Airdopes 131 PRO",
    "title2": "₹999 ₹2,990 67% off",
    "span1": "Clear Calling",
    "span2": "BEASTTM Mode",
    "button2": "Add To Cart"
  },
  {
    "id": "4",
    "img": "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_161.jpg?v=1686297917/100px180",
    "button": "Engraving Available",
    "button1": "40 Hours Playback",
    "text": "4.9 |168",
    "title1": "Airdopes 161",
    "title2": "₹999 ₹2,490 60% off",
    "span1": "ASAPTM Charge",
    "span2": "IWP Technology",
    "button2": "Add To Cart"
  },
  {
    "id": "5",
    "img": "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_141.png?v=1703145765/100px180",
    "button": "Engraving Available",
    "button1": "42 Hours Playback",
    "text": "4.9 |660",
    "title1": "Airdopes 141",
    "title2": "₹1,299 ₹4,490 71% off",
    "span1": "Clear Calling",
    "span2": "ASAPTM Charge",
    "button2": "Add To Cart"
  },
  {
    "id": "6",
    "img": "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/ION_ANC__1.jpg?v=1703228258/100px180",
    "button": "Engraving Available",
    "button1": "Noise Cancellation",
    "text": "4.9 |28",
    "title1": "Nirvana Ion ANC",
    "title2": "₹2,799 ₹9,990 72% off",
    "span1": "120 Hours Playback",
    "span2": "BEASTTM Mode",
    "span3": "ENxTM Technology",
    "button2": "Add To Cart"
  },
  {
    "id": "7",
    "img": "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes_170.jpg?v=1703224914/100px180",
    "button": "Engraving Available",
    "button1": "50 Hours Playback",
    "text": "5.0 |34",
    "title1": "Airdopes 170",
    "title2": "₹1,499 ₹3,490 57% off",
    "span1": "ENxTM Technology",
    "span2": "BEASTTM Mode",
    "span3": "13mm Drivers",
    "button2": "Add To Cart"
  },
  {
    "id": "8",
    "img": "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/PB300.jpg?v=1700300890/100px180",
    "button": "Engraving Available",
    "button1": "10000mah Power Bank",
    "text": "4.6 |20",
    "title1": "EnergyShroom PB300",
    "title2": "₹1,199 ₹2,999 60% off",
    "span1": "22.5W Fast Charging",
    "span2": "Smart IC Protection",
    "button2": "Add To Cart"
  },
  {
    "id": "9",
    "img": "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/PB400_628ae039-11be-4f0b-b723-651e2bb05de7.jpg?v=1700300890/100px180",
    "button": "Engraving Available",
    "button1": "200000mAh Power Bank",
    "text": "4.6 |24",
    "title1": "EnergyShroom PB300",
    "title2": "₹1,899 ₹4,499 58% off",
    "span1": "2-Way Fast Charging",
    "span2": "Smart IC Protection",
    "span3": "QC 3.0 support",
    "button2": "Add To Cart"
  },
  {
    "id": " 10",
    "img": "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes_138.jpg?v=1698402384/100px180",
    "button": "Engraving Available",
    "button1": "60 Hours Playback",
    "text": "5.0 |10",
    "title1": "Airdopes 138",
    "title2": "₹1,399 ₹2,990 53% off",
    "span1": "13mm Drivers",
    "span2": "boAt Signature Sound",
    "button2": "Add To Cart"
  },
  {
    "id": " 11",
    "img": "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes_148.jpg?v=1698909797/100px180",
    "button": "Engraving Available",
    "button1": "42 Hours Playback",
    "text": "5.0 |8",
    "title1": "Airdopes 148",
    "title2": "₹1,499 ₹4,490 67% off",
    "span1": "Clear Calling",
    "span2": "ASAPTM Charge",
    "button2": "Add To Cart"
  },
  {
    "id": "12",
    "img": "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes-163.jpg?v=1682408982/100px180",
    "button": "Engraving Available",
    "button1": "17 Hours Playback",
    "text": "4.8 |103",
    "title1": "Airdopes 163",
    "title2": "₹1,499 ₹2,9490 40% off",
    "span1": "boAt Immersive Sound",
    "span2": "IWP Technology",
    "button2": "Add To Cart"
  }
  ]


  return (
    <>

      <h1>Special Range — Personalised Products</h1>

      {
        data.map(
          (value) => {
            return (
              <>

                  <div className='ox'>
                    <Card className='oxCard'>
                      <Card.Img variant="top" className='oxImg' src={value.img} />
                      <Button variant="warning" className='Button1'>{value.button1}</Button>
                      <Card.Body className='oxCardBody'>
                        <Card.Title className='oxTitle'>{value.title1}</Card.Title>
                        <Card.Title className='oxTitle1'><b></b><u></u><s></s>{value.title2}</Card.Title>
                        <Card.Text className='oxText'>{value.text}</Card.Text>
                        <div style={{ display: "flex" }}>
                          <span>{value.span1}</span>
                          <span>{value.span2}</span>
                        </div>
                        <span style={{ display: "inline" }}>{value.span3}</span>
                        <Button variant="dark" className='Button2'>{value.button2}</Button>
                      </Card.Body>
                    </Card>
                </div>
              </>
            )
          }

        )
      }









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

export default Boat