import React, { useState } from 'react';
import '../css/News.css';
import { Card, Row, Col, Button } from 'react-bootstrap';
import newsImage from '../images/News.jpg';
import news1Image from '../images/News1.jpg';
import news2Image from '../images/News2.jpg';
import news3Image from '../images/News3.jpg';
import { FaArrowRight } from "react-icons/fa";
import Footer from '../components/Footer';

function News() {
    const [showFullContent, setShowFullContent] = useState({});

    const toggleFullContent = (id) => {
        setShowFullContent((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    const newsData = [
        {
            id: 1,
            title: 'Award for Excellence in Built Environment',
            content:
                'Indian Buildings Congress awarded our project District Office Complex, Mysuru.with Commendation Certificate for 2019 in the category ” Excellence in Built Environment”. The ceremony was held on 6th January 2020.Indian Buildings Congress awarded our project District Office Complex, Mysuru.with Commendation Certificate for 2019 in the category ” Excellence in Built Environment”. The ceremony was held on 6th January 2020.',
            imgSrc: news1Image,
        },
        {
            id: 2,
            title: 'NIT Campus Andhra Pradesh is Awarded',
            content: 'First Convocation of National Institute of Technology (NIT), Tadepalligudem, AP, was held on 24th December 2019. The Hon’ble Shri. Venkaiah Naidu, Vice President of India presided over the function as the Chief Guest.First Convocation of National Institute of Technology (NIT), Tadepalligudem, AP, was held on 24th December 2019. The Hon’ble Shri. Venkaiah Naidu, Vice President of India presided over the function as the Chief Guest.',
            imgSrc: news2Image,
        },
        {
            id: 3,
            title: 'BAI - Well Built Structure Award',
            content: 'Builder’s Association of India, Pune Centre, presented the Shirke Group with “Well Built Structure” awards  for year 2019 in two categories. The MHADA Project for Affordable Housing at Pimpri Waghere, Pune and Residential Housing Complex at Hinjewadi Pune Builder’s Association of India, Pune Centre, presented the Shirke Group with “Well Built Structure” awards  for year 2019 in two categories. The MHADA Project for Affordable Housing at Pimpri Waghere, Pune and Residential Housing Complex at Hinjewadi Pune',
            imgSrc: news3Image,
        },
    ];

    return (
        <div>
      <br></br>
            <div className='img1'>
                    <img src={newsImage} style={{ height: '400px', width: '100%' ,marginTop:'40px'}} />
                </div>
                <h1 className="text-center" style={{ padding: '10px' }}>News</h1>
            <Card className="unewslist" >
            
                <Row className="rownews">
                    {newsData.map((item) => (
                        <Col className='colnews' key={item.id} md={4}>
                            <div className="card news">
                                <img src={item.imgSrc} className="card-img-top" />
                                <div className="card-body">
                                    <h2 className='newstitle'>{item.title}</h2>
                                    {showFullContent[item.id] ? (
                                        <p className='newspara'>{item.content}</p>
                                    ) : (
                                        <p className='newspara'>{item.content.substring(0, 150)}...</p>
                                    )}
                                    <Button className='newsreadmore' onClick={() => toggleFullContent(item.id)} style={{ background: 'none', border: 'none', padding: 0, margin: 0 }}>
                                        {showFullContent[item.id] ? 'Read Less' : 'Read More'}<FaArrowRight style={{ marginLeft: "3px" }} />
                                    </Button>

                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Card>
            <Footer/>
        </div>
    );
}

export default News;