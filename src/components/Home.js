// import React from 'react'
// import HomeVideo from './HomeVideo'
// import CardSlider from './CardSlider'
// import Service from './Service'
// import Projects from './Projects'
// import Slider from './Slider'
// import ReviewSlider from './ReviewSlider'
// import EnquiryForm from './EnquiryForm'
// import Navbars from './Navbars'
// import Footer from './Footer'

// import '../css/Home.css'
// const Home = () => {
//   return (
//     <div className=' component-class'>
//         <Navbars/>
//         <HomeVideo/>
//         <CardSlider/>
//         <Service/>
//         <Projects/>
//         <Slider/>
//         <ReviewSlider/>
//         <EnquiryForm/>
//         <Footer/>
     
//     </div>
//   )
// }

// export default Home

/* {* import React ,{useState}from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Career from '../images/career.jpg';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Footer from './Footer';
import Card from 'react-bootstrap/Card';
import { FaEnvelope } from 'react-icons/fa'; */


import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Projects from './Projects';
import HomeVideo from './HomeVideo'
import CardSlider from './CardSlider'
import Service from './Service'
import Slider from './Slider'
import ReviewSlider from './ReviewSlider'
import EnquiryForm from './EnquiryForm'
import Navbars from './Navbars'
import Footer from './Footer'
import '../css/Home.css'
const Home = () => {
  return (
    <div className='component-class'>

      <Row>
          <Col xs={12}>
          <Navbars />
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <HomeVideo />
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <CardSlider />
          </Col>

        </Row>

        <Row>
          <Col xs={12}>
            <Service />
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <Projects />
          </Col>
        </Row>
  
        <Row>
          <Col xs={12}>
          <Slider/>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
          <ReviewSlider/>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
          <EnquiryForm/>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
          <Footer/>
          </Col>
        </Row>


     
    </div>
  )
}

export default Home;



