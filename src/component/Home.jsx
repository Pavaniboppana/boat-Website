import React from 'react'
import './Home.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faCheckCircle, faCircleChevronRight, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

const Home = () => {

    return (
      <>
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.boat-lifestyle.com/cdn/shop/files/Homepage_Banner___Liquidation_Product_WEB_1400x.jpg?v=1710316754"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.boat-lifestyle.com/cdn/shop/files/Stone_SPINX_PRO_HP_Banner_WEB_1_1400x.jpg?v=1710147607"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.boat-lifestyle.com/cdn/shop/files/RS_Banner_WEB_2_1400x.png?v=1707810457"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.boat-lifestyle.com/cdn/shop/files/RS_Banner_WEB_1_1400x.jpg?v=1706770352"
          alt="Fourth slide"
        />
      </Carousel.Item>
    </Carousel>

        <div className='ha'>Explore <b>Bestsellers</b></div>
        <div className='play'>
          <div className='pay'>
            <video src='https://www.boat-lifestyle.com/cdn/shop/files/quinn_RUxbhR7CvjkNtlFUDxgw9.mp4'></video>
            <h3>Smart Watches</h3>
          </div>

          <div className='pay'>
            <video src="https://www.boat-lifestyle.com/cdn/shop/files/quinn_Bejc8URjU1NSXdhabLCmD.mp4" ></video>
            <h3>Wireless Earbuds</h3>
          </div>

          <div className='pay'>
            <video src="https://www.boat-lifestyle.com/cdn/shop/files/quinn_OyJHanx4QSdUN3OVGTO7C.mp4" ></video>
            <h3>Neck bands</h3>
          </div>

          <div className='pay'>
            <video src="https://www.boat-lifestyle.com/cdn/shop/files/quinn_CpsRIdJWtpXyFN3enwbXd.mp4" ></video>
            <h3>Card Title</h3>
          </div>
        </div>

        <div className="p">
          <div className="p1">
            <img src="https://www.boat-lifestyle.com/cdn/shop/files/img_2_mob_390x.png?v=1686117497" alt="" />
          </div>
          <div className="p2">
            <h1>Smart Watches</h1>
            <p>Starting from ₹1699*</p>
            <button className='a'>Shop Products<FontAwesomeIcon style={{ padding: "10px", fontSize: "15px" }} icon={faCircleArrowRight} ></FontAwesomeIcon></button>
          </div>
        </div>

        <div className='flask'>
          <Card className='flaskCard'>
            <Card.Img variant="top" className='flaskImg' src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Nirvana_Ion.jpg?v=1697621745/100px180" />
            <Button className="Button" variant="dark">Engraving Available</Button>
            <Button className="Button1" variant="warning">120 Hours Playback</Button>
            <Card.Body className='flaskBody'>
              <Card.Title className='flaskTitle'><b>Nirvana Ion</b></Card.Title>
              <Card.Title className='flaskTitle1'><b>₹2,299</b> <s style={{ textDecoration: "line-through" }}>₹7,990</s> <b style={{ color: "rgb(19, 185, 132)", fontSize: "15px", fontWeight: "600" }}>71% off</b></Card.Title>
              <Card.Text className='flaskText'> <FontAwesomeIcon style={{ color: "gold", fontSize: "15px" }} icon={faStar} />5.0  |73<FontAwesomeIcon icon={faCheckCircle} style={{ color: "limegreen", fontSize: "15px" }} /></Card.Text>
              <Button variant="dark" className="Button2">Add To Cart</Button>
            </Card.Body>
          </Card>


          <Card className='flaskCard'>
            <Card.Img variant="top" className='flaskImg' src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/131_f04f74fd-45d4-4614-85cf-6ccf69c4cf90.jpg?v=1691395049/100px180" />
            <Button variant="dark" className="Button">Engraving Available </Button>
            <Button variant="warning" className="Button1">60 Hours Playback</Button>
            <Card.Body className='flaskBody'>
              <Card.Title className='flaskTitle'><b>Airdopes 131</b></Card.Title>
              <Card.Title className='flaskTitle1'><b>₹899</b> <s style={{ textDecoration: "line-through" }}>₹2,990</s> <b style={{ color: "rgb(19, 185, 132)", fontSize: "15px", fontWeight: "600" }}>70% off</b></Card.Title>
              <Card.Text className='flaskText'> <FontAwesomeIcon style={{ color: "gold", fontSize: "15px" }} icon={faStar} />4.8 |1359<FontAwesomeIcon icon={faCheckCircle} style={{ color: "limegreen", fontSize: "15px" }} /></Card.Text>
              <Button variant="dark" className="Button2">Add To Cart</Button>
            </Card.Body>
          </Card>



          <Card className='flaskCard'>
            <Card.Img variant="top" className='flaskImg' src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_161.jpg?v=1686297917/100px180" />
            <Button variant="dark" className="Button">Engraving Available </Button>
            <Button variant="warning" className="Button1">40 Hours Playback</Button>
            <Card.Body className='flaskBody'>
              <Card.Title className='flaskTitle'><b>Airdopes 161</b></Card.Title>
              <Card.Title className='flaskTitle1'><b>₹999</b> <s style={{ textDecoration: "line-through" }}>₹2,490</s> <b style={{ color: "rgb(19, 185, 132)", fontSize: "15px", fontWeight: "600" }}>60% off</b></Card.Title>
              <Card.Text className='flaskText'> <FontAwesomeIcon style={{ color: "gold", fontSize: "15px" }} icon={faStar} />4.9 |169<FontAwesomeIcon icon={faCheckCircle} style={{ color: "limegreen", fontSize: "15px" }} /></Card.Text>
              <Button variant="dark" className="Button2">Add To Cart</Button>
            </Card.Body>
          </Card>



          <Card className='flaskCard'>
            <Card.Img variant="top" className='flaskImg' src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt-Rockerz-255-Max.jpg?v=1682579854/100px180" />
            <Button className="Button" variant="dark">₹200 OFF ON BIG200</Button>
            <Button className="Button1" variant="warning">60 Hours Playback</Button>
            <Card.Body className='flaskBody'>
              <Card.Title className='flaskTitle'><b>Rockerz 255 Pro</b></Card.Title>
              <Card.Title className='flaskTitle1'><b>₹1,299</b> <s style={{ textDecoration: "line-through" }}>₹3,999</s> <b style={{ color: "rgb(19, 185, 132)", fontSize: "15px", fontWeight: "600" }}>68% off</b></Card.Title>
              <Card.Text className='flaskText'> <FontAwesomeIcon style={{ color: "gold", fontSize: "15px" }} icon={faStar} />4.9  |17<FontAwesomeIcon icon={faCheckCircle} style={{ color: "limegreen", fontSize: "15px" }} /></Card.Text>
              <Button variant="dark" className="Button2">Add To Cart</Button>
            </Card.Body>
          </Card>

        </div>



        <div className="ha">Shop by Categories</div>
        <div className="shop">
          <div className="shopimgs">
            <img src="https://www.boat-lifestyle.com/cdn/shop/files/True-wireless-earbuds_small.png?v=1684842854" alt="" />
            <h6>True Wireless Earbuds</h6>
          </div>
          <div className="shopimgs">
            <img src="https://www.boat-lifestyle.com/cdn/shop/files/Neckbands_bc6343f4-622f-4ebd-bb36-205643c3bf78_small.png?v=1684842854" alt="" />
            <h6>Neckbands</h6>
          </div>
          <div className="shopimgs">
            <img src="https://www.boat-lifestyle.com/cdn/shop/files/Smartwatches_88f12bcf-24bd-4e3a-aacb-ecc204f62179_small.png?v=1684842853" alt="" />
            <h6>Smart Watches</h6>
          </div>
          <div className="shopimgs">
            <img src="https://www.boat-lifestyle.com/cdn/shop/files/Wireless-Headphones_small.png?v=1684842854" alt="" />
            <h6>Wireless Headpphones</h6>
          </div>
          <div className="shopimgs">
            <img src="https://www.boat-lifestyle.com/cdn/shop/files/Wireless-Speaker_small.png?v=1684842854" alt="" />
            <h6>Wireless Speakers</h6>
          </div>
          <div className="shopimgs">
            <img src="https://www.boat-lifestyle.com/cdn/shop/files/Wired-Headphones_small.png?v=1684842854" alt="" />
            <h6>Wired Headphones</h6>
          </div>
          <div className="shopimgs">
            <img src="https://www.boat-lifestyle.com/cdn/shop/files/Wired-Earphones_small.png?v=1684842854" alt="" />
            <h6>Wired Earphones</h6>
          </div>
          <div className="shopimgs">
            <img src="https://www.boat-lifestyle.com/cdn/shop/files/Soundbars_d9a7bdfd-e780-4581-ab85-f2e86f84cd28_small.png?v=1684842854" alt="" />
            <h6>Soundbars</h6>
          </div>
          <div className="shopimgs">
            <img src="https://www.boat-lifestyle.com/cdn/shop/files/Gaming-Headphones_small.png?v=1684842853" alt="" />
            <h6>Gaming Headphones</h6>
          </div>
          <div className="shopimgs">
            <img src="https://www.boat-lifestyle.com/cdn/shop/files/w_de57f25b-de5b-4d1a-bed0-765975b25da8_small.png?v=1684847228" alt="" />
            <h6>Party Speakers</h6>
          </div>
          <div className="shopimgs">
            <img src="https://www.boat-lifestyle.com/cdn/shop/files/Trimmers_d0d346cf-b681-49b6-8942-835819bec2d1_small.png?v=1684842853" alt="" />
            <h6>trimmers</h6>
          </div>
          <div className="shopimgs">
            <img src="https://www.boat-lifestyle.com/cdn/shop/files/Chargers_c290cb92-f132-412c-8387-f399a7aba423_small.png?v=1684842854" alt="" />
            <h6>Chargers</h6>
          </div>
          <div className="shopimgs">
            <img src="https://www.boat-lifestyle.com/cdn/shop/files/Powerbanks_small.png?v=1684842853" alt="" />
            <h6>Power banks</h6>
          </div>
          <div className="shopimgs">
            <img src="https://www.boat-lifestyle.com/cdn/shop/files/Cables_3c471ad3-9d08-426a-9d16-a6df00687ff0_small.png?v=1684842854" alt="" />
            <h6>Cables</h6>
          </div>
          <div className="shopimgs">
            <img src="https://www.boat-lifestyle.com/cdn/shop/files/Car-Accessories_6adfe1a9-384f-46ef-b45d-50761eb5cca6_small.png?v=1684842853" alt="" />
            <h6>Car Accessories</h6>
          </div>
          <div className="shopimgs">
            <img src="https://www.boat-lifestyle.com/cdn/shop/files/T-rebel_small.png?v=1684842854" alt="" />
            <h6>Trebel Range</h6>
          </div>
          <div className="shopimgs">
            <img src="https://www.boat-lifestyle.com/cdn/shop/files/Limited-Edition_90154b16-39c9-4461-a96d-a818d791fb99_small.png?v=1684842854" alt="" />
            <h6>Limited Editions</h6>
          </div>
        </div>



        <div className='hi'>
          <div className='hi1'>
            <h1>New Launches</h1>
          </div>
          <div className='hi2'>
            <p>View All</p><FontAwesomeIcon style={{ padding: "10px", fontSize: "15px", color: "blue" }} icon={faCircleArrowRight} />
          </div>
        </div>
        <div className='play'>
          <Card className='layCard'>
            <Card.Img variant="top" className="layImg" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Nirvana_Ion.jpg?v=1697621745/100px180" />
            <Button variant="dark" className="Buttons">New Launch</Button>
            <Button variant="warning" className="Buttons1">20 Hours Playback</Button>
            <Card.Body className='layBody'>
              <Card.Title className='layTitle'><b>Nirvana Eutopia</b></Card.Title>
              <div className='lol'>
                <div className='la1'>
                  <Card.Title className='layTitle1'><b>₹4,499</b> <s style={{ textDecoration: "line-through" }}>₹7,490</s> <b style={{ color: "rgb(19, 185, 132)", fontSize: "15px", fontWeight: "600" }}>40% off</b></Card.Title>
                  <Card.Text className='layText'><FontAwesomeIcon icon={faStar} style={{ color: "gold", fontSize: "15px" }} />4.9 |8<FontAwesomeIcon icon={faCheckCircle} style={{ color: "limegreen", fontSize: "15px" }} /></Card.Text>

                </div>
                <div className='la2'>
                  <Button variant="dark" className="Buttons2">Add To Cart</Button>
                </div>
              </div>
            </Card.Body>
          </Card>

          <Card className='layCard'>
            <Card.Img variant="top" className="layImg" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/131_f04f74fd-45d4-4614-85cf-6ccf69c4cf90.jpg?v=1691395049/100px180" />
            <Button variant="dark" className="Buttons">New Launch</Button>
            <Button variant="warning" className="Buttons1">550W RMS Sound</Button>
            <Card.Body className='layBody'>
              <Card.Title className='layTitle'><b>Aavante Bar 5400D</b></Card.Title>
              <div className='lol'>
                <div className='la1'>
                  <Card.Title className='layTitle1'><b>₹19,999</b> <s style={{ textDecoration: "line-through" }}>₹54,990</s> <b style={{ color: "rgb(19, 185, 132)", fontSize: "15px", fontWeight: "600" }}>64% off</b></Card.Title>
                  <Card.Text className='layText'><FontAwesomeIcon icon={faStar} style={{ color: "gold", fontSize: "15px" }} />5.0 |4<FontAwesomeIcon icon={faCheckCircle} style={{ color: "limegreen", fontSize: "15px" }} /></Card.Text>

                </div>
                <div className='la2'>
                  <Button variant="dark" className="Buttons2">Add To Cart</Button>
                </div>
              </div>
            </Card.Body>
          </Card>

          <Card className='layCard'>
            <Card.Img variant="top" className="layImg" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_161.jpg?v=1686297917/100px180" />
            <Button variant="dark" className="Buttons">New Launch</Button>
            <Button variant="warning" className="Buttons1">8 Hours Playback</Button>
            <Card.Body className='layBody'>
              <Card.Title className='layTitle'><b>Stone Spinx Pro</b></Card.Title>
              <div className='lol'>
                <div className='la1'>
                  <Card.Title className='layTitle1'><b>₹3,499</b> <s style={{ textDecoration: "line-through" }}>₹9,999</s> <b style={{ color: "rgb(19, 185, 132)", fontSize: "15px", fontWeight: "600" }}>65% off</b></Card.Title>
                  <Card.Text className='layText'><FontAwesomeIcon icon={faStar} style={{ color: "gold", fontSize: "15px" }} />5.0 |5<FontAwesomeIcon icon={faCheckCircle} style={{ color: "limegreen", fontSize: "15px" }} /></Card.Text>

                </div>
                <div className='la2'>
                  <Button variant="dark" className="Buttons2">Add To Cart</Button>
                </div>
              </div>
            </Card.Body>
          </Card>

          <Card className='layCard'>
            <Card.Img variant="top" className="layImg" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt-Rockerz-255-Max.jpg?v=1682579854/100px180" />
            <Button variant="dark" className="Buttons">New Launch</Button>
            <Button variant="warning" className="Buttons1">AMOLED Display</Button>
            <Card.Body className='layBody'>
              <Card.Title className='layTitle'><b>Ultima Select</b></Card.Title>
              <div className='lol'>
                <div className='la1'>
                  <Card.Title className='layTitle1'><b>₹3,099</b> <s style={{ textDecoration: "line-through" }}>₹12,999</s> <b style={{ color: "rgb(19, 185, 132)", fontSize: "15px", fontWeight: "600" }}>76% off</b></Card.Title>
                  <Card.Text className='layText'><FontAwesomeIcon icon={faStar} style={{ color: "gold", fontSize: "15px" }} />5.0 |14<FontAwesomeIcon icon={faCheckCircle} style={{ color: "limegreen", fontSize: "15px" }} /></Card.Text>

                </div>
                <div className='la2'>
                  <Button variant="dark" className="Buttons2">Add To Cart</Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>




        <div id='oxes'>
          <div className='oxe'>
            <img src="https://www.boat-lifestyle.com/cdn/shop/files/Group_334305_small.svg?v=1682336123" alt="" />
            <p>1 Year <span>Warranty</span></p>
          </div>
          <div className='oxe'>
            <img src="https://www.boat-lifestyle.com/cdn/shop/files/Group_334304_small.svg?v=1682336123" alt="" />
            <p>7-day <span>Replacement</span></p>
          </div>
          <div className='oxe'>
            <img src="https://www.boat-lifestyle.com/cdn/shop/files/Group_334303_small.svg?v=1682336123" alt="" />
            <p>Free <span>Shipping</span></p>
          </div>
          <div className='oxe'>
            <img src="https://www.boat-lifestyle.com/cdn/shop/files/Group_334302_small.svg?v=1682336123" alt="" />
            <p>GST <span>Billing</span></p>
          </div>
        </div>



        <h1 style={{ fontSize: "30px" }}>Shop by <b>Lifestyle</b></h1>
        <div className='block'>
          <Card className='blockCard'>
            <Card.Img variant="top" className='blockCardimg' src="https://www.boat-lifestyle.com/cdn/shop/files/Audiophile_5.png?v=1696328658" />
            <Card.Body className='blockCardBody'>
              <Card.Title><b>Neckbands</b></Card.Title>
              <p style={{ color: "blue" }}>View All<FontAwesomeIcon style={{ paddingLeft: "10px" }} icon={faCircleArrowRight} /></p>
            </Card.Body>
          </Card>


          <Card className='blockCard'>
            <Card.Img variant="top" className='blockCardimg' src="https://www.boat-lifestyle.com/cdn/shop/files/For_Parties_4x_8df06f56-d656-4af1-8b94-3921c6810c6c.png?v=1696906661" />
            <Card.Body className='blockCardBody'>
              <Card.Title><b>Speakers</b></Card.Title>
              <p style={{ color: "blue" }}>View All<FontAwesomeIcon style={{ paddingLeft: "10px" }} icon={faCircleArrowRight} /></p>
            </Card.Body>
          </Card>


          <Card className='blockCard'>
            <Card.Img variant="top" className='blockCardimg' src="https://www.boat-lifestyle.com/cdn/shop/files/Workaholic_2.png?v=1685083745" />
            <Card.Body className='blockCardBody'>
              <Card.Title><b>Smartwatches</b></Card.Title>
              <p style={{ color: "blue" }}>View All<FontAwesomeIcon style={{ paddingLeft: "10px" }} icon={faCircleArrowRight} /></p>
            </Card.Body>
          </Card>

          <Card className='blockCard'>
            <Card.Img variant="top" className='blockCardimg' src="https://www.boat-lifestyle.com/cdn/shop/files/Fitness_1.png?v=1696906228" />
            <Card.Body className='blockCardBody'>
              <Card.Title><b>Headphones</b></Card.Title>
              <p style={{ color: "blue" }}>View All<FontAwesomeIcon style={{ paddingLeft: "10px" }} icon={faCircleArrowRight} /></p>
            </Card.Body>
          </Card>
        </div>



        <div className='hi'>
          <div className='hi1'>
            <h1>Best Of boAt</h1>
          </div>
          <div className='hi2'>
            <p>View All</p><FontAwesomeIcon style={{ padding: "10px", fontSize: "15px", color: "blue" }} icon={faCircleArrowRight} />
          </div>
        </div>

        <div className='hay'>
          <span>Best Sellers</span>
          <p>Home Theatre Systems & Soundbars</p>
          <p>Top Earbuds</p>
          <p>Top Watches</p>
          <p>Car Accessories</p>

        </div>

        <div className='block'>

          <Card className='blockCard'>
            <Card.Img variant="top" className='blockCardImg' src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_161.jpg?v=1686297917" />
            <Card.Body className='blockCardBody'>
              <Card.Title className='blockCardTitle1'><b>Airdopes 161</b></Card.Title>
              <Card.Title className='blockCardTitle2'><b>₹999</b> <s style={{ textDecoration: "line-through" }}>₹2,490</s> <b style={{ color: "rgb(19, 185, 132)", fontSize: "12px" }}>60% off</b></Card.Title>
              <Button variant="primary" className='Btn2'>Add To Cart</Button>
              <Card.Text className='blockCardText'><FontAwesomeIcon icon={faStar} style={{ color: "gold", fontSize: "15px" }} />4.9 |172<FontAwesomeIcon icon={faCheckCircle} style={{ color: "limegreen", fontSize: "15px" }} /></Card.Text>
            </Card.Body>
          </Card>

          <Card className='blockCard'>
            <Card.Img variant="top" className='blockCardImg' src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Storm_Call_2.webp?v=1698984630" />
            <Card.Body className='blockCardBody'>
              <Card.Title className='blockCardTitle1'><b>Storm Call 2</b></Card.Title>
              <Card.Title className='blockCardTitle2'><b>₹1,799</b> <s style={{ textDecoration: "line-through" }}>₹6,999</s> <b style={{ color: "rgb(19, 185, 132)", fontSize: "12px" }}>74% off</b></Card.Title>
              <Button variant="primary" className='Btn2'>Add To Cart</Button>
              <Card.Text className='blockCardText'><FontAwesomeIcon icon={faStar} style={{ color: "gold", fontSize: "15px" }} />4.8 |21<FontAwesomeIcon icon={faCheckCircle} style={{ color: "limegreen", fontSize: "15px" }} /></Card.Text>
            </Card.Body>
          </Card>


          <Card className='blockCard'>
            <Card.Img variant="top" className='blockCardImg' src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_131_e7e95f2c-0bb3-492e-89df-613a2cfb792f.jpg?v=1686297917" />
            <Card.Body className='blockCardBody'>
              <Card.Title className='blockCardTitle1'><b>Airdopes 131 PRO</b></Card.Title>
              <Card.Title className='blockCardTitle2'><b>₹999</b> <s style={{ textDecoration: "line-through" }}>₹2,990</s> <b style={{ color: "rgb(19, 185, 132)", fontSize: "12px" }}>67% off</b></Card.Title>
              <Button variant="primary" className='Btn2'>Add To Cart</Button>
              <Card.Text className='blockCardText'><FontAwesomeIcon icon={faStar} style={{ color: "gold", fontSize: "15px" }} />4.9 |188<FontAwesomeIcon icon={faCheckCircle} style={{ color: "limegreen", fontSize: "15px" }} /></Card.Text>
            </Card.Body>
          </Card>

          <Card className='blockCard'>
            <Card.Img variant="top" className='blockCardImg' src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt-Airdopes-381.jpg?v=1682576552" />
            <Card.Body className='blockCardBody'>
              <Card.Title className='blockCardTitle1'><b>Airdopes 381</b></Card.Title>
              <Card.Title className='blockCardTitle2'><b>₹1,599</b> <s style={{ textDecoration: "line-through" }}>₹4,990</s> <b style={{ color: "rgb(19, 185, 132)", fontSize: "12px" }}>68% off</b></Card.Title>
              <Button variant="primary" className='Btn2'>Add To Cart</Button>
              <Card.Text className='blockCardText'><FontAwesomeIcon icon={faStar} style={{ color: "gold", fontSize: "15px" }} />4.8 |122<FontAwesomeIcon icon={faCheckCircle} style={{ color: "limegreen", fontSize: "15px" }} /></Card.Text>
            </Card.Body>
          </Card>

        </div>



        <h1 style={{ fontSize: "30px" }}>Join the Tribe</h1>

        <div className='plays'>
          <Card style={{ width: '18rem' }}>
            <video src='https://www.boat-lifestyle.com/cdn/shop/files/quinn_wj3yj65nlj5wjjw3kolikmm0.mp4' style={{ width: '100%' }} controls></video>
            <Card.Body>
              <Card.Title>Airdopes 71</Card.Title>
              <Card.Title className='flaskTitle1'><b>₹2,299</b> <s style={{ textDecoration: "line-through" }}>₹7,990</s> <b style={{ color: "rgb(19, 185, 132)", fontSize: "13px", fontWeight: "600" }}>71% off</b></Card.Title>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <video src='https://www.boat-lifestyle.com/cdn/shop/files/quinn_iopw61jyiqp2ur4lkmb8v99z.mp4' style={{ width: '100%' }} controls></video>
            <Card.Body>
              <Card.Title>Airdopes 161 Pro</Card.Title>
              <Card.Title className='flaskTitle1'><b>₹2,299</b> <s style={{ textDecoration: "line-through" }}>₹7,990</s> <b style={{ color: "rgb(19, 185, 132)", fontSize: "13px", fontWeight: "600" }}>71% off</b></Card.Title>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>


          <Card style={{ width: '18rem' }}>
            <video src='https://www.boat-lifestyle.com/cdn/shop/files/quinn_zntjxmugklrk3vhl1fjxqr5g.mp4' style={{ width: '100%' }} controls></video>
            <Card.Body>
              <Card.Title>Nirvana Ion ANC</Card.Title>
              <Card.Title className='flaskTitle1'><b>₹2,299</b> <s style={{ textDecoration: "line-through" }}>₹7,990</s> <b style={{ color: "rgb(19, 185, 132)", fontSize: "13px", fontWeight: "600" }}>71% off</b></Card.Title>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <video src='https://www.boat-lifestyle.com/cdn/shop/files/quinn_krc7ksul4krxdnfhyr2cwhld.mp4' style={{ width: '100%' }} controls></video>
            <Card.Body>
              <Card.Title>Rockerz 245 V2 Pro</Card.Title>
              <Card.Title className='flaskTitle1'><b>₹2,299</b> <s style={{ textDecoration: "line-through" }}>₹7,990</s> <b style={{ color: "rgb(19, 185, 132)", fontSize: "13px", fontWeight: "600" }}>71% off</b></Card.Title>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>


          <Card style={{ width: '18rem' }}>
            <video src='https://www.boat-lifestyle.com/cdn/shop/files/quinn_rc2jan2cq4z130ey73re7bau.mp4' style={{ width: '100%' }} controls></video>
            <Card.Body>
              <Card.Title>Airdopes 131</Card.Title>
              <Card.Title className='flaskTitle1'><b>₹2,299</b> <s style={{ textDecoration: "line-through" }}>₹7,990</s> <b style={{ color: "rgb(19, 185, 132)", fontSize: "13px", fontWeight: "600" }}>71% off</b></Card.Title>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>






        <div className='hi'>
          <div className='hi1'>
            <h1>Blogs</h1>
          </div>
          <div className='hi2'>
            <p>View All</p><FontAwesomeIcon style={{ padding: "10px", fontSize: "15px", color: "blue" }} icon={faCircleArrowRight} />
          </div>
        </div>

        <div className='hay'>
          <span>Popular</span>
          <p>Latest</p>
        </div>
        <div className='play'>
          <Card style={{ width: '17rem' }}>
            <Card.Img variant="top"  style={{ width: '17rem',height:"10rem" }}src="https://www.boat-lifestyle.com/cdn/shop/articles/3_2_600x.jpg?v=1695972107/100px180" />
            <Card.Body style={{ width: '17rem',height:"13rem" }}>
              <Card.Title>21 March, 2024</Card.Title>
              <Card.Title style={{ fontSize: "16px", fontWeight: "600", whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden" }}>Gaming Earbuds for Travel:<br />Compact and Portable Gaming Solutions</Card.Title>
              <Card.Text style={{ fontSize: "13px", whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden" }}>When nothing can stop a gamer from<br />entering the arena, we have got gaming earbuds so they can&nbsp;enter the arena while they travell.
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '17rem' }}>
            <Card.Img variant="top" style={{ width: '17rem',height:"10rem" }}src="https://www.boat-lifestyle.com/cdn/shop/articles/Aman_600x.png?v=1669814321/100px180" />
            <Card.Body style={{ width: '17rem',height:"13rem" }}>
              <Card.Title>08 March, 2024</Card.Title>
              <Card.Title style={{ fontSize: "16px", fontWeight: "600", whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden" }}>How To Create Watch Faces<br />Using The Watch Face Studio</Card.Title>
              <Card.Text style={{ fontSize: "13px", whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden" }}>
                Why Stick to a few watch faces on your<br /> smartwatch when you can many. Check out our explainer video on how to customise your watch face.
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '17rem' }}>
            <Card.Img variant="top" style={{ width: '17rem',height:"10rem" }}src="https://www.boat-lifestyle.com/cdn/shop/articles/1_1_600x.jpg?v=1695929892/100px180" />
            <Card.Body style={{ width: '17rem',height:"13rem" }}>
              <Card.Title>13 March, 2024</Card.Title>
              <Card.Title style={{ fontSize: "16px", fontWeight: "600", whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden" }}>ANC for Work: How Noise-<br />Cancelling Headphones Can Boost Productivity</Card.Title>
              <Card.Text style={{ fontSize: "13px", whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden" }}>
                Noise at the workplace can become<br /> annoying sometimes. Don't worry, we have a we have a one stop shop to help you concentrate on your works&nbsp; </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '17rem' }}>
            <Card.Img variant="top" style={{ width: '17rem',height:"10rem" }}src="https://www.boat-lifestyle.com/cdn/shop/articles/Gaming_Earbuds_for_Travel-_Compact_and_Portable_Gaming_Solutions_600x.png?v=1711005465/100px180" />
            <Card.Body style={{ width: '17rem',height:"13rem" }}>
              <Card.Title>05 April, 2024</Card.Title>
              <Card.Title style={{ fontSize: "16px", fontWeight: "600", whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden" }}>Shout Out to RCB and GT Fans:<br />Something's Coming Soon</Card.Title>
              <Card.Text style={{ fontSize: "13px", whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden" }}>
                It's IPL 2024 and we have something<br /> coming up for Gujarat Titans and Royal Challengers Bangalore fans. Stay Tuned!
              </Card.Text>
              <Button variant="primary">Read More</Button>
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
    );
  }
  export default Home