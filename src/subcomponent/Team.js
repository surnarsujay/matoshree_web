import React from "react";
import Team1 from '../images/Team.png'
import Team2 from '../images/Team2.png'
import Team3 from '../images/Team3.png';
import Team4 from '../images/Team4.png'
function Team(){
    return(
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
        <div className="col-md-3">
            <div class="card" >
                <img src={Team4} class="card-img-top" alt="..." style={{ height: "200px" }} />

            </div>
        </div>
    </div>
    )
}
export default Team;