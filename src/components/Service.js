import React,{useState,useEffect} from "react";
import axios from 'axios'
import '../css/Service.css';
import p9png from '../images/p9.png';

function Service() {

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
        <div className="container-fluid" style={{ height: "100%", width: "100%", backgroundColor: "rgb(243 244 246 )", marginTop: "40px" }}>
            <h1 className="textCenterCustom">Services We Offer</h1>
            <br></br>
            <div className="row">
                <div className="col-md-4">

                    <div className="card servicecard" style={{ marginLeft: "0px" }}>
                        <div className="card-body d-flex justify-content-start align-items-center1">
                            <img src={p9png} className="card-img" alt="Image 1" style={{ height: "64px", width: "64px", borderRadius: "50px", marginLeft: '8px' }} />
                            <div className="ml-3">
                                <h5 style={{ textAlign: "center", marginLeft: "20px" }}>Interior Work Design</h5>
                            </div>
                        </div>
                    </div>
                </div>





                <div className="col-md-4">
                    <div className="card servicecard" style={{ marginLeft: "0px" }}>
                        <div className="card-body d-flex justify-content-start align-items-center2">
                            <img src={p9png} className="card-img" alt="Image 2" style={{ height: "64px", width: "64px", borderRadius: "50px", marginLeft: '15px' }} />
                            <div className="ml-3">
                                    <h5 style={{ textAlign: "center", marginLeft: "10px" }}>Estimating & Costing For Interior</h5>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-md-4">
                    <div className="card servicecard" style={{ marginLeft: "0px" }}>
                        <div className="card-body d-flex justify-content-start align-items-center3">
                            <img src={p9png} className="card-img" alt="Image 3" style={{ height: "64px", width: "64px", borderRadius: "50px", marginLeft: '8px' }} />
                            <div className="ml-3">
                                    <h5 style={{ textAlign: "center", marginLeft: "20px" }}>Interior Work Budgeting</h5>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>

            <div className="row">

                <div className="col-md-4">
                    <div className="card servicecard" style={{ marginLeft: "0px" }}>
                        <div className="card-body d-flex justify-content-start align-items-center1">
                            <img src={p9png} className="card-img" alt="Image 4" style={{ height: "64px", width: "64px", borderRadius: "50px", marginLeft: '8px' }} />
                            <div className="ml-3">
                             
                                    <h5 style={{ textAlign: "center", marginLeft: "20px" }}>Interior Item and Material Supply</h5>
                         
                            </div>
                        </div>
                    </div>
                </div>




                <div className="col-md-4">
                    <div className="card servicecard" style={{ marginLeft: "0px" }}>
                        <div className="card-body d-flex justify-content-start align-items-center2">
                            <img src={p9png} className="card-img" alt="Image 5" style={{ height: "64px", width: "64px", borderRadius: "50px", marginLeft: '15px' }} />
                            <div className="ml-3">
                                <nav>
                                  
                                        <h5 style={{ textAlign: "center", marginLeft: "20px" }}>On Site Carpentry Work</h5>
                                   </nav>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card servicecard" style={{ marginLeft: "0px" }}>
                        <div className="card-body d-flex justify-content-start align-items-center3">
                            <img src={p9png} className="card-img" alt="Image 6" style={{ height: "64px", width: "64px", borderRadius: "50px", marginLeft: '8px' }} />
                            <div className="ml-3">
                               
                                    <h5 style={{ textAlign: "center", marginLeft: "20px" }}>Modular Furniture Works</h5>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br>
            </br>
            
            <div className="row">
                <div className="col-md-4">
                    <div className="card servicecard" style={{ marginLeft: "0px" }}>
                        <div className="card-body d-flex justify-content-start align-items-center1">
                            <img src={p9png} className="card-img" alt="Image 7" style={{ height: "64px", width: "64px", borderRadius: "50px", marginLeft: '8px' }} />
                            <div className="ml-3">
                              
                                    <h5 style={{ textAlign: "center", marginLeft: "20px" }}>All Gypsum Works</h5>
                              
                            </div>
                        </div>
                    </div>
                </div>



                <div className="col-md-4">
                    <div className="card servicecard" style={{ marginLeft: "0px" }}>
                        <div className="card-body d-flex justify-content-start align-items-center2">
                            <img src={p9png} className="card-img" alt="Image 8" style={{ height: "64px", width: "64px", borderRadius: "50px", marginLeft: '15px' }} />
                            <div className="ml-3">
                          
                                    <h5 style={{ textAlign: "center", marginLeft: "20px" }}>All Painting Works</h5>
                              
                            </div>
                        </div>
                    </div>
                </div>




                <div className="col-md-4">
                    <div className="card servicecard" style={{ marginLeft: "0px" }}>
                        <div className="card-body d-flex justify-content-start align-items-center3">
                            <img src={p9png} className="card-img" alt="Image 9" style={{ height: "64px", width: "64px", borderRadius: "50px", marginLeft: '8px' }} />
                            <div className="ml-3">
                              
                                    <h5 style={{ textAlign: "center", marginLeft: "20px" }}>All Aluminium Works</h5>
                              
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            
            {/* <div className="row">
                <div className="col-md-4">
                    <div className="card servicecard" style={{ marginLeft: "0px" }}>
                        <div className="card-body d-flex justify-content-start align-items-center1">
                            <img src={p9png} className="card-img" alt="Image 10" style={{ height: "64px", width: "64px", borderRadius: "50px", marginLeft: '8px' }} />
                            <div className="ml-3">
                            
                                    <h5 style={{ textAlign: "center", marginLeft: "20px" }}>Corian Material Works</h5>
                            
                            </div>
                        </div>
                    </div>
                </div>

            </div> */}

            <div className="row">
            {servicesData.map((gypsum, index) => (
                <div key={index}  className="col-md-4" style={{ marginTop: "20px" }}>
                    <div className="card servicecard" style={{ marginLeft: "0px" }}>
                        <div className="card-body d-flex justify-content-start align-items-center1">
                            <img src={p9png} className="card-img" alt="Image 10" style={{ height: "64px", width: "64px", borderRadius: "50px", marginLeft: '8px' }} />
                            <div className="ml-3">
                            
                                    <h5 style={{ textAlign: "center", marginLeft: "20px" }}>{gypsum.Service_Name}</h5>
                            
                            </div>
                        </div>
                    </div>
                </div>
         ))}
            </div>
        </div>
    )
}
export default Service;