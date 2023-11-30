import React from 'react'
import cardImage1 from '../subimg/Gypsum Wall Partition.jpg'; // Replace with your image URLs
import cardImage2 from '../subimg/GypsumCeiling.jpg';
import cardImage3 from '../subimg/GypsumPlaster.jpg';
import cardImage4 from '../subimg/GypsumWallPaneling.jpg';
import cardImage5 from '../subimg/AcousticPartition.jpg';
import cardImage6 from '../subimg/AcousticCeiling.jpg';
import cardImage7 from '../subimg/Metalceiling.jpg';
import cardImage8 from '../subimg/Gridceiling.jpg';
import'../css/Gypsum.css'
import Footer from '../components/Footer';

function Gypsum() {
    return (
        <div className="card subcard">
        <div className="card-body">
        <h4 className='titlename'>Gypsum Work</h4>
            <h6 className='subname' style={{margin:'20px'}}>We Offfers to You All type of Gypsum Work.</h6>
        <div className="container" style={{boxShadow:'2px 2px 5px rgba(0, 0, 0, 0.2)',padding:'30px'}}>
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="card subcard">
                        <img src={cardImage1} className="card-img-top" alt="Card 1" />
                        <div className="card-body">
                            <h5 className="card-title">Gypsum Wall Partition</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="card subcard">
                        <img src={cardImage2} className="card-img-top" alt="Card 2" />
                        <div className="card-body">
                            <h5 className="card-title">Gypsum Ceiling</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="card subcard">
                        <img src={cardImage3} className="card-img-top" alt="Card 3" />
                        <div className="card-body">
                            <h5 className="card-title">Gypsum Plaster</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="card subcard">
                        <img src={cardImage4} className="card-img-top" alt="Card 4" />
                        <div className="card-body">
                            <h5 className="card-title">GypsumWall Paneling</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="card subcard">
                        <img src={cardImage5} className="card-img-top" alt="Card 1" />
                        <div className="card-body">
                            <h5 className="card-title">Acoustic Partition</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="card subcard">
                        <img src={cardImage6} className="card-img-top" alt="Card 2" />
                        <div className="card-body">
                            <h5 className="card-title">Acoustic Ceiling</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="card subcard">
                        <img src={cardImage7} className="card-img-top" alt="Card 3" />
                        <div className="card-body">
                            <h5 className="card-title">Metal ceiling</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="card subcard">
                        <img src={cardImage8} className="card-img-top" alt="Card 4" />
                        <div className="card-body">
                            <h5 className="card-title">Grid ceiling</h5>
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

export default Gypsum