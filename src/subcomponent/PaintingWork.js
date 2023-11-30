import React from 'react'
import cardImage1 from '../subimg/InternalWallPainting.jpg'; // Replace with your image URLs
import cardImage2 from '../subimg/ExternalWallPainting.jpg';
import cardImage3 from '../subimg/Oilpaint.jpg';
import cardImage4 from '../subimg/Polish.jpg';
import cardImage5 from '../subimg/SprayPolish.jpg';
import cardImage6 from '../subimg/Deco.jpg';
import cardImage7 from '../subimg/Spray Painting.jpg';
import cardImage8 from '../subimg/All Type Texture.jpg';
import cardImage9 from '../subimg/Wall Paper.jpg';
import cardImage10 from '../subimg/Enamel Paint.jpg';
import'../css/Gypsum.css'
import Footer from '../components/Footer';

function Paintingwork() {
    return (
        <div className="card subcard">
        <div className="card-body">
        <h4  className='titlename'>All Type Painting Work</h4>
            {/* <h6 style={{margin:'20px'}}>All Type Painting Work</h6> */}
        <div className="container" style={{boxShadow:'2px 2px 5px rgba(0, 0, 0, 0.2)',padding:'30px'}}>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card subcard">
                        <img src={cardImage1} className="card-img-top" alt="Card 1" />
                        <div className="card-body">
                            <h5 className="card-title">Internal Wall Painting</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card subcard">
                        <img src={cardImage2} className="card-img-top" alt="Card 2" />
                        <div className="card-body">
                            <h5 className="card-title">External Wall Painting</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card subcard">
                        <img src={cardImage3} className="card-img-top" alt="Card 3" />
                        <div className="card-body">
                            <h5 className="card-title"> Oilpaint</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card subcard">
                        <img src={cardImage4} className="card-img-top" alt="Card 1" />
                        <div className="card-body">
                            <h5 className="card-title"> Polish</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card subcard">
                        <img src={cardImage5} className="card-img-top" alt="Card 2" />
                        <div className="card-body">
                            <h5 className="card-title"> Spray Polish</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card subcard">
                        <img src={cardImage6} className="card-img-top" alt="Card 3" />
                        <div className="card-body">
                            <h5 className="card-title"> Deco</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="card subcard">
                        <img src={cardImage7} className="card-img-top" alt="Card 1" />
                        <div className="card-body">
                            <h5 className="card-title"> Spray Painting</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="card subcard">
                        <img src={cardImage8} className="card-img-top" alt="Card 2" />
                        <div className="card-body">
                            <h5 className="card-title"> All Type Texture</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="card subcard">
                        <img src={cardImage9} className="card-img-top" alt="Card 4" />
                        <div className="card-body">
                            <h5 className="card-title"> Wall Paper</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="card subcard">
                        <img src={cardImage10} className="card-img-top" alt="Card 1" />
                        <div className="card-body">
                            <h5 className="card-title"> Enamel Paint</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
              
                </div>
        </div>
        </div>
<Footer/>
        </div>
    );
}

export default Paintingwork