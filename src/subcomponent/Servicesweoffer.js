import React, { useState, useEffect } from "react";
import Projectvd from '../videos/service.mp4';
import { Card } from "react-bootstrap";
import '../css/Servicesweoffer.css';
import Gypsumpng from '../images/gypsum.png';
import Estimatepng from '../images/Estimate.png'
import Estimate2png from '../images/Estimate2.png'
import interiorpng from '../images/interior.png'
import Materialsupplypng from '../images/materialsupply.png';
import Carpentrypng from '../images/carpentry.png'
import Paintingpng from '../images/painting.png'
import { FaArrowRight } from "react-icons/fa";
import furniture from '../images/furniture.png'
import Aluminiumpng from '../images/Aluminium.jpg';
import Corianpng from '../images/corian.png'
import Footer from "../components/Footer";
import { Link, Outlet } from 'react-router-dom'

import axios from "axios";

function Servicesweoffer() {


    const [servicesData, setServicesData] = useState([]);

    useEffect(() => {

        axios.get('http://localhost:3001/api/getservices')
            //axios.get('https://matoshreewebsite.lissomtech.in/APIMatoshree/api/events')
            .then(response => {
                console.log('Fetched Data:', response.data);
                setServicesData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
    return (
        <div class="header-intro">
            <Card className="video-card" >
                <video autoPlay muted loop controls={false} >
                    <source src={Projectvd} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </Card>
            <br></br>
            <div className="container-fluid">

                <div className="text-project">
                    <h1 className="text-project">Services We Offer</h1>
                </div>
                <br></br>
                <div className="row">

                    <div className="col-md-4">
                        <div className="card service" >
                            <img src={interiorpng} className="card-img-top" alt="Image 1" style={{ height: "300px" }} />
                            <div className="card-body">
                                <h5 className="card-title services">Interior Work Design</h5>
                                <nav>
                                    <Link to='glasswork' className="learn-more-link">

                                        LEARN MORE<FaArrowRight style={{ marginLeft: "3px" }} />

                                    </Link>
                                </nav>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src={Estimate2png} className="card-img-top" alt="Image 2" style={{ height: "300px" }} />
                            <div className="card-body">
                                <h5 className="card-title services">Estimating & Costing For Interior</h5>
                                <nav>
                                    <Link to='estimate' className="learn-more-link">

                                        LEARN MORE<FaArrowRight style={{ marginLeft: "3px" }} />

                                    </Link>
                                </nav>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src={Estimatepng} className="card-img-top" alt="Image 3" style={{ height: "300px" }} />
                            <div className="card-body">
                                <h5 className="card-title services">Interior Work Budgeting</h5>

                                <nav>
                                    <Link to='budget' className="learn-more-link">

                                        LEARN MORE<FaArrowRight style={{ marginLeft: "3px" }} />


                                    </Link>
                                </nav>


                            </div>
                        </div>
                    </div>
                </div>

                <br></br>
                <br></br>
                <div className="row">

                    <div className="col-md-4">
                        <div className="card" >
                            <img src={Materialsupplypng} className="card-img-top" alt="Image 1" style={{ height: "300px" }} />
                            <div className="card-body">
                                <h5 className="card-title services">Interior Item and Material Supply</h5>

                                <nav>
                                    <Link to='flooringwork' className="learn-more-link">

                                        LEARN MORE<FaArrowRight style={{ marginLeft: "3px" }} />


                                    </Link>
                                </nav>


                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src={Carpentrypng} className="card-img-top" alt="Image 2" style={{ height: "300px" }} />
                            <div className="card-body">
                                <h5 className="card-title services">On Site Carpentry Work</h5>

                                <nav>
                                    <Link to='carpentrywork' className="learn-more-link">

                                        LEARN MORE<FaArrowRight style={{ marginLeft: "3px" }} />


                                    </Link>
                                </nav>


                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src={furniture} className="card-img-top" alt="Image 3" style={{ height: "300px" }} />
                            <div className="card-body">
                                <h5 className="card-title services">Modular Furniture Works</h5>


                                <nav>
                                    <Link to='furniturework' className="learn-more-link">

                                        LEARN MORE<FaArrowRight style={{ marginLeft: "3px" }} />


                                    </Link>
                                </nav>


                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div className="row">

                    <div className="col-md-4">
                        <div className="card" >
                            <img src={Gypsumpng} className="card-img-top" alt="Image 1" style={{ height: "300px" }} />
                            <div className="card-body">
                                <h5 className="card-title services">All Gypsum Works</h5>

                                <nav>
                                    <Link to='gypsumwork' className="learn-more-link">

                                        LEARN MORE<FaArrowRight style={{ marginLeft: "3px" }} />


                                    </Link>
                                </nav>


                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src={Paintingpng} className="card-img-top" alt="Image 2" style={{ height: "300px" }} />
                            <div className="card-body">
                                <h5 className="card-title services">All Painting Works</h5>

                                <nav>
                                    <Link to='paintaingwork' className="learn-more-link">

                                        LEARN MORE<FaArrowRight style={{ marginLeft: "3px" }} />


                                    </Link>
                                </nav>


                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src={Aluminiumpng} className="card-img-top" alt="Image 3" style={{ height: "300px" }} />
                            <div className="card-body">
                                <h5 className="card-title services">All Aluminium Works</h5>


                                <nav>
                                    <Link to='aluminiumwork' className="learn-more-link">

                                        LEARN MORE<FaArrowRight style={{ marginLeft: "3px" }} />


                                    </Link>
                                </nav>


                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div className="row">

                    <div className="col-md-4">
                        <div className="card" >
                            <img src={Corianpng} className="card-img-top" alt="Image 1" style={{ height: "300px" }} />
                            <div className="card-body">
                                <h5 className="card-title services">Corian Material Works</h5>

                                <nav>
                                    <Link to='corianwork' className="learn-more-link">

                                        LEARN MORE<FaArrowRight style={{ marginLeft: "3px" }} />


                                    </Link>
                                </nav>


                            </div>
                        </div>
                    </div>
                </div>

                <div className="row" style={{ marginTop: "40px" }}>
                    {servicesData.map((gypsum, index) => (
                        <div key={index} className="col-md-4"  style={{ marginTop: "40px" }}>
                            <div className="card">
                                <img
                                    src={`data:image/jpeg;base64,${gypsum.Service_img}`}
                                    className="card-img-top"
                                    alt={`Image ${index + 1}`}
                                    style={{ height: "300px" }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title services">{gypsum.Service_Name}</h5>
                                    <nav>
                                        <Link className="learn-more-link">
                                            LEARN MORE <FaArrowRight style={{ marginLeft: "3px" }} />
                                        </Link>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    )
}
export default Servicesweoffer;