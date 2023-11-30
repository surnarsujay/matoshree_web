import React, { useEffect, useState } from "react";
import About from '../images/About.png';
import leader1 from '../images/leader1.jpg'
import learder2 from '../images/leader2.jpg'
import '../css/Aboutus.css'
import Footer from "../components/Footer";
import axios from "axios";
function Aboutus() {

    const [aboutData, setAboutData] = useState([]);

    useEffect(() => {

        axios.get('http://localhost:3001/api/getaboutus')
            //axios.get('https://matoshreewebsite.lissomtech.in/APIMatoshree/api/events')
            .then(response => {
                console.log('Fetched Data:', response.data);
                setAboutData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <>
            <div className="container-fluid" style={{ marginTop: '100px' }}>
                {/* <div className="image-container">
                <img src={About} className="card-img" alt="Image 2" style={{ height: "380px" }} />
                <div className="text-start">
                    <h1 class="text" style={{ fontFamily: "Montseerrat", fontSize: "40px", color: "#5e2200", fontWeight: "800" }}>WE PROMISE</h1>
                    <h5 className="text" style={{ fontFamily: "Montseerrat", fontSize: "20px", color: "#5e2200", fontWeight: "400" }}>Quality | Perfection | Customer Satisfaction</h5>
                </div>
            </div> */}

                {
                    aboutData.map((data, index) => (
                        <div className="image-container" key={index}>
                            <img src={`data:image/jpeg;base64,${data.Aboutus_img}`} className="card-img" alt="Image 2" style={{ height: "380px" }} />
                            <div className="text-start">
                                <h1 class="text" style={{ fontFamily: "Montseerrat", fontSize: "40px", color: "#5e2200", fontWeight: "800" }}>WE PROMISE</h1>
                                <h5 className="text" style={{ fontFamily: "Montseerrat", fontSize: "20px", color: "#5e2200", fontWeight: "400" }}>Quality | Perfection | Customer Satisfaction</h5>
                            </div>
                        </div>


                    ))
                }

                <br></br>

                <div class="card info col-md-12">
                    <div class="card-body">
                        <h1 style={{ fontFamily: "Montseerrat", fontSize: "30px", color: "black", fontWeight: "400", textAlign: "center" }}>About Us</h1>
                        <p style={{ fontFamily: "Montseerrat", fontSize: "15px", color: "#666666", fontWeight: "400" }}>Established in 2015, Matoshree Interiors has been at the forefront of the construction and interior design industry, consistently delivering exceptional results for our clients. We are a dynamic and innovative construction company dedicated to transforming your visions into reality.
                            <br></br>
                            <br></br>
                            Our team of experienced architects, engineers, and interior designers brings a wealth of knowledge and creativity to every project. We stay up-to-date with the latest industry trends and technologies to ensure our clients receive cutting-edge solutions.
                            <br></br>
                            <br></br>
                            We take pride in our meticulous attention to detail and unwavering dedication to quality. From the foundation to the finishing touches, we prioritize excellence at every stage of construction and design.
                            <br></br>
                            <br></br>
                            We believe in the power of collaboration. Our client-centric approach means we work closely with you to understand your unique needs, preferences, and budget constraints, ensuring that the final result aligns perfectly with your vision..
                            <br></br>
                            <br></br>

                            We understand the importance of deadlines and strive to complete projects on time and within budget. Our efficient project management ensures that your project progresses smoothly from start to finish.

                        </p>
                    </div>
                </div>
                <div className="founder-info">
                    <div className="line"></div>
                    <div className="centered-text">
                        <h2>Our Founder's</h2>
                    </div>
                    <div className="line"></div>
                </div>

                <div className="row">
                    <div class="card mb-3" style={{ maxWidth: "700px" }} >
                        <div class="row g-0">
                            <div class="col-md-6">
                                <img src={leader1} class="img-fluid rounded-start" alt="..." style={{ padding: "20px", paddingTop: "55px" }} />
                            </div>
                            <div class="col-md-6">
                                <div class="card-body">
                                    <h3 class="card-title" style={{ fontFamily: "Montseerrat", fontSize: "30px", fontWeight: "400", color: 'hsl(21, 62%, 45%)' }}>Mahesh Dange</h3>
                                    <h4 class="card-title" style={{ fontFamily: "Montseerrat", fontSize: "25px", fontWeight: "400" }}>Director & Founder</h4>
                                    <h5 class="card-title" style={{ fontFamily: "Montseerrat", fontSize: "20px", fontWeight: "400" }}>ME Civil Consrtuction & Managment</h5>
                                    <p class="card-text">The journey of thousand miles begins with the single step. We also started in the same manner but end is yet to achieve. In this journey our clients are holding our hands and consistently showing faith in our work and providing us new opportunities. We are inspired by innovation and yes our design meets innovation.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6"></div>
                    <div class="card mb-3" style={{ maxWidth: "700px", float: "right" }} >
                        <div class="row g-0">
                            <div class="col-md-6" >
                                <img src={learder2} class="img-fluid rounded-start" alt="..." style={{ padding: "20px", paddingTop: "55px" }} />
                            </div>
                            <div class="col-md-6">
                                <div class="card-body">
                                    <h3 class="card-title" style={{ fontFamily: "Montseerrat", fontSize: "30px", fontWeight: "400", color: 'hsl(21, 62%, 45%)' }}>Deepak Kohak</h3>
                                    <h4 class="card-title" style={{ fontFamily: "Montseerrat", fontSize: "25px", fontWeight: "400" }}>Director & Co Founder</h4>
                                    <h5 class="card-title" style={{ fontFamily: "Montseerrat", fontSize: "20px", fontWeight: "400" }}>ME Civil Consrtuction & Managment</h5>
                                    <p class="card-text">With the great vision and mission we founded "Matoshree Interiors" since then we are giving our best. The journey started with doing every single work and now it's a great honor to lead such a enthusiastic team. It's been great pleasure when our work gets admired by our clients. We are always committed to give best service to our valuable clients.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="col-md-6" style={{ padding: "20px", paddingTop: "10px", height: "20px" }}></div>
            </div>

            <Footer />
        </>
    )
}
export default Aboutus;