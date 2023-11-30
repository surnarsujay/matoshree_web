import React from 'react'
import cardImage1 from '../subimg/Table Top.jpg';
import cardImage2 from '../subimg/Wall paneling.jpg';
import cardImage3 from '../subimg/CNC Cutting Work.jpg';
import Footer from '../components/Footer';
import'../css/Gypsum.css'

function CorianWork() {
    return (
        <div className="card subcard">
        <div className="card-body">
        <h4 className='titlename'>Corian Work</h4>
            <h6 className='subname' style={{margin:'20px'}}>We Offfers to You All type of Corian Work.</h6>
        <div className="container" style={{boxShadow:'2px 2px 5px rgba(0, 0, 0, 0.2)',padding:'30px'}}>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card subcard">
                        <img src={cardImage1} className="card-img-top" alt="Card 1" />
                        <div className="card-body">
                            <h5 className="card-title">Table Top</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card subcard">
                        <img src={cardImage2} className="card-img-top" alt="Card 2" />
                        <div className="card-body">
                            <h5 className="card-title">Wall paneling</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card subcard">
                        <img src={cardImage3} className="card-img-top" alt="Card 3" />
                        <div className="card-body">
                            <h5 className="card-title">CNC Cutting Work</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
     <Footer/>
        </div>
    );
}

export default CorianWork