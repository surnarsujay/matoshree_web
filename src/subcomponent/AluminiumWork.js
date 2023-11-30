import React from 'react'
import cardImage1 from '../subimg/A Sliding Windows.jpg'; // Replace with your image URLs
import cardImage2 from '../subimg/A Openable Window.jpg';
import cardImage3 from '../subimg/A Fix Window.jpg';
import cardImage4 from '../subimg/A Sliding Door.jpg';
import cardImage5 from '../subimg/A Sliding Door Soft CloseSensor.jpg';
import cardImage6 from '../subimg/A Lowers & Ventilators.jpg';
import cardImage7 from '../subimg/A Openable Door.jpg';
import cardImage8 from '../subimg/A Aluminium Full Height Partition.jpg';
import cardImage9 from '../subimg/A Aluminium Half Height Partition.jpg';
import'../css/Gypsum.css';
import Footer from '../components/Footer';

function AluminiumWork() {
    return (
        <div className="card subcard">
        <div className="card-body">
        <h4  className='titlename'>Aluminium Work</h4>
            <h6  className='subname' style={{margin:'20px'}}>We Offfers to You All type of Aluminium Windows,Aluminium Doors & Aluminium Partitions Work.</h6>
        <div className="container" style={{boxShadow:'2px 2px 5px rgba(0, 0, 0, 0.2)',padding:'30px'}}>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card subcard">
                        <img src={cardImage1} className="card-img-top" alt="Card 1" />
                        <div className="card-body">
                            <h5 className="card-title">Sliding Windows (2 Trak/3 Track/4 Track)</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card subcard">
                        <img src={cardImage2} className="card-img-top" alt="Card 2" />
                        <div className="card-body">
                            <h5 className="card-title">Openable Window (Horizontal/Vertical)</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card subcard">
                        <img src={cardImage3} className="card-img-top" alt="Card 3" />
                        <div className="card-body">
                            <h5 className="card-title"> Fix Window</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card subcard">
                        <img src={cardImage4} className="card-img-top" alt="Card 1" />
                        <div className="card-body">
                            <h5 className="card-title"> Sliding Door(2 Trak/3 Track/ 4 Track)</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card subcard">
                        <img src={cardImage5} className="card-img-top" alt="Card 3" />
                        <div className="card-body">
                            <h5 className="card-title"> Sliding Door(Soft Close/Sensor)</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card subcard">
                        <img src={cardImage6} className="card-img-top" alt="Card 1" />
                        <div className="card-body">
                            <h5 className="card-title">Lowers & Ventilators</h5>
                        </div>
                    </div>
                </div>
                <div className='row'>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card subcard">
                        <img src={cardImage7} className="card-img-top" alt="Card 2" />
                        <div className="card-body">
                            <h5 className="card-title">Openable Door (Double Door/ Single Door)</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card subcard">
                        <img src={cardImage8} className="card-img-top" alt="Card 4" />
                        <div className="card-body">
                            <h5 className="card-title"> Aluminium Full Height Partition (With Glass/Partical Board/ACP/Plywood)</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card subcard">
                        <img src={cardImage9} className="card-img-top" alt="Card 4" />
                        <div className="card-body">
                            <h5 className="card-title"> Aluminium Half Height Partition (With Glass/Partical Board/ACP/Plywood)</h5>
                        </div>
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

export default AluminiumWork