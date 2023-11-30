import React,{useEffect,useState} from "react";
import '../css/SubProjects.css';
import p1 from '../images/p1.png'
import p2 from '../images/p2.png'
import p3 from '../images/p3.png'
import p4 from '../images/p4.png'
import p5 from '../images/p5.jpg'
import p6 from '../images/p6.jpg'
import p7 from '../images/p7.png'
import p8 from '../images/p8.png'
import Projectvd from '../videos/Projectvd.mp4';
import axios from "axios";
import { FaArrowRight } from "react-icons/fa";


import { Card } from "react-bootstrap";
import Footer from "../components/Footer";



function SubProjects() {

    const [projectData, setProjectData] = useState([]);

    useEffect(() => {
        // Fetch data from the API endpoint
        axios.get('http://localhost:3001/api/projects')
        //  axios.get('https://matoshreewebsite.lissomtech.in/APIMatoshree/api/projects')
            .then(response => {
                // Log the fetched data to the console
                console.log('Fetched Data:', response.data);
  
                // Set the fetched data to the state
                setProjectData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="container-fluid" style={{ padding: '0px' }}>

            <br></br>
            <div class="header-intro">
                <Card className="video-card">
                    <video autoPlay muted loop controls={false} >
                        <source src={Projectvd} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </Card>
            </div>
            <br></br>

            <div className="container" style={{ padding: '0px' }}>
                <h1 className="text-center" style={{ padding: '10px' }}>Completed Projects</h1><br></br>
                <div className="row mainrow">
                    <div className="col-md-4">
                        <div className="card proj" >
                            <img src={p1} className="card-img-top" alt="Image 1" />
                            <div className="card-body">
                                <h5 className="card-title">Shiri Saibaba Education Complex Shirdi</h5>
                                <p className="card-text">Project Area: 588060 Sq.ft Construction Of 5 Buildings Junior & Senior College English Medium School Kanya Vidyalaya Auditorium, 4,5 Acre Playground, Sports Complex, Swimming Pool To Be Done Over A Total Plot Area Of 13.5 Acres Main Contractor Nyatt Group, Pune Architect: D. Q. Nikam, Pune.</p>
                                <br></br>
                                <p className="learn-more-link">
                                    LEARN MORE<FaArrowRight style={{ marginLeft: "3px" }} />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card proj">
                            <img src={p2} className="card-img-top" alt="Image 2" />
                            <div className="card-body">
                                <h5 className="card-title"> Darshan Line Project Shirdi</h5>
                                <p className="card-text">Total area of sie 000 Sq. ft. Area includes, 18 Big Halls It lobbys, VIP areas, waiting area, breakout area, conference hal Board rooms meeting rooms, canteen. Time required for completion is 18 months. Main Contractor:- Shrim Bhanu Construction Mumbai. Architect: Mathur & Kapare Delhi.</p>
                                <br/>
                                <br/>
                                <p className="learn-more-link">
                                    LEARN MORE<FaArrowRight style={{ marginLeft: "3px" }} />

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card proj">
                            <img src={p3} className="card-img-top" alt="Image 3" />
                            <div className="card-body">
                                <h5 className="card-title">Shirdi International Airport Shirdi</h5>
                                <p className="card-text">Total area of site is 13000Sqft Seating capacity 80 Staff • Area includes, Admin Building, CISF Building. Armory Blog Fire Station. Casualty Center, ATC Tower, VIP areas, waiting area, breakout area, conference hall. Board rooms, meeting rooms, canteen Time required for completion is 8 months.</p>
                                <br/>
                                <br/>

                                <p className="learn-more-link">

                                    LEARN MORE<FaArrowRight style={{ marginLeft: "3px" }} />

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mainrow">

                    <div className="col-md-4">
                        <div className="card proj" >
                            <img src={p4} className="card-img-top" alt="Image 1" />
                            <div className="card-body">
                                <h5 className="card-title">Sahyadri Farms Nashik</h5>
                                <p className="card-text">Totol of site is 104000 Sq. ft. Commercial Office Interior & erter work Seating capacity 392 Staff Area includes Officers Cabins, Receptions Staff Workstations, Packing Plants: Factory Outlets Shopping Malls, Labs, Training Centers Etc. Time required for completion is 11 months.</p>
                                <br></br>
                                <p className="learn-more-link">

                                    LEARN MORE<FaArrowRight style={{ marginLeft: "3px" }} />

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card proj">
                            <img src={p5} className="card-img-top" alt="Image 2" />
                            <div className="card-body">
                                <h5 className="card-title">The Gateway Hotel Nashik</h5>
                                <p className="card-text">3 Star Hotel in Nashik Four storied Building Total area of site is 143000 Sqft Total 83 Rooms Area includes King Room, Twin room, Sultes, Prefunction area, Meeting room, Lift lobbys, main lobbys, All day dinning area, Party hall Etc Time required for completion was 18 months.</p>
                                <br/>
                                <p className="learn-more-link">

                                    LEARN MORE<FaArrowRight style={{ marginLeft: "3px" }} />

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card proj">
                            <img src={p6} className="card-img-top" alt="Image 3" />
                            <div className="card-body">
                                <h5 className="card-title">Genral Mills India pvt Ltd Sinner</h5>
                                <p className="card-text">Plant office gaon MIDC Sinner Area includes Zonal office regional office, CIDA office, Auditorium having capacity of 50 peoples, VIP areas, waiting area, breakout area, conference hall, Board rooms, meeting rooms, canteen Time required for completion is Month.</p>
                                <br/>

                                <p className="learn-more-link">

                                    LEARN MORE<FaArrowRight style={{ marginLeft: "3px" }} />

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mainrow">

                    <div className="col-md-6">
                        <div className="card proj" >
                            <img src={p7} className="card-img-top" alt="Image 1" />
                            <div className="card-body">
                                <h5 className="card-title">HB Fuller, Head Office Pune</h5>
                                <p className="card-text">office in Pune. Total area of entire site is 8000 Sq. ft. Our work is on one floor. Total seating capacity is 87 staff members Area includes Lift lobby's, staff area, cabins for executive's, Canteen. Total time required for completion was 4 months.</p>
                                <br></br>
                                <p className="learn-more-link">

                                    LEARN MORE<FaArrowRight style={{ marginLeft: "3px" }} />

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card proj">
                            <img src={p8} className="card-img-top" alt="Image 2" />
                            <div className="card-body">
                                <h5 className="card-title">Mahim Costal Police Station Mumbai</h5>
                                <p className="card-text">9000 Sq Seating capacity 42 Staff personal office, regional office. CIDA office. Audung capacity of 80 peoples in lobbys VIP areas wating asa bedilout area conference hall Board rooms meeting cons canteen Time required for completion is 3 months.</p>
                                <br/>
                                
                                <p className="learn-more-link">

                                    LEARN MORE<FaArrowRight style={{ marginLeft: "3px" }} />

                                </p>
                            </div>
                        </div>
                    </div>
                </div>



<div className="row">
      {projectData.map((project, index) => (
        <div className={`col-md-4 ${index >= 3 ? 'mt-4' : ''}`} key={index}>

          <div className="card">
            <img src={`data:image/jpeg;base64,${project.file_img
            }`} className="card-img-top" alt={`Project Image ${index + 1}`} />
            <div className="card-body">
              <h4 className="card-title">{project.Project_Name}</h4>
              <p className="card-text">{project.Project_Description}</p>
              <br />
              <p className="learn-more-link">
                LEARN MORE <FaArrowRight style={{ marginLeft: "3px" }} />
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>



            </div>
            <br></br>
            <br></br>
          <Footer/>
        </div>
    );
}

export default SubProjects;