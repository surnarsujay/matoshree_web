import React from 'react'
import cardImage1 from '../subimg/Glass Door (Sliding & Openable Door).jpg'; // Replace with your image URLs
import cardImage2 from '../subimg/Glass Partition For Bathroom.jpg';
import cardImage3 from '../subimg/Glass Partition For Cebine.jpg';
import cardImage4 from '../subimg/Glass Partition For Counter.jpg';
import cardImage5 from '../subimg/Table Top.jpg';
import cardImage6 from '../subimg/Glass Railing.jpg';
import'../css/Gypsum.css'
import Footer from '../components/Footer';

function GlassWork() {
    return (
        <div className="card subcard">
        <div className="card-body">
        <h4  className='titlename'>Glass Work</h4>
            <h6  className='subname' style={{margin:'20px'}}>We Offfers to You All type of Glass Work.</h6>
        <div className="container" style={{boxShadow:'2px 2px 5px rgba(0, 0, 0, 0.2)',padding:'30px'}}>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card subcard">
                        <img src={cardImage1} className="card-img-top" alt="Card 1" />
                        <div className="card-body">
                            <h5 className="card-title">Glass Door (Sliding & Openable Door)</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card subcard">
                        <img src={cardImage2} className="card-img-top" alt="Card 2" />
                        <div className="card-body">
                            <h5 className="card-title">Glass Partition For Bathroom</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card subcard">
                        <img src={cardImage3} className="card-img-top" alt="Card 3" />
                        <div className="card-body">
                            <h5 className="card-title"> Glass Partition For Cebine</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card subcard">
                        <img src={cardImage4} className="card-img-top" alt="Card 1" />
                        <div className="card-body">
                            <h5 className="card-title">Partition For Counter</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card subcard">
                        <img src={cardImage5} className="card-img-top" alt="Card 3" />
                        <div className="card-body">
                            <h5 className="card-title"> Table Top</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card subcard">
                        <img src={cardImage6} className="card-img-top" alt="Card 1" />
                        <div className="card-body">
                            <h5 className="card-title">Glass Railing</h5>
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

export default GlassWork;