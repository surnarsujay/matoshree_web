import React ,{useState,useEffect}from "react";
import '../css/Projects.css';
import p2png from '../images/p2.png'
import p4png from '../images/p4.png'
import p1png from '../images/p1.png'
import p3png from '../images/p3.png'
import { FaArrowRight } from "react-icons/fa";
import axios from 'axios'



function Projects() {
 
    return (
        <div className="container" style={{ marginTop: "50px",padding:"0px" }}>
            <h1 className="text-center">Our Renowned Projects</h1>
            <br></br>
            <div class="header-intro">

                <div class="image-container" >
                    <img src={p4png} className="card-img" alt="Image 2" style={{ height: "300px" }} />
                </div>
                <div className="text-container">
                    <h3>MATOSHREE</h3>
                </div>
            </div>

            <br></br>
            <br></br>
            <div className="row">

                <div className="col-md-4">
                    <div className="card" >
                        <img src={p3png} className="card-img-top" alt="Image 1" />
                        <div className="card-body">
                            <h4 className="card-title">Shirdi International Airport Shirdi</h4>
                            <p className="card-text">Total area of the site is 13000 Sqft. Seating capacity 80 Staff. Area includes Admin Building, CISF Building, Armory Blog, Fire Station, Casualty Center, ATC Tower, VIP areas, waiting area, breakout area, conference hall, board rooms, meeting rooms, canteen. Time required for completion is 8 months.</p>
                            <br></br>
                            <p className="learn-more-link">

                                LEARN MORE<FaArrowRight style={{ marginLeft: "3px" }} />

                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img src={p4png} className="card-img-top" alt="Image 2" />
                        <div className="card-body">
                            <h4 className="card-title">Sahyadri Farms Nashik</h4>
                            <p className="card-text">Totol of site is 104000 Sq. ft. Commercial Office Interior & erter work Seating capacity 392 Staff Area includes Officers Cabins, Receptions Staff Workstations, Packing Plants: Factory Outlets Shopping Malls, Labs, Training Centers Etc. Time required for completion is 11 months.</p>
                            <br />
                            <br />
                            <p className="learn-more-link">

                                LEARN MORE<FaArrowRight style={{ marginLeft: "3px" }} />

                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img src={p1png} className="card-img-top" alt="Image 3" />
                        <div className="card-body">
                            <h4 className="card-title">Shree Saibaba Education Complex Shirdi</h4>
                            <p className="card-text">Project Area: 588060 Sq.ft Construction Of 5 Buildings Junior & Senior College English Medium School Kanya Vidyalaya Auditorium, 4,5 Acre Playground, Sports Complex, Swimming Pool To Be Done Over A Total Plot Area Of 13.5 Acres Main Contractor Nyatt Group, Pune Architect: D. Q. Nikam, Pune.</p>
                            <br />
                            <p className="learn-more-link">

                                LEARN MORE<FaArrowRight style={{ marginLeft: "3px" }} />

                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>

   

        </div>


    );
}

export default Projects;