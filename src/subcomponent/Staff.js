import React from 'react'
import Staff1 from '../images/staf1.png'
import Staff2 from '../images/staff2.png'
import Staff3 from '../images/staff3.png'
import Staff4 from '../images/staff4.png'
import Staff5 from '../images/staff5.png'
import Staff6 from '../images/staff6.png'
function Staff() {
    return (
        <div>
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
            </div>
            </div>
            )
}
            export default Staff;