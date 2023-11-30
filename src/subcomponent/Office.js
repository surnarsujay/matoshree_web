import React from "react";
import Office1 from '../images/Office1.png'
import Office2 from '../images/Office2.png'
import Office3 from '../images/office3.png'
import Office4 from '../images/Office4.png'
function Office(){
    return(
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
    )
}
export default Office;