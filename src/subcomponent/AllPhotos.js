import React, { useState, useEffect } from "react";
import Staff1 from '../images/staf1.png'
import Staff2 from '../images/staff2.png'
import Staff3 from '../images/staff3.png'
import Staff4 from '../images/staff4.png'
import Staff5 from '../images/staff5.png'
import Staff6 from '../images/staff6.png'
import Team1 from '../images/Team.png'
import Team2 from '../images/Team2.png'
import Team3 from '../images/Team3.png';
import Team4 from '../images/Team4.png'
import Office1 from '../images/Office1.png'
import Office2 from '../images/Office2.png'
import Office3 from '../images/office3.png'
import Office4 from '../images/Office4.png'
import Estimate3png from '../images/Estimate3.png'
import Estimate4png from '../images/Estimate4.png';
import Estimate5png from '../images/Estimate5.png';
import Estimate6png from '../images/Estimate6.png';

import axios from 'axios'

function AllPhotos() {
    const [galleryData, setGalleryData] = useState([]);

    useEffect(() => {

        axios.get('http://localhost:3001/api/getimg')
            //axios.get('https://matoshreewebsite.lissomtech.in/APIMatoshree/api/events')
            .then(response => {
                console.log('Fetched Data:', response.data);
                setGalleryData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);



    return (
        <div>
            <div className="img-text">

                <div className="row">
                    <div className="col-md-3">
                        <div class="card" >
                            <img src={Estimate3png} class="card-img-top" alt="..." style={{ height: "200px" }} />

                        </div>
                    </div>
                    <div className="col-md-3">
                        <div class="card" >
                            <img src={Estimate4png} class="card-img-top" alt="..." style={{ height: "200px" }} />

                        </div>
                    </div>
                    <div className="col-md-3">
                        <div class="card" >
                            <img src={Estimate5png} class="card-img-top" alt="..." style={{ height: "200px" }} />

                        </div>
                    </div>
                    <div className="col-md-3">
                        <div class="card" >
                            <img src={Estimate6png} class="card-img-top" alt="..." style={{ height: "200px" }} />

                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div className="row">
                    <div className="col-md-3">
                        <div class="card" >
                            <img src={Staff1} class="card-img-top" alt="..." style={{ height: "200px" }} />

                        </div>
                    </div>
                    <div className="col-md-3">
                        <div class="card" >
                            <img src={Staff2} class="card-img-top" alt="..." style={{ height: "200px" }} />

                        </div>
                    </div>
                    <div className="col-md-3">
                        <div class="card" >
                            <img src={Staff3} class="card-img-top" alt="..." style={{ height: "200px" }} />

                        </div>
                    </div>
                    <div className="col-md-3">
                        <div class="card" >
                            <img src={Staff4} class="card-img-top" alt="..." style={{ height: "200px" }} />

                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div className="row">
                    <div className="col-md-3">
                        <div class="card" >
                            <img src={Staff5} class="card-img-top" alt="..." style={{ height: "200px" }} />

                        </div>
                    </div>
                    <div className="col-md-3">
                        <div class="card" >
                            <img src={Staff6} class="card-img-top" alt="..." style={{ height: "200px" }} />

                        </div>
                    </div>
                    <div className="col-md-3">
                        <div class="card" >
                            <img src={Team4} class="card-img-top" alt="..." style={{ height: "200px" }} />

                        </div>
                    </div>
                    <div className="col-md-3">
                        <div class="card" >
                            <img src={Staff2} class="card-img-top" alt="..." style={{ height: "200px" }} />

                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <div className="row">
                <div className="col-md-3">
                    <div class="card" >
                        <img src={Office1} class="card-img-top" alt="..." style={{ height: "200px" }} />

                    </div>
                </div>
                <div className="col-md-3">
                    <div class="card" >
                        <img src={Office3} class="card-img-top" alt="..." style={{ height: "200px" }} />

                    </div>
                </div>
                <div className="col-md-3">
                    <div class="card" >
                        <img src={Office4} class="card-img-top" alt="..." style={{ height: "200px" }} />

                    </div>
                </div>
                <div className="col-md-3">
                    <div class="card" >
                        <img src={Office2} class="card-img-top" alt="..." style={{ height: "200px" }} />

                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <div className="row">
                <div className="col-md-3">
                    <div class="card" >
                        <img src={Team1} class="card-img-top" alt="..." style={{ height: "200px" }} />

                    </div>
                </div>
                <div className="col-md-3">
                    <div class="card" >
                        <img src={Team2} class="card-img-top" alt="..." style={{ height: "200px" }} />

                    </div>
                </div>
                <div className="col-md-3">
                    <div class="card" >
                        <img src={Team3} class="card-img-top" alt="..." style={{ height: "200px" }} />

                    </div>
                </div>
            </div>

            <div className="row">
  {galleryData.map((event, index) => (
    <div className="col-md-3" style={{ marginTop: "40px" }}>
      <div class="card">
        <img
          src={`data:image/jpeg;base64,${event.Allimg}`}
          class="card-img-top"
          alt="..."
          style={{ height: "200px" }}
        />
      </div>
    </div>
  ))}
</div>



        </div>
    )
}
export default AllPhotos;