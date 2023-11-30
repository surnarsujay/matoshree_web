import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import Estimate3png from '../images/Estimate3.png'
import Estimate4png from '../images/Estimate4.png';
import Estimate5png from '../images/Estimate5.png';
import Estimate6png from '../images/Estimate6.png';
import Estimate7png from '../images/Estimate7.png';
import bg from '../images/bg.png'
import Estimatevd3mp4 from '../videos/Estimatevd3.mp4'
import { Card } from "react-bootstrap";
import '../css/Estimatecosting.css';
import Footer from "../components/Footer";
function Estimatecosting() {
    return (
        <div className="container-fluid estimate">
            <Card className="video-card" >
                    <video autoPlay muted loop controls={false} >
                        <source src={Estimatevd3mp4} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </Card>
            
            <div className="container text">
                <p>
                    Painting your home is exciting, but choosing the right colours, products, and house painters while ensuring your family’s safety can be a huge task. That's where we come in with our aim to make home painting a safe and great experience! With Asian Paints Safe Painting Services, re-imagine your home as a huge canvas.
                    <br></br>
                    <br></br>
                    Start your consultation with Matoshree Interior Safe Painting Services and let us guide you through all the questions you may have.
                </p>
            </div>
            <div class="card mb-3" >
                <div class="row g-0" >
                    <div class="col-md-2" >
                        <img src={Estimate7png} class="img-fluid rounded-start" alt="..." style={{ height: "200px", width: "400px" }} />
                    </div>
                    <div class="col-md-10" >
                        <div class="card-body" >
                            <h2 class="card-title" style={{ textAlign: "center", marginTop: "50px",fontWeight:"400 ",fontSize:"30px",fontFamily:"Montseerrat",lineHeight:"1.7" }}>To paint your home, please give us a call at.

                                <BiPhoneCall style={{ marginLeft: "10px",height:"34px",width:"34px",color:"#c271c9" }} /> 9420950999

                            </h2>

                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <div className="text-text">
                <h1 style={{ textAlign: "center",fontWeight:"400 ",fontSize:"30px",fontFamily:"Montseerrat",lineHeight:"1.7"  }}>Why choose us?</h1>
            </div>
            <div className="row">
                <div className="col-md-2">
                    <img alt="services-sps-why-chose-our-services-trained-professional-icon-asian-paints" title="services-sps-why-chose-our-services-trained-professional-icon-asian-paints" src="//static.asianpaints.com/content/dam/asian_paints/sps_overhaul/webp-images/services/services-sps-why-chose-our-services-trained-professional-icon-asian-paints.webp" />
                    <br></br>
                    <br></br>
                    <p>TRAINED PROFESSIONAL</p>
                </div>
                <div className="col-md-2">
                    <img alt="services-sps-why-chose-our-services-technical-site-evaluation-icon-asian-paints" title="services-sps-why-chose-our-services-technical-site-evaluation-icon-asian-paints" src="//static.asianpaints.com/content/dam/asian_paints/sps_overhaul/webp-images/services/services-sps-why-chose-our-services-technical-site-evaluation-icon-asian-paints.webp" />
                    <br></br>
                    <br></br>
                    <p>TECHNICAL SITE EVALUATION</p>
                </div>
                <div className="col-md-2">
                    <img alt="services-sps-why-chose-our-services-personalized-colour-consultation-icon-asian-paints" title="services-sps-why-chose-our-services-personalized-colour-consultation-icon-asian-paints" src="//static.asianpaints.com/content/dam/asian_paints/sps_overhaul/webp-images/services/services-sps-why-chose-our-services-personalized-colour-consultation-icon-asian-paints.webp" />
                    <br></br>
                    <br></br>
                    <p>PERSONALIZED COLOUR CONSULTATION</p>
                </div>
                <div className="col-md-2">
                    <img alt="services-sps-why-chose-our-services-stringent-safety-protocol-icon-asian-paints" title="services-sps-why-chose-our-services-stringent-safety-protocol-icon-asian-paints" src="//static.asianpaints.com/content/dam/asian_paints/sps_overhaul/webp-images/services/services-sps-why-chose-our-services-stringent-safety-protocol-icon-asian-paints.webp" />
                    <br></br>
                    <br></br>
                    <p>STRINGENT SAFETY PROTOCOL</p>
                </div>
                <div className="col-md-2">
                    <img alt="services-sps-why-chose-our-services-supervised-painting-icon-asian-paints" title="services-sps-why-chose-our-services-supervised-painting-icon-asian-paints" src="//static.asianpaints.com/content/dam/asian_paints/sps_overhaul/webp-images/services/services-sps-why-chose-our-services-supervised-painting-icon-asian-paints.webp" />
                    <br></br>
                    <br></br>
                    <p>SUPERVISED PAINTING</p>
                </div>
                <div className="col-md-2">
                    <img alt="services-sps-why-chose-our-services-mechanized-tools-icon-asian-paints" title="services-sps-why-chose-our-services-mechanized-tools-icon-asian-paints" src="//static.asianpaints.com/content/dam/asian_paints/sps_overhaul/webp-images/services/services-sps-why-chose-our-services-mechanized-tools-icon-asian-paints.webp" />
                    <br></br>
                    <br></br>
                    <p>MECHANIZED TOOLS</p>
                </div>
            </div>
            <br></br>
            <br></br>
            <div className="img-text">
                <h1 style={{fontWeight:"400 ",fontSize:"30px",fontFamily:"Montseerrat",lineHeight:"1.7" }} >We help you with</h1>
                <div className="row">
                    <div className="col-md-3">
                        <div class="card" >
                            <img src={Estimate3png} class="card-img-top" alt="..." style={{ height: "200px" }} />
                            <div class="card-body">
                                <h3 class="card-title" style={{fontWeight:"400 ",fontSize:"30px",fontFamily:"Montseerrat",lineHeight:"1.7" }}>Wall Textures</h3>
                                <p class="card-text">High-quality textured designs to get a modern facelift for your homes and other spaces.</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div class="card" >
                            <img src={Estimate4png} class="card-img-top" alt="..." style={{ height: "200px" }} />
                            <div class="card-body">
                                <h3 class="card-title" style={{fontWeight:"400 ",fontSize:"30px",fontFamily:"Montseerrat",lineHeight:"1.7" }}>Wallpapers</h3>
                                <p class="card-text">Designer wallpapers with attractive patterns which works wonders in elevating house walls.</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div class="card" >
                            <img src={Estimate5png} class="card-img-top" alt="..." style={{ height: "200px" }} />
                            <div class="card-body">
                                <h3 class="card-title" style={{fontWeight:"400 ",fontSize:"30px",fontFamily:"Montseerrat",lineHeight:"1.7" }}>Waterproofing</h3>
                                <p class="card-text">Devised modern waterproofing techniques to make your home water resistant for years to come.</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div class="card" >
                            <img src={Estimate6png} class="card-img-top" alt="..." style={{ height: "200px" }} />
                            <div class="card-body">
                                <h3 class="card-title" style={{fontWeight:"400 ",fontSize:"30px",fontFamily:"Montseerrat",lineHeight:"1.7" }}>Wood Finishes</h3>
                                <p class="card-text">Preserve the beauty of your wood with a touch of style and luxury that goes hand in hand.</p>

                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div className="img-container">
                <img src={bg} className="card-img" alt="Image 2" style={{ height: "400px" }} />
            </div>
            </div>
            <Footer/>
        </div>

    );
}
export default Estimatecosting;