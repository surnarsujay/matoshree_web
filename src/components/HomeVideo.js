import React from 'react';
import home from '../videos/interiors.mp4';
import '../css/Homevideo.css';
import Card from 'react-bootstrap/Card';

const HomeVideo = () => {
    return (
        <>
            <Card className="mt-md-0" style={{background:'whitesmoke'}}>
                <Card.Body>
                    <div className="video-container">
                        <video controls={false} className='myvideo' autoPlay disablePictureInPicture loop muted>
                            <source src={home} type="video/mp4" />
                        </video>
                        <div className="video-text">
                            <h1>Welcome to</h1>
                            <h1>Matoshree Interiors</h1>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
};

export default HomeVideo;
