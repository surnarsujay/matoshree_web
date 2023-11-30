import React from 'react'
import cardImage1 from '../subimg/All Type Tile, Marble, Granite Work.jpg'; // Replace with your image URLs
import cardImage2 from '../subimg/Vinyl Flooring.jpg';
import cardImage3 from '../subimg/Carpet Flooring.jpg';
import cardImage4 from '../subimg/Wooden Flooring.jpg';
import'../css/Gypsum.css'
import Footer from '../components/Footer';

function FlooringWork() {
    return (
        <div className="card subcard">
        <div className="card-body">
        <h4 className='titlename'>Flooring Work</h4>
            <h6 className='subname' style={{margin:'20px'}}>We Offfers to You All type of Flooring Work.</h6>
        <div className="container" style={{boxShadow:'2px 2px 5px rgba(0, 0, 0, 0.2)',padding:'30px'}}>
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="card subcard">
                        <img src={cardImage1} className="card-img-top" alt="Card 1" />
                        <div className="card-body">
                            <h5 className="card-title">All Type Tile, Marble, Granite Work</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="card subcard">
                        <img src={cardImage2} className="card-img-top" alt="Card 2" />
                        <div className="card-body">
                            <h5 className="card-title">Vinyl Flooring</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="card subcard">
                        <img src={cardImage3} className="card-img-top" alt="Card 3" />
                        <div className="card-body">
                            <h5 className="card-title">Wooden Flooring</h5>
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
        </div>
        </div>
<Footer/>
        </div>
    );
}

export default FlooringWork