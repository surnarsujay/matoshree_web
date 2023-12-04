import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { FaArrowRight } from "react-icons/fa";
import ev1 from '../images/ev1.jpg';
import ev2 from '../images/ev2.jpg';
import ev3 from '../images/ev3.jpg';
import ev4 from '../images/ev4.jpg';
import ev5 from '../images/ev5.jpg';
import ev6 from '../images/ev6.jpg';
import ev7 from '../images/ev7.jpeg';
import ev8 from '../images/ev8.jpg';
import ev9 from '../images/ev9.jpeg';
import Footer from '../components/Footer';
import Image from 'react-bootstrap/Image';
import axios from 'axios';

const Events = () => {
    const cardStyle = {
        width: '100%',
        marginBottom: '40px',
        height: '450px'
    };

    const imgStyle = {
        height: '200px',
        objectFit: 'cover',
        marginTop: '10px',
    };

    const imageStyles = {
        width: '100%',
        height: '500px',
        objectFit: 'cover',
        marginTop: '100px',
    };

    const eventtext = {
        fontFamily: 'Montseerrat',
        fontWeight: '400',
        fontSize: '40px',
        lineHeight: '1.7',
        color: 'rgb(15, 15, 15)',
        margin: '0px',
        textAlign: 'center',
        marginTop: '20px',
    };

    const [eventData, setEventData] = useState([]);

    useEffect(() => {
        // Fetch data from the API endpoint
        // axios.get('http://localhost:3001/api/events')
            axios.get('https://matoshreesite.lissomtech.in/api/events')
            .then(response => {
                // Log the fetched data to the console
                console.log('Fetched Data:', response.data);

                // Set the fetched data to the state
                setEventData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);



    const [eventheadData, setEventHeadData] = useState([]);

    useEffect(() => {

        // axios.get('http://localhost:3001/api/get_event_header')
            axios.get('https://matoshreesite.lissomtech.in/api/get_event_header')
            .then(response => {
                console.log('Fetched Data:', response.data);
                setEventHeadData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);



    return (
        <>
            <div className='event-container'>

                {/* <Image src={ev} fluid style={imageStyles} /> */}
                {
                    eventheadData.map((data, index) => (
                        <Image src={`data:image/jpeg;base64,${data.head_Event}`} fluid style={imageStyles} />
                    ))
                }


                <p style={eventtext}>Events</p>

                <Container>
                    <Row>
                        {/* Project Updates */}
                        <Col xs={12} sm={6} md={4} lg={4}>
                            <Card style={cardStyle}>
                                <Card.Img variant="top" src={ev1} alt="Project Update" style={imgStyle} />
                                <Card.Body>
                                    <Card.Title>Project Updates</Card.Title>
                                    <Card.Text>Stay informed about our ongoing construction projects.</Card.Text>
                                </Card.Body>
                                <br />


                                <p className="learn-more-link">
                                    LEARN MORE<FaArrowRight style={{ marginLeft: "3px" }} />
                                </p>
                            </Card>
                        </Col>

                        {/* Groundbreaking Ceremonies */}
                        <Col xs={12} sm={6} md={4} lg={4}>
                            <Card style={cardStyle}>
                                <Card.Img variant="top" src={ev2} alt="Groundbreaking Ceremony" style={imgStyle} />
                                <Card.Body>
                                    <Card.Title>Groundbreaking Ceremonies</Card.Title>
                                    <Card.Text>Join us for the groundbreaking of our exciting new projects.</Card.Text>
                                    <Card.Text>Date: October 15, 2023</Card.Text>
                                    <Card.Text>Location: Construction Site, City</Card.Text>
                                </Card.Body>
                                <p className="learn-more-link">
                                    LEARN MORE<FaArrowRight style={{ marginLeft: "3px" }} />
                                </p>
                            </Card>
                        </Col>

                        <Col xs={12} sm={6} md={4} lg={4}>

                            {/* Project Completion Celebrations */}
                            <Card style={cardStyle}>
                                <Card.Img variant="top" src={ev3} alt="Project Completion" style={imgStyle} />
                                <Card.Body>
                                    <Card.Title>Project Completion Celebrations</Card.Title>
                                    <Card.Text>Celebrate the successful completion of our latest construction projects.</Card.Text>
                                    <br />

                                </Card.Body>
                                <p className="learn-more-link">
                                    LEARN MORE<FaArrowRight style={{ marginLeft: "3px" }} />
                                </p>
                            </Card>
                        </Col>


                        <Col xs={12} sm={6} md={4} lg={4}>
                            {/* Industry Events and Seminars */}
                            <Card style={cardStyle}>
                                <Card.Img variant="top" src={ev4} alt="Project Update" style={imgStyle} />

                                <Card.Body>
                                    <Card.Title>Industry Events and Seminars</Card.Title>
                                    <Card.Text>Join us at industry-related events and seminars.</Card.Text>
                                    <Card.Text>Date: November 5-7, 2023</Card.Text>
                                    <Card.Text>Venue: Convention Center, City</Card.Text>
                                </Card.Body>
                                <p className="learn-more-link">
                                    LEARN MORE<FaArrowRight style={{ marginLeft: "3px" }} />
                                </p>
                            </Card>

                        </Col>



                        <Col xs={12} sm={6} md={4} lg={4}>
                            {/* Community Engagement */}
                            <Card style={cardStyle}>
                                <Card.Img variant="top" src={ev5} alt="Project Update" style={imgStyle} />

                                <Card.Body>
                                    <Card.Title>Community Engagement</Card.Title>
                                    <Card.Text>Learn about our community involvement and initiatives.</Card.Text>
                                    <Card.Text>We recently sponsored a local charity event supporting...</Card.Text>
                                </Card.Body>
                                <br />
                                <p className="learn-more-link">
                                    LEARN MORE<FaArrowRight style={{ marginLeft: "3px" }} />
                                </p>
                            </Card>
                        </Col>

                        <Col xs={12} sm={6} md={4} lg={4}>
                            {/* Job Fairs and Recruitment */}
                            <Card style={cardStyle}>
                                <Card.Img variant="top" src={ev6} alt="Project Update" style={imgStyle} />

                                <Card.Body>
                                    <Card.Title>Job Fairs and Recruitment</Card.Title>
                                    <Card.Text>Explore career opportunities with us at our upcoming job fairs.</Card.Text>
                                    <Card.Text>Date: November 20, 2023</Card.Text>
                                    <Card.Text>Location: Career Center, City</Card.Text>
                                </Card.Body>
                                <p className="learn-more-link">
                                    LEARN MORE<FaArrowRight style={{ marginLeft: "3px" }} />
                                </p>
                            </Card>
                        </Col>


                        <Col xs={12} sm={6} md={4} lg={4}>
                            {/* Webinars and Workshops */}
                            <Card style={cardStyle}>
                                <Card.Img variant="top" src={ev7} alt="Project Update" style={imgStyle} />

                                <Card.Body>
                                    <Card.Title>Webinars and Workshops</Card.Title>
                                    <Card.Text>Participate in educational webinars and workshops on construction topics.</Card.Text>
                                    <Card.Text>Next Webinar: "Advanced Construction Techniques" on October 25, 2023</Card.Text>
                                </Card.Body>
                                <p className="learn-more-link">
                                    LEARN MORE<FaArrowRight style={{ marginLeft: "3px" }} />
                                </p>
                            </Card>

                        </Col>


                        <Col xs={12} sm={6} md={4} lg={4}>
                            {/* Safety Awareness Programs */}
                            <Card style={cardStyle}>
                                <Card.Img variant="top" src={ev8} alt="Safety Awareness" style={imgStyle} />
                                <Card.Body>
                                    <Card.Title>Safety Awareness Programs</Card.Title>
                                    <Card.Text>Stay safe with our safety awareness programs and updates.</Card.Text>
                                </Card.Body>
                                <br />
                                <br />
                                <br />

                                <p className="learn-more-link">
                                    LEARN MORE<FaArrowRight style={{ marginLeft: "3px" }} />
                                </p>
                            </Card>
                        </Col>

                        <Col xs={12} sm={6} md={4} lg={4}>
                            {/* Client Appreciation Events */}
                            <Card style={cardStyle}>
                                <Card.Img variant="top" src={ev9} alt="Project Update" style={imgStyle} />

                                <Card.Body>
                                    <Card.Title>Client Appreciation Events</Card.Title>
                                    <Card.Text>Join us in expressing our gratitude to our valued clients.</Card.Text>
                                    <Card.Text>Testimonials and more...</Card.Text>
                                </Card.Body>
                                <br />


                                <p className="learn-more-link">
                                    LEARN MORE<FaArrowRight style={{ marginLeft: "3px" }} />
                                </p>
                            </Card>
                        </Col>




                        {/* 
                        {eventData.map((event, index) => (
                            <Col key={index} xs={12} sm={6} md={4} lg={4}>
                                <Card style={cardStyle}>
                                    <Card.Img variant="top" src={event.img} alt={`Event Image ${index + 1}`} style={imgStyle} />
                                    <Card.Body>
                                        <Card.Title>{event.EventName}</Card.Title>
                                        <Card.Text>{event.Description}</Card.Text>
                                        <Card.Text>Date: {event.EventDate}</Card.Text>
                                        <Card.Text>Venue: {event.EventLocation}</Card.Text>
                                    </Card.Body>
                                    <p className="learn-more-link">
                                        LEARN MORE <FaArrowRight style={{ marginLeft: "3px" }} />
                                    </p>
                                </Card>
                            </Col>
                        ))} */}



                        {eventData.map((event, index) => (
                            <Col key={index} xs={12} sm={6} md={4} lg={4}>
                                <Card style={cardStyle}>
                                    <Card.Img variant="top" src={`data:image/jpeg;base64,${event.Img}`} alt={`Event Image ${index + 1}`} style={imgStyle} />

                                    <Card.Body>
                                        <Card.Title>{event.EventName}</Card.Title>
                                        <Card.Text>{event.Description}</Card.Text>
                                        <Card.Text>Date: {event.EventDate}</Card.Text>
                                        <Card.Text>Venue: {event.EventLocation}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}


                    </Row>
                </Container>
            </div>
            <Footer />
        </>
    );
};

export default Events;
