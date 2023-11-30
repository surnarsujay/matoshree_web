import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { GrNext } from 'react-icons/gr';
import { GrPrevious } from 'react-icons/gr';
import { BiStar } from 'react-icons/bi';
import '../css/ReviewSlider.css';
const Review = () => (
  <div className="review">
    <BiStar size={25} fill="#FFD700" />
    <BiStar size={25} fill="#FFD700" />
    <BiStar size={25} fill="#FFD700" />
    <BiStar size={25} fill="#FFD700" />
    <BiStar size={25} fill="#FFD700" />
  </div>
);
function ReviewSlider(){
  const [activeSlide, setActiveSlide] = useState(0);
    useEffect(() => {
        // Get a reference to your carousel element
        const carousel = document.getElementById('myCarousel');
        carousel.addEventListener('slide.bs.carousel', (event) => {
            setActiveSlide(event.to);
        });
    }, []);

  return (
    <div className="container" style={{ marginTop: '40px', marginBottom: '10px' }}>
      <div className="row">
        <h3>What Client Says</h3>
        <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel" data-bs-interval="3000">
          <div className="carousel-inner">
            <div className="carousel-item active">
              {/* Slide 1 content */}
              <div className="carousel-caption center-text">
                <p>I have firsthand experience of "MI" work. He takes special efforts to
                  understand the purpose of our workspace & key message to be conveyed. I wish him good luck.</p>
                <span>
                  Vilas Shinde
                  <p className='role'>Director</p>
                  <p className='role'> Sahyadri Farms, Nashik</p>
                  <Review/>
                </span>
              </div>
            </div>
            <div className="carousel-item">
              {/* Slide 2 content */}
              <div className="carousel-caption center-text">
                <p>My heartiest congratulations to "Matoshree Interiors" for his excellent work.
                  Feeling proud that we are associated with such a renowned interior designing organization & his team.</p>
                <span>
                  B.R Thokale
                  <p className='role'>Executive Egineer</p>
                  <p className='role'>Maharashtra State Police Housing & WC, Mumbai</p>
                  <Review/>
                </span>
              </div>
            </div>
            <div className="carousel-item">
              {/* Slide 3 content */}
              <div className="carousel-caption center-text">
                <p>Every assigned work is completed before schedule with good quality parameters and
                  we always reserve them for our prestigious projects in future as well.</p>
                <span>
                  Salim Mulla
                  <p className='role'> Executive Engineer</p>
                  <p className='role'> Nyati Engineers & Consultant Pvt Ltd, Pune</p>
                  <Review/>
                </span>
              </div>
            </div>
            <div className="carousel-item">
              {/* Slide 4 content */}
              <div className="carousel-caption center-text">
                <p>We acknowledge the contribution of "Matoshree Interior" as very dependable and resourceful Interior Service
                  who have always delivered high quality Creative work, even at short notice.</p>
                <span>
                  Devendra Singh
                  <p className='role'>Executive Engineer</p>
                  <p className='role' > Central Public Work Developemet, Nashik</p>
                  <Review/>
                </span>
              </div>
            </div>
          </div>
          <div className="custom-indicators" style={{ marginBottom: '0px' }}>
                <button
                    type="button"
                    data-bs-target="#myCarousel"
                    data-bs-slide-to="0"
                    className={`dot ${activeSlide === 0 ? 'active' : ''}`}
                    aria-label="Slide 1"
                ></button>
                <button
                    type="button"
                    data-bs-target="#myCarousel"
                    data-bs-slide-to="1"
                    className={`dot ${activeSlide === 1 ? 'active' : ''}`}
                    aria-label="Slide 2"
                ></button>
                <button
                    type="button"
                    data-bs-target="#myCarousel"
                    data-bs-slide-to="2"
                    className={`dot ${activeSlide === 2 ? 'active' : ''}`}
                    aria-label="Slide 3"
                ></button>
                <button
                    type="button"
                    data-bs-target="#myCarousel"
                    data-bs-slide-to="3"
                    className={`dot ${activeSlide === 3 ? 'active' : ''}`}
                    aria-label="Slide 4"
                ></button>
            </div>

          <a className="carousel-control-prev" href="#myCarousel" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"><GrPrevious /></span>
            
          </a>
          <a className="carousel-control-next" href="#myCarousel" role="button" data-bs-slide="next" >
            <span className="carousel-control-next-icon" aria-hidden="true"> <GrNext /></span>
           
          </a>
        </div>
      </div>
    </div>
  );
};
                    
export default ReviewSlider;