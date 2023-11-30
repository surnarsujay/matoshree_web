

import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import'../css/CardSlider.css'
import Card from 'react-bootstrap/Card';

const CardSlider = () => {

    const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const cards = [
    { title: 'Who We Are', text: 'Established in 2015, Matoshree Interiors has been at the forefront of the construction and interior design industry, consistently delivering exceptional results for our clients. We are a dynamic and innovative construction company dedicated to transforming your visions into reality.' },
    { title: 'Our Mission', text: 'At Matoshree Interiors, our mission is to be your trusted partner in creating spaces that inspire and endure. We aim to provide top-notch construction and interior design services that reflect our commitment to quality, craftsmanship, and customer satisfaction.' },
    { title: 'Our Vision', text: 'To be a globally recognized professional interior design company, providing solutions in the field of high-end corporate, commercial, and residential interiors.' },
    { title: 'Expertise', text: 'Our team of experienced architects, engineers, and interior designers brings a wealth of knowledge and creativity to every project. We stay up-to-date with the latest industry trends and technologies to ensure our clients receive cutting-edge solutions.' },
    { title: 'Quality Craftsmanship', text: 'We take pride in our meticulous attention to detail and unwavering dedication to quality. From the foundation to the finishing touches, we prioritize excellence at every stage of construction and design.' },
    { title: 'Client-Centric Approach', text: 'We believe in the power of collaboration. Our client-centric approach means we work closely with you to understand your unique needs, preferences, and budget constraints, ensuring that the final result aligns perfectly with your vision..' },
    { title: 'Timely Delivery', text:'We understand the importance of deadlines and strive to complete projects on time and within budget. Our efficient project management ensures that your project progresses smoothly from start to finish.' },
  ];



  
const cardHeaderStyle1 = {
  marginBottom: '20px',
  fontFamily: 'Courgette',
  fontSize: '20px',
  lineHeight: '1.1',
  color:  '#ffa500',
  margin: '0',
  // marginTop :"20px",

};

const cardTitleStyle1 = {
  fontFamily: 'Montserrat',
  fontWeight: 400,
  fontSize: '35px',
  lineHeight: 1.7,
  color: 'black',
  margin: '0px'
};


  return (

    <>
    {/* <Card style={Maincard}> */}
        

        <Card.Header  style={{marginTop:'50px'}}>
        <h1  style={cardTitleStyle1} >About Matoshree Interiors</h1>
            <h3 style={cardHeaderStyle1}>Building Dreams, Crafting Excellence</h3>
        </Card.Header>

           
        <div className="card-slider-container">
      
      <Slider {...settings} ref={sliderRef}>
        {cards.map((card, index) => (
          <div key={index} className="custom-card">
            <h2>{card.title}</h2>
            <p>{card.text}</p>
          </div>
        ))}
      </Slider>
      <button className="slider-button slider-button-left" onClick={() => sliderRef.current.slickPrev()}>
        <FaChevronLeft />
      </button>
      <button className="slider-button slider-button-right" onClick={() => sliderRef.current.slickNext()}>
        <FaChevronRight />
      </button>
    </div>
               
                      
                    {/* </Card> */}
                
</>

    
  );
};

export default CardSlider;
